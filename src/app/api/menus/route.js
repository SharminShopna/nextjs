import { getCollection } from "@/app/lib/Database"
import { NextRequest } from "next/server";

export const POST = async(req)=>{
    const collection = await getCollection('menus');
    const data = await req.json();
    const result = await collection.insertOne(data);
    return NextRequest.json(result)
}