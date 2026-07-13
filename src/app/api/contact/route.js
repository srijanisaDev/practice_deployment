import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  // Validation
  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (name.length > 100 || email.length > 150 || message.length > 2000) {
    return Response.json(
      { error: "One or more fields exceed the allowed length." },
      { status: 400 }
    );
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  // Messages are delivered here. Overridable via CONTACT_TO_EMAIL if needed.
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "srijankumar770@gmail.com";

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error(
      "Contact form is not configured: missing GMAIL_USER or GMAIL_APP_PASSWORD."
    );
    return Response.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2 style="margin: 0 0 12px;">New portfolio contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return Response.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
