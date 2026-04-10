// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Solo verificar en tiempo de ejecución, no durante el build
export async function POST(request: Request) {
  // 1. Verificar que la API Key existe (solo en runtime)
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ Error crítico: RESEND_API_KEY no está definida en el servidor.');
    return NextResponse.json(
      { error: 'Error de configuración del servidor: API Key de email no encontrada.' },
      { status: 500 }
    );
  }

  try {
    // 2. Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 3. Obtener y validar los datos del cuerpo de la petición
    const { nombre, email, telefono, producto, servicio } = await request.json();

    if (!nombre || !email || !telefono) {
      console.warn('⚠️ Faltan campos en la petición:', { nombre, email, telefono });
      return NextResponse.json(
        { error: 'Faltan datos requeridos: nombre, email o teléfono.' },
        { status: 400 }
      );
    }

    console.log(`Intentando enviar email para: ${nombre} (${email})`);

    // 4. Enviar el correo electrónico
    const { data, error } = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>',
      to: ['catita9olivares@gmail.com'],
      subject: `Nuevo contacto desde la web: ${nombre}`,
      text: `
        Se ha recibido un nuevo mensaje de contacto:
        
        📋 DATOS DEL CONTACTO:
        - Nombre: ${nombre}
        - Email: ${email}
        - Teléfono: ${telefono}
        
        📦 PRODUCTO DE INTERÉS:
        ${producto || 'No especificado'}
        
        🔧 SERVICIO DE INTERÉS:
        ${servicio || 'No especificado'}
      `,
    });

    if (error) {
      console.error('❌ Error devuelto por Resend:', error);
      return NextResponse.json(
        { error: `Error del servicio de email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('✅ Email enviado con éxito. ID:', data?.id);
    return NextResponse.json({ ok: true, message: 'Mensaje enviado correctamente.' });

  } catch (error) {
    console.error('💥 Error inesperado:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error interno en el servidor.' },
      { status: 500 }
    );
  }
}