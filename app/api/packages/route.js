import dbConnect from "@/lib/mongodb";
import Package from "@/models/Package";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function GET() {
  await dbConnect();
  const packages = await Package.find({});
  return NextResponse.json({ packages });
}

export async function POST(req) {
    try{
        await verifyAuth()
        await dbConnect();
        const body = await req.json();
        const pkg = await Package.create(body);
        return NextResponse.json({ message: "Package created", pkg });

    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

}

export async function DELETE(req) {
    try{
        await verifyAuth()
        await dbConnect();
        const { id } = await req.json();
        await Package.findByIdAndDelete(id);
        return NextResponse.json({ message: "Package deleted" });

    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

}
