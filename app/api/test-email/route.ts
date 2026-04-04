import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    // Intentar enviar un email de prueba muy simple
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['catita9olivares@gmail.com'], // 👈 CAMBIA por TU email
      subject: 'Prueba desde mi web',
      text: 'Este es un email de prueba enviado desde mi aplicación en Vercel',
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente',
      data: data 
    });
    
  } catch (error) {
    console.error('Error general:', error);
    return NextResponse.json({ 
      success: false, 
      error: String(error) 
    }, { status: 500 });
  }
}