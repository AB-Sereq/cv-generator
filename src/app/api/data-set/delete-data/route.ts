import prisma from '../../../../../prisma/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request, response: Response) {
    const body = await request.json()
    const { id } = body

    const experiences = await prisma.experience.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const certificates = await prisma.certificates.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const education = await prisma.education.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const skills = await prisma.skill.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const courses = await prisma.courses.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const achievement = await prisma.achievement.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const hobbys = await prisma.hobby.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const characteristic = await prisma.characteristic.deleteMany({
        where: {
            dataSetId: id
        }
    })
    const additionalActivity = await prisma.additionalActivity.deleteMany({
        where: {
            dataSetId: id
        }
    })
    
    const deleteElement = await prisma.userDataSet.delete({
        where: {
          id: id,
        },
      })
    return NextResponse.json(experiences)
  }