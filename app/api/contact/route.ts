import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Validate Input (Server-side safety)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("Missing environment variables for email configuration.");
      return NextResponse.json(
        { error: "Email configuration is incomplete on the server." },
        { status: 500 },
      );
    }

    const port = Number(process.env.EMAIL_PORT) || 587;

    // 2. Create the Transporter using your .env variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: port,
      secure: port === 465 || process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        // Essential for avoiding handshake errors in many hosting environments
        rejectUnauthorized: false,
      },
      greetingTimeout: 10000,
      connectionTimeout: 10000,
    });

    // Verify the transporter connection before attempting to send
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP Verification Error:", verifyError);
      const message = verifyError instanceof Error ? verifyError.message : String(verifyError);
      return NextResponse.json(
        {
          error: `SMTP Connection failed: ${message || "Check credentials"}`,
        },
        { status: 500 },
      );
    }

    // 3. Define the Email Content
    const senderEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"${name}" <${senderEmail}>`, // Using authenticated email to prevent spam filters
      to: process.env.EMAIL_TO,
      replyTo: email, // So when you click "Reply", it goes to the user
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #333;">New Message from Portfolio</h2>
          <hr />
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    };

    // 4. Send it
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: message || "Failed to send email" },
      { status: 500 },
    );
  }
}
