import { verifyAuth } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Video from '@/models/Work';
import { NextResponse } from "next/server";

export async function PATCH (req){
    try{
        await verifyAuth()
        await dbConnect()
        const {type,videos} = await req.json()
    
        await Video.findOneAndReplace({type},{type,videos})
    
        return NextResponse.json({
            message:"done"
        })
    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

}

export async function POST (req){

    try{
        // await verifyAuth()
        await dbConnect()
    
        const {type,videos} = await req.json()
    
        await Video.create({
            type,videos
        })
    
        return NextResponse.json({
            message:"done"
        })

    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

}

export async function GET (req){
    await dbConnect()

    const videos = await Video.find({})

    return NextResponse.json({
        videos
    })

}