
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const { transferStockQty, receivingBranchId, notes } = await request.json();

    // Log the received data for debugging
    console.log('Received Data:', { transferStockQty, receivingBranchId, notes });

    // Validate the required fields
    if (!transferStockQty || !receivingBranchId || !notes) {
      return NextResponse.json(
        { error: true, message: "transferStockQty, receivingBranchId, and notes are required" },
        { status: 400 }
      );
    }

    // Mock warehouse creation
    const adjustment = { transferStockQty, receivingBranchId, notes };
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
