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
      await fetch("https://script.google.com/macros/s/AKfycbyN2VUl_SyrNPbN75MWmmPQa9XWbF10yxhCyKeYnWcB3IW4m5bclXQxsjITXWuaSHHFGA/exec?" + params.toString());
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
