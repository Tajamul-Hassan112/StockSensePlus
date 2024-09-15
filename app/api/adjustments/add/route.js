

// // // import db from "@/lib/db";
// // // import { NextResponse } from "next/server";

// // // export async function POST(request) {
// // //   try {
// // //     // Parse the JSON body of the request
// // //     const body = await request.json();
// // //     console.log('Raw Body:', body); // Log the raw body for debugging

// // //     const { addStockQty, warehouseId, notes,referenceNumber } = body;

// // //     // Log the received data for debugging
// // //     console.log('Parsed Data:', { addStockQty, receivingWarehouseId, notes });

// // //     // Validate the required fields
// // //     if (!addStockQty || !receivingWarehouseId || !notes) {
// // //       console.log('Validation failed:', { addStockQty, receivingWarehouseId, notes });
// // //       return NextResponse.json(
// // //         { error: true, message: "addStockQty, receivingWarehouseId, and notes are required" },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     // Mock adjustment creation
// // //     const adjustment = await db.addStockAdjustment
// // //     console.log('Adjustment Data:', adjustment); // Log the data being sent back

// // //     // Respond with the adjustment data
// // //     return NextResponse.json(adjustment, { status: 200 });
// // //   } catch (error) {
// // //     console.error('Server Error:', error); // Log the error for debugging
// // //     return NextResponse.json(
// // //       { error: true, message: "Failed to create the new adjustment" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // import Items from "@/app/(back-office)/dashboard/inventory/items/page";
// // import db from "@/lib/db";
// // import { NextResponse } from "next/server";

// // export async function POST(request) {
// //   try {
// //     const body = await request.json();
// //     console.log('Raw Body:', body); // Log the raw body for debugging

// //     const { addStockQty, itemId, recevingWarehouseId, notes, referenceNumber } = body;

// //     console.log('Parsed Data:', { addStockQty,recevingWarehouseId , notes, referenceNumber });

// //     if (typeof addStockQty !== 'number' || isNaN(addStockQty) || !recevingWarehouseId || !notes) {
// //       console.log('Validation failed:', { addStockQty, recevingWarehouseId, notes });
// //       return NextResponse.json(
// //         { error: true, message: "addStockQty (must be a number), recevingWarehouseId, and notes are required" },
// //         { status: 400 }
// //       );
// //     }

// //     // Correctly reference the relation using `connect`
// //     const adjustment = await db.addStockAdjustment.create({
// //       data: {
// //         referenceNumber,
// //         addStockQty:parseInt(addStockQty),
// //         notes,
// //         recevingWarehouseId,
// //         itemId
        
// //       },
// //     });
    
// //     console.log('Adjustment Data:', adjustment); // Log the data being sent back

// //     return NextResponse.json(adjustment, { status: 200 });
// //   } catch (error) {
// //     console.error('Server Error:', error); // Log the error for debugging
// //     return NextResponse.json(
// //       { error: true, message: "Failed to create the new adjustment" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     console.log('Request Body:', data);

//     const { addStockQty, itemId, receivingWarehouseId, notes, referenceNumber } = data;

//     console.log('Parsed Data:', { addStockQty, receivingWarehouseId, notes, referenceNumber });

//     if (typeof addStockQty !== 'number' || isNaN(addStockQty) || !receivingWarehouseId || !notes) {
//       console.log('Validation failed:', { addStockQty, receivingWarehouseId, notes });
//       return NextResponse.json(
//         { error: true, message: "addStockQty (must be a number), receivingWarehouseId, and notes are required" },
//         { status: 400 }
//       );
//     }

//     const adjustment = await db.addStockAdjustment.create({
//       data: {
//         referenceNumber,
//         addStockQty: parseInt(addStockQty),
//         notes,
//         receivingWarehouseId,
//         itemId,
//       },
//     });
    
//     console.log('Adjustment Data:', adjustment);

//     return NextResponse.json(adjustment, { status: 200 });
//   } catch (error) {
//     console.error('Server Error:', error);
//     return NextResponse.json(
//       { error: true, message: "Failed to create the new adjustment" },
//       { status: 500 }
//     );
//   }
// }

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Request Body:', data);

    const { addStockQty, itemId, receivingWarehouseId, notes, referenceNumber } = data;

    console.log('Parsed Data:', { addStockQty, receivingWarehouseId, notes, referenceNumber });

    if (typeof addStockQty !== 'number' || isNaN(addStockQty) || !receivingWarehouseId || !notes) {
      console.log('Validation failed:', { addStockQty, receivingWarehouseId, notes });
      return NextResponse.json(
        { error: true, message: "addStockQty (must be a number), receivingWarehouseId, and notes are required" },
        { status: 400 }
      );
    }

    const adjustment = await db.addStockAdjustment.create({
      data: {
        referenceNumber,
        addStockQty: parseInt(addStockQty),
        notes,
        receivingWarehouseId,
        itemId,
      },
    });
    
    console.log('Adjustment Data:', adjustment);

    return NextResponse.json(adjustment, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: true, message: "Failed to create the new adjustment" },
      { status: 500 }
    );
  }
}
