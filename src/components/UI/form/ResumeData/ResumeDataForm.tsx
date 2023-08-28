"use client"

import styles from "@/styles/components/resumeDataForm/resumeDataForm.module.css"

import { useState } from 'react';

import FormInput from "@/components/UI/form/ResumeData/FormInput"
import DropdownElementsWrapper from "./DropdownElementWrapper";

import { useUserDataSetContext } from "@/context/UserDataSet";



const ResumeDataForm = () => {

    const { userDataSet, setUserDataSet} = useUserDataSetContext();
    const [ stepMobile, setStepMobile ] = useState<number>(1)

  const leftSideBody = () => {
    return ( 
      <>
        <FormInput type='file' label='Zdjęcie' id='photo' name='photo' onChange={e => {
          setUserDataSet({ ...userDataSet, photo: URL.createObjectURL(e.target.files[0])})}}/>
                <FormInput type='text' label='Imię' id='name' name='name' onChange={e => setUserDataSet({ ...userDataSet, name: e.target.value })}/>
                <FormInput type='text' label='Nazwisko' id='surname' name='surname' onChange={e => setUserDataSet({ ...userDataSet, surname: e.target.value })}/>
                <FormInput type='text' label='Numer telefonu' id='phoneNumber' name='phoneNumber' onChange={e => setUserDataSet({ ...userDataSet, phoneNumber: e.target.value })}/>
                <FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setUserDataSet({ ...userDataSet, email: e.target.value })}/>
                <FormInput type='url' label='Adres strony internetowej' id='websiteURL' name='websiteURL' onChange={e => setUserDataSet({ ...userDataSet, websiteURL: e.target.value })}/>
                </>
    )
  }

  return (

    <div className={styles.container}>
      <div className={styles.side}>
        {leftSideBody()}
      </div>
      <div className={styles.side}>
        <DropdownElementsWrapper displayDropdown={true}/>
      </div>
            
    </div>
  )
}

export default ResumeDataForm