
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: true, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const category = await db.category.create({
      data: { title, description }
    });

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: true, message: "Failed to create the category" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const categories = await db.category.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Error retrieving categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
