import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Sauvegarder l'email dans Google Sheets via GET
    try {
      const params = new URLSearchParams({
        email: normalizedEmail,
        date: new Date().toISOString(),
      });
      await fetch("https://script.google.com/macros/s/AKfycbx3NW36WuCndrbcxPJVn0gI63Ulh2vC3WPA2jwCV_XFnVYAKPwwNc_77q7rs0s8NKkghg/exec?" + params.toString());
    } catch {
      // Si le webhook échoue, on continue quand même
    }

    return NextResponse.json({
      success: true,
      message: "Email enregistré avec succès",
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
