import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;

  return NextResponse.json({ id });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  return NextResponse.json({ id });
}
