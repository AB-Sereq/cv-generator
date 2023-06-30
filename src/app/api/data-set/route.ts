import prisma from "../../../../prisma/prisma";
import { NextResponse } from 'next/server'


export async function POST(request: Request, response: Response) {
  const body = await request.json();

  const { dataSetName, authorEmail, photo, name, surname, dateOfBirth, city, cityOfBirth, citizenship, gender, phoneNumber, email, websiteURL, 
    experience, certificates, education, courses,skills, achievements, hobbys, characteristic, additionalActivity} = body;


  if(dataSetName === ""){
    throw new Error('Wrong')
  }else{
    const user: {
      dataSetName: string, authorEmail: string,

      photo: string, name: string, surname: string, dateOfBirth: string, city: string, cityOfBirth: string, 
      citizenship: string, gender: string, phoneNumber: string, email: string, websiteURL: string,

      experience: any, certificates: any, education: any, courses: any, skills: any,
      achievements: any, hobbys: any, characteristic: any, additionalActivity: any

    } = {
      dataSetName: dataSetName,
      authorEmail: authorEmail,

      photo: photo,
      name: name,
      surname: surname,
      dateOfBirth: dateOfBirth,
      city: city,
      cityOfBirth: cityOfBirth,
      citizenship: citizenship,
      gender: gender,
      phoneNumber: phoneNumber,
      email: email,
      websiteURL: websiteURL,

      experience: {
        create: []
      },
      certificates: {
        create: []
      },
      education: {
        create: []
      },
      courses: {
        create: []
      },
      skills: {
        create: []
      },
      achievements: {
        create: []
      },
      hobbys: {
        create: []
      },
      characteristic: {
        create: []
      },
      additionalActivity: {
        create: []
      },
    }

    const pushData = (bodyArr: any[])=>{
      bodyArr.map((e: any)=>{

        if(e.length > 0){

          e.map((f: any)=>{
            let objectToPush: any = {}
            Object.keys(f.inputsValues).map((g: any)=>{
              objectToPush[g] = f.inputsValues[g]
            })
            user[f.name as keyof typeof user].create.push(objectToPush)
          })
        }
      })
    }

    pushData([experience, certificates, education, courses,skills, achievements, hobbys, characteristic, additionalActivity])



    const userDataSet = await prisma.userDataSet.create({
      data: user
    })
    
   
    return NextResponse.json(userDataSet)

  }

}