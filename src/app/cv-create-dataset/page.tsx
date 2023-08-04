"use client"

import styles from "@/styles/cv-create-dataset/page.module.css"

import FormInput from "@/components/UI/form/ResumeData/FormInput"
import Button from "@/components/UI/buttons/Button"
import LoadingButton from "@/components/UI/buttons/LoadingButton"

import ResumeDataForm from "@/components/UI/form/ResumeData/ResumeDataForm"

import { useState, useEffect } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import axios from "axios"

import { UserDataSetContextProvider } from "@/context/UserDataSet"


interface IData{
    dataSetName: string
    authorEmail: string
}


const CvDefaultData = () => {
    const session = useSession()
	const router = useRouter()
    
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [isError, setIsError] = useState<Boolean>(false)

    const [data, setData] = useState("")

    const [dataSetNameAndAuthor, setdataSetNameAndAuthor] = useState<IData>({
        dataSetName: "",
        authorEmail: "",


    })
	useEffect(() => {
		if (session?.status === 'unauthenticated') {
		   router.push('/') 
		}
	})


    const addDefaultCVData = async (e: any)=> {
        setIsLoading(true)
        e.preventDefault()
        dataSetNameAndAuthor.authorEmail = String(session.data?.user?.email) //!!!
        setIsError(false)
        const dataToPost = data;
        dataToPost["dataSetName"] = dataSetNameAndAuthor.dataSetName;
        dataToPost["authorEmail"] = dataSetNameAndAuthor.authorEmail;
        await axios.post('/api/data-set', dataToPost)
            .then((res)=> console.log(res))
			.catch(() => setIsError(true))
		setIsLoading(false)
        console.log(dataToPost)
    }


  return (
        <div className="container">
            <div className="justifyContent" style={{width: "80vw", minWidth: "400px"}}>
                <h1 className='header'>Twoj zestaw danych</h1>
                <p>Te dane będą wklejane podczas tworzenia nowego CV. Tą opcję możesz w każdej chwili wyłączyć.</p>
                <div>
                    <form onSubmit={addDefaultCVData}>
                        <FormInput type='text' label='Nazwa zestawu danych' id='dataSetName' name='dataSetName' onChange={(e) => {
                            setdataSetNameAndAuthor({ ...dataSetNameAndAuthor, dataSetName: e.target.value });
                            }}/>
                        <div className={styles.contentWrapper}>
                            <UserDataSetContextProvider>
                                <ResumeDataForm setData={setData}/>
                            </UserDataSetContextProvider>
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