import prisma from '../../../../../prisma/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request, response: Response) {
    const body = await request.json()
    const { email } = body
    const datasets = await prisma.userDataSet.findMany({
      where:{
        authorEmail: email
      }
    })
  
    return NextResponse.json(datasets)
  }