// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "INI GET!" }, { status: 200 });
// }

// export async function POST() {
//   return NextResponse.json({ message: "INI POST!" }, { status: 201 });
// }

// export async function PATCH() {
//   return NextResponse.json({ message: "INI PATCH!" }, { status: 203 });
// }

// export async function PUT() {
//   return NextResponse.json({ message: "INI PUT!" });
// }

// export async function DELETE() {
//   return NextResponse.json({ message: "INI DELETE!" });
// }

import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const headerList = headers();

  const myName = headerList.get("myname");

  // console.log(myName);

  if (myName === "pupu") {
    return NextResponse.json(
      { message: "selamat kamu benar" },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "kamu bukan pupu" }, { status: 401 });
}

export async function POST(req) {
  const { name, age } = await req.json();

  return NextResponse.json({ name, age });
}
