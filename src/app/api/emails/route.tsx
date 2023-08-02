import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  const body = await req.json()

  // nodemailer
  // transporter.send({
  //   to: gmail
  //   from: gmail
  //   subject: 'demande de contact sur mon portfolio',
  //   html: 'h1'
  //   text...
  // })

  return NextResponse.json({ message: "email sent" })
}
