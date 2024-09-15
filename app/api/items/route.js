
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();

    // Perform input validation
    if (!data.title || !data.sku) {
      return NextResponse.json({ error: true, message: 'Title and SKU are required' }, { status: 400 });
    }

    // Validate ObjectID fields
    const validObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);
    if (
      !validObjectId(data.categoryId) ||
      !validObjectId(data.unitId) ||
      !validObjectId(data.brandId) ||
      !validObjectId(data.supplierId) ||
      !validObjectId(data.warehouseId)
    ) {
      return NextResponse.json({ error: true, message: 'Invalid ObjectID format' }, { status: 400 });
    }

    // Create new item in the database
    const newItem = await prisma.item.create({
      data: {
        title: data.title,
        description: data.description || '',
        sku: data.sku,
        barcode: data.barcode || '',
        qty: parseInt(data.qty, 10) || 0,
        sellingPrice: parseFloat(data.sellingPrice) || 0,
        buyingPrice: parseFloat(data.buyingPrice) || 0,
        reOrderPoint: parseInt(data.reOrderPoint, 10) || 0,
        imageUrl: data.imageUrl || [],
        notes: data.notes || '',
        weight: parseFloat(data.weight) || 0,
        dimensions: data.dimensions || '',
        taxRate: parseFloat(data.taxRate) || 0,
        unitId: data.unitId,
        brandId: data.brandId,
        categoryId: data.categoryId,
        supplierId: data.supplierId,
        warehouseId: data.warehouseId
      }
    });

    return NextResponse.json({ success: true, message: 'Item created successfully', item: newItem });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json({ error: true, message: 'Internal server error' }, { status: 500 });
  }
}
export async function GET() {
  try {
    const items = await db.item.findMany({
      orderBy: {
        createdAt: 'desc', // Ensure this is a string, not an object
      },
      where: {
        createdAt: {
          not: null, // Ensure `not` is not null, to prevent the error
        },
      },
      skip: 0,
      take: 10,
    });
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error('Error retrieving brands:', error);
    return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 });
  }
}
