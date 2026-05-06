import { NextRequest, NextResponse } from "next/server";

// ==========================================
// API ROUTE: FORMULAR CONTACT
// POST /api/contact
//
// Opțiuni de trimitere:
// 1. Email cu Resend/Nodemailer
// 2. Salvare în WordPress (plugin CF7/custom endpoint)
// 3. Webhook (Zapier, Make, etc.)
// ==========================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validare de bază
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Câmpurile nume, email și mesaj sunt obligatorii." },
        { status: 400 }
      );
    }

    // ==========================================
    // OPȚIUNEA 1: Trimite email cu Resend
    // npm install resend
    // Adaugă RESEND_API_KEY în .env.local
    // ==========================================
    /*
    const { Resend } = require("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: "Site <noreply@firma.ro>",
      to: "contact@firma.ro",
      subject: `[Contact Site] ${subject} - ${name}`,
      html: `
        <h2>Mesaj nou de pe site</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Necompletatt"}</p>
        <p><strong>Subiect:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // ==========================================
    // OPȚIUNEA 2: Salvează în WordPress
    // Folosind Contact Form 7 REST API
    // sau un endpoint custom
    // ==========================================
    /*
    const wpResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/FORM_ID/feedback`,
      {
        method: "POST",
        body: new FormData... 
      }
    );
    */

    // Placeholder — logăm datele
    console.log("📧 Formular contact primit:", { name, email, phone, subject, message });

    return NextResponse.json({
      success: true,
      message: "Mesajul a fost trimis cu succes!",
    });
  } catch (error) {
    console.error("Eroare la trimiterea formularului:", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rugăm să încerci din nou." },
      { status: 500 }
    );
  }
}
