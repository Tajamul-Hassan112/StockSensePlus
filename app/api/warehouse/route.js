

import db from "@/lib/db";
import { NextResponse } from "next/server";

// Handle POST requests to create a new warehouse
export async function POST(request) {
  try {
    const data = await request.json(); // Parse the request body
    const { title, location, type, description } = data;

    console.log('Received Data:', { title, location, type, description });

    if (!title || !description || !type || !location) {
      console.log('Validation failed: missing required fields');
      return NextResponse.json(
        { error: true, message: "Title, location, type, and description are required" },
        { status: 400 }
      );
    }

    const warehouse = await db.warehouse.create({
      data: {
        title, 
        description,
        location,
        warehouseType: type,
      }
    });

    return NextResponse.json(warehouse, { status: 200 });

  } catch (error) {
    console.error('Server Error:', error.message, error.stack);
    return NextResponse.json(
      { error: true, message: "Failed to create the warehouse" },
      { status: 500 }
    );
  }
}

// Handle GET requests to fetch warehouses
export async function GET() {
  try {
    const warehouses = await db.warehouse.findMany({
      orderBy: { createdAt: 'desc' },
      skip: 0,
      take: 10,
    });

    return NextResponse.json(warehouses, { status: 200 });
  } catch (error) {
    console.error('Error retrieving warehouses:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to fetch warehouses' }, { status: 500 });
  }
}
