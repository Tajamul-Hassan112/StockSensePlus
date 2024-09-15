
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const data = await request.json();
    
    // Log the entire request body to see if transferStockQty is present
    console.log('Request Body:', data);

    const { transferStockQty, receivingWarehouseId, itemId, referenceNumber, givingWarehouseId, notes } = data;


    // Log the received data for debugging
    console.log('Received Data:', { transferStockQty, receivingWarehouseId, notes });

    // Validate the required fields
    if (!transferStockQty || !receivingWarehouseId || !notes) {
      return NextResponse.json(
        { error: true, message: "transferStockQty, receivingWarehouseId, and notes are required" },
        { status: 400 }
      );
    }

    // Mock warehouse creation
    const adjustment = await db.transferStockAdjustment.create({ 
      data:{
        transferStockQty:parseInt(transferStockQty), givingWarehouseId, receivingWarehouseId, notes,itemId,referenceNumber
      }
     });
    console.log('Adjustment Data:', adjustment); // Log the data being sent back

    // Respond with the adjustment data
    return NextResponse.json(adjustment, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error); // Log the error for debugging
    return NextResponse.json(
      { error: true, message: "Failed to create the new adjustment" },
      { status: 500 }
    );
  }
}
