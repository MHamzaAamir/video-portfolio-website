import dbConnect from '@/lib/mongodb';
import Faq from '@/models/Faq';
import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';


export async function GET(req) {
    await dbConnect()

    const faqs = await Faq.find({})

    const response = NextResponse.json({
        faqs,
    })
    return response
}

export async function DELETE(req) {
    try{
        await verifyAuth()

        await dbConnect()

        const {id} = await req.json()

        await Faq.findByIdAndDelete(id)

        return NextResponse.json({
            message:"done"
        }) 
    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

}

export async function POST(req){
    try{
        await verifyAuth()
        await dbConnect()
    
        const {question,answer} = await req.json()
        const faq = await Faq.create({question,answer})
    
        return NextResponse.json({
            faq,
            message:"done"
        }) 
    }catch(error){
        return NextResponse.json({ error: error.message }, { status: 401 });
    }
}