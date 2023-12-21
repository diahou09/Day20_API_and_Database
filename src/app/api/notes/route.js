import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allNotes = await prisma.notes.findMany({
      where: {
        user: "vino",
      },
      orderBy: {
        id: "desc",
      },
      take: 2,
    });

    return NextResponse.json(
      { data: allNotes, message: "Fetch data success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Fetch data error!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { title, content, user } = await req.json();

  try {
    const createNote = await prisma.notes.create({
      data: {
        content,
        user,
      },
    });

    return NextResponse.json(
      { data: createNote, message: "Creating note success" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: createNote, message: "Creating notes failed" },
      { status: 500 }
    );
  }
}
