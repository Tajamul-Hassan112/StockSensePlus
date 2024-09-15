
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { title } = await request.json();

    if (!title) {
      return NextResponse.json(
        { error: true, message: "Title is required" },
        { status: 400 }
      );
    }

    const brand = await db.brand.create({
      data: { title },
    });

    return NextResponse.json(brand, { status: 201 });
  } catch (error) {
    console.error('Error creating brand:', error);
    return NextResponse.json({ error: 'Failed to create brand' }, { status: 500 });
  }
}




export async function GET() {
  try {
    const brands = await db.brand.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(brands, { status: 200 });
  } catch (error) {
    console.error('Error retrieving brands:', error);
    return NextResponse.json(
      { error: 'Failed to fetch brands' },
      { status: 500 }
    );
  }
}
