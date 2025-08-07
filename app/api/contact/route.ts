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
    from: "castles.trailer.services@gmail.com", // ¡IMPORTANTE! Debe ser un correo que hayas verificado en SendGrid.
    subject: `Nuevo Mensaje de Contacto de ${name}`,
    html: `
      <h1>Nueva consulta desde tu sitio web</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email del cliente:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Tipo de Trailer:</strong> ${trailerType}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
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
