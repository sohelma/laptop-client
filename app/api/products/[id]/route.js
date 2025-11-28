
//app/api/products/[id]route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return NextResponse.json(product);
}
