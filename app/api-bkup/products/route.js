//app/api/products/route.js
import { NextResponse } from "next/server";
import connectDB from "../../../lib/connectDB";
import Product from "../../../models/Product";

connectDB();

export async function GET() {
  try {
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const product = await Product.create(data);
    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
