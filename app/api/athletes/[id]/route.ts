import Athlete from "@/models/Athlete"
import { NextResponse } from "next/server"

export async function GET ( request: any, { params }: { params: any}) {
    console.log('ENTRO', params.id)
    try {
        const athleteFound = await Athlete.findById(params.id)
        if(!athleteFound) return NextResponse.json({
            message: `Atleta ${params.id} no encontrado`
        }, {status: 404})
        return NextResponse.json(athleteFound)
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function PUT ( request: any, { params }: { params: any}) {
    try {
        const data = await request.json()
        console.log('aa', data)
        const athleteUpdated = await Athlete.findByIdAndUpdate(params.id, data, { new: true })
        return NextResponse.json(athleteUpdated)
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function DELETE ( request: any, { params }: { params: any}) {
    try {
        const athleteDeleted = await Athlete.findByIdAndDelete(params.id)
        if(!athleteDeleted) return NextResponse.json({
            message: `Atleta ${params.id} no encontrado`
        }, {status: 404})
        return NextResponse.json(athleteDeleted)
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}