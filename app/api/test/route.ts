import { NextResponse } from 'next/server';

export async function GET() {
  // Verificar si la API key existe
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyPreview = process.env.RESEND_API_KEY ? 
    process.env.RESEND_API_KEY.substring(0, 10) + '...' : 
    'no existe';
  
  return NextResponse.json({
    mensaje: 'API funcionando',
    tieneApiKey: hasKey,
    keyPreview: keyPreview,
    timestamp: new Date().toISOString()
  });
}