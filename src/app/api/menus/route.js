import { getCollection } from "@/app/lib/Database";
import { NextResponse } from "next/server";
// -----------------All Data POST-----------

export const POST = async (req) => {
  try {
    const collection = await getCollection("menus");
    const data = await req.json();
    const result = await collection.insertOne(data);
    return NextResponse.json(result);
  } catch (error) {
    console.error("POST /api/menus failed:", error); // Clear error log
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};

// ----------------All Data GET-----------------

export const GET = async(req)=>{
const collection = await getCollection("menus");
const data = await collection.find().toArray();
return NextResponse.json(data);
}