import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Configura la API Key de SendGrid.
// process.env.SENDGRID_API_KEY es la variable de entorno que configurarás en Netlify.
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, trailerType, message } = body

  if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY no está configurada")
    return NextResponse.json({ message: "Error de configuración en el servidor." }, { status: 500 })
  }

  const msg = {
    to: "castleautotransport1@gmail.com", // El correo del dueño de la página.
    from: "castleautotransport1@gmail.com", // Debe ser un correo verificado en SendGrid.
    subject: `Nuevo Mensaje de Contacto de ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
          .header { background-color: #004AAE; color: #fff; text-align: center; padding: 20px; }
          .content { padding: 20px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
          th { background-color: #f5f5f5; }
          .footer { font-size: 12px; color: #777; text-align: center; padding: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Nueva consulta desde tu sitio web</h1>
        </div>
        <div class="content">
          <table>
            <tr><th>Nombre</th><td>${name}</td></tr>
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Teléfono</th><td>${phone}</td></tr>
            <tr><th>Tipo de Trailer</th><td>${trailerType}</td></tr>
          </table>
          <h2>Mensaje</h2>
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>Este correo fue generado automáticamente por Castle's Auto Trailer Repair Services.</p>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ message: "Email enviado exitosamente" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Error al enviar el email" }, { status: 500 })
  }
}
