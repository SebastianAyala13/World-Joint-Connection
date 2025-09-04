import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, mensaje } = body;

    // Validación básica
    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Mock de envío de email
    // TODO: Implementar con Nodemailer o Resend
    // Ejemplo con Resend:
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'World Joint Connection <noreply@worldjointconnection.com>',
      to: ['info@worldjointconnection.com'],
      subject: 'Nuevo mensaje de contacto - World Joint Connection',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    });
    */

    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log del mensaje (en producción, esto iría a un servicio de logging)
    console.log('Nuevo mensaje de contacto:', {
      nombre,
      empresa,
      email,
      telefono,
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
