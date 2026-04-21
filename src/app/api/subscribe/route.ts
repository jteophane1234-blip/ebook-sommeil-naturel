import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

async function ensureFile() {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    await fs.access(SUBSCRIBERS_FILE);
  } catch {
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    await ensureFile();

    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    const subscribers: string[] = JSON.parse(data);

    const normalizedEmail = email.toLowerCase().trim();

    if (subscribers.includes(normalizedEmail)) {
      return NextResponse.json({
        success: true,
        message: "Email déjà enregistré",
        pdfUrl: "/recette-anti-insomnie-gratuite.pdf",
      });
    }

    subscribers.push(normalizedEmail);
    await fs.writeFile(
      SUBSCRIBERS_FILE,
      JSON.stringify(subscribers, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Email enregistré avec succès",
      pdfUrl: "/recette-anti-insomnie-gratuite.pdf",
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureFile();
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    const subscribers = JSON.parse(data);
    return NextResponse.json({ count: subscribers.length, subscribers });
  } catch {
    return NextResponse.json({ count: 0, subscribers: [] });
  }
}
