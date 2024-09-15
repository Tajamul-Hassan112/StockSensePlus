
import { NextResponse } from "next/server";
import db from "@/lib/db";

// Create Unit
export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();

    if (!title || !abbreviation) {
      return NextResponse.json(
        { error: true, message: "Title and abbreviation are required" },
        { status: 400 }
      );
    }

    const unit = await db.unit.create({
      data: { title, abbreviation }
    });

    return NextResponse.json(unit, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: true, message: "Failed to create the unit" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const units = await prisma.unit.findMany ({
      

      orderBy: { createdAt: 'desc' },
      skip: 0,
      take: 10,
    });

    return NextResponse.json(units, { status: 200 });
  } catch (error) {
    console.error('Error retrieving units:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to fetch unitss' }, { status: 500 });
  }
}
