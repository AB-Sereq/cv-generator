"use client"

import styles from "@/styles/cv-create-dataset/page.module.css"

import FormInput from "@/components/UI/form/FormInput"
import Button from "@/components/UI/buttons/Button"
import LoadingButton from "@/components/UI/buttons/LoadingButton"
import DropdownElementsWrapper from './[components]/DropdownElementsWrapper';

import { useState, useEffect, useContext } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import axios from "axios"

import {UserDataSetContext } from '@/context/UserDataSet';

interface Data{
    dataSetName: string
    authorEmail: string

	photo: string,
	name: string,
    surname: string,
    dateOfBirth: string,
    city: string,
    cityOfBirth: string,
    citizenship: string,
    gender: string,
    phoneNumber: string,
    email: string,
    websiteURL: string,

    experience: [],
    certificates: [],
    education: [],
    courses: [],
    skills: [],
    achievements: [],
    hobbys: [],
    characteristic: [],
    additionalActivity: []
}


const CvDefaultData = () => {
    const session = useSession()
	const router = useRouter()
    
    const [displayDropdown, setDisplayDropdown] = useState<boolean>(true)
    const {userDataSet} = useContext(UserDataSetContext)
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [isError, setIsError] = useState<Boolean>(false)
    const [data, setData] = useState<Data>({
        dataSetName: "",
        authorEmail: "",

        photo: '',
        name: '',
        surname: "",
        dateOfBirth: "",
        city: "",
        cityOfBirth: "",
        citizenship: "",
        gender: "",
        phoneNumber: "",
        email: "",
        websiteURL: "",

        experience: [],
        certificates: [],
        education: [],
        courses: [],
        skills: [],
        achievements: [],
        hobbys: [],
        characteristic: [],
        additionalActivity: []
    })
	useEffect(() => {
		if (session?.status === 'unauthenticated') {
		   router.push('/') 
		}
	})

    const setDataFunc = () =>{
        data.experience = userDataSet.experience, 
        data.certificates = userDataSet.certificates, 
        data.education = userDataSet.education, 
        data.courses = userDataSet.courses,
        data.skills = userDataSet.skills,
        data.achievements = userDataSet.achievements,
        data.hobbys = userDataSet.hobbys,
        data.characteristic = userDataSet.characteristic,
        data.additionalActivity = userDataSet.additionalActivity
    }

    const addDefaultCVData = async (e: any)=> {
        setIsLoading(true)
        e.preventDefault()
        setDataFunc()
        data.authorEmail = String(session.data?.user?.email) //!!!
        console.log(data)
        setIsError(false)
        await axios.post('/api/data-set', data)
            .then((res)=> console.log(res))
			.catch(() => setIsError(true))
		setIsLoading(false)
    }


  return (
        <div className="container">
            <div className="justifyContent" style={{width: "80vw", minWidth: "400px"}}>
                <h1 className='header'>Twoj zestaw danych</h1>
                <p>Te dane będą wklejane podczas tworzenia nowego CV. Tą opcję możesz w każdej chwili wyłączyć.</p>
                <div>
                    <form onSubmit={addDefaultCVData}>
                        <FormInput type='text' label='Nazwa zestawu danych' id='dataSetName' name='dataSetName' onChange={(e) => {
                            setData({ ...data, dataSetName: e.target.value });
                            }}/>
                        <div className={styles.contentWrapper}>

                                <div className={styles.leftSideContainer}>
                                    <FormInput type='file' label='Zdjęcie' id='photo' name='photo' onChange={e => setData({ ...data, photo: e.target.value })}/>
                                    <FormInput type='text' label='Imię' id='name' name='name' onChange={e => setData({ ...data, name: e.target.value })}/>
                                    <FormInput type='text' label='Nazwisko' id='surname' name='surname' onChange={e => setData({ ...data, surname: e.target.value })}/>
                                    <FormInput type='date' label='Data urodzenia' id='dateOfBirth' name='dateOfBirth' onChange={e => setData({ ...data, dateOfBirth: e.target.value })}/>
                                    <FormInput type='text' label='Miejscowość zamieszkania' id='city' name='city' onChange={e => setData({ ...data, city: e.target.value })}/>
                                    <FormInput type='text' label='Miejscowosć urodzenia' id='cityOfBirth' name='cityOfBirth' onChange={e => setData({ ...data, cityOfBirth: e.target.value })}/>
                                    <FormInput type='text' label='Obywatelstwo' id='citizenship' name='citizenship' onChange={e => setData({ ...data, citizenship: e.target.value })}/>
                                    <FormInput type='text' label='Płeć' id='gender' name='gender' onChange={e => setData({ ...data, gender: e.target.value })}/>
                                    <FormInput type='text' label='Numer telefonu' id='phoneNumber' name='phoneNumber' onChange={e => setData({ ...data, phoneNumber: e.target.value })}/>
                                    <FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setData({ ...data, email: e.target.value })}/>
                                    <FormInput type='url' label='Adres strony internetowej' id='websiteURL' name='websiteURL' onChange={e => setData({ ...data, websiteURL: e.target.value })}/>
                                </div>


                            <DropdownElementsWrapper displayDropdown={displayDropdown}/>
                        </div>
                        <div className={styles.buttonContainer}>
                        {isLoading ? <LoadingButton label="Ładowanie..."/> : <Button label='Zapisz' action={null} type="submit"/>}
                        </div>
                </form>

                </div>
            </div>
    
            </div>
  )
}

export default CvDefaultData