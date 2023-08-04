import { transporter } from "@/config/mailer"
import { NextResponse } from "next/server"
import { z } from "zod"

const validation = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export const POST = async (req: Request) => {
  const body = await req.json()
  const parsedData = validation.safeParse(body)
  if (!parsedData.success) {
    return NextResponse.json(
      { message: "validation failed", error: parsedData.error },
      { status: 422 }
    )
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_TO,
    subject: "Portfolio: " + parsedData.data.subject,
    html: `
      <h1>Demande de contact sur mon portfolio</h1>
      <p>Voici les informations du contact :</p>
      <ul>
        <li>Email: ${parsedData.data.email}</li>
        <li>Message: ${parsedData.data.message}</li>
      </ul>
    `,
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log("Email sent: " + result.response)

    return NextResponse.json({ message: "email sent" })
  } catch (error) {
    console.log("Email sent: " + error)
    return NextResponse.json(
      { error: true, message: "email not sent" },
      { status: 500 }
    )
  }
}
