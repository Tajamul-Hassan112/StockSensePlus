

// import { NextResponse } from "next/server";
// import db from "@/lib/db";

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     const { name, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes } = data;

//     if (!name || !phone || !email) {
//       return NextResponse.json(
//         { error: true, message: "Name, phone, and email are required" },
//         { status: 400 }
//       );
//     }

//     const supplier = await db.supplier.create({
//       data: { name, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes },
//     });

//     return NextResponse.json(supplier, { status: 200 });
//   } catch (error) {
//     console.error("Server Error:", error);
//     return NextResponse.json(
//       { error: true, message: "Failed to create Supplier" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     const suppliers = await db.supplier.findMany({
//       orderBy: {
//         createdAt: 'desc', // Ensure this is a string, not an object
//       },
//       where: {
//         createdAt: {
//           not: null, // Ensure `not` is not null, to prevent the error
//         },
//       },
//       skip: 0,
//       take: 10,
//     });
//     return NextResponse.json(suppliers, { status: 200 });
//   } catch (error) {
//     console.error('Error retrieving brands:', error);
//     return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 });
//   }
// }
// pages/api/supplier.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes } = data;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: true, message: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    const supplier = await db.supplier.create({
      data: { name, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes },
    });

    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: true, message: "Failed to create Supplier" },
      { status: 500 }
    );
  }
}




export async function GET() {
  try {
    const suppliers = await db.supplier.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    console.error('Error retrieving suppliers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch suppliers' },
      { status: 500 }
    );
  }
}
