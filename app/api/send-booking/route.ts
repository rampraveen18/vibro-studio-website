import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, eventType, message } = await request.json();

    if (!name || !phone || !eventType) {
      return NextResponse.json(
        { error: "Name, phone, and event type are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vibro Productions" <${process.env.EMAIL_USER}>`,
      to: "vibroagency@gmail.com",
      subject: "New Booking Request - Vibro Productions",
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Event Type: ${eventType}`,
        `Message: ${message || "N/A"}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; background: #141414; color: #ededed; border-radius: 12px;">
          <h2 style="color: #c8a96e; margin-top: 0;">New Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">Sent from Vibro Productions website</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
