"use client"

import styles from "@/styles/components/resumeDataForm/resumeDataForm.module.css"

import { FC, useEffect } from 'react';

import FormInput from "@/components/UI/form/ResumeData/FormInput"
import DropdownElementsWrapper from "./DropdownElementWrapper";

import { useUserDataSetContext } from "@/context/UserDataSet";


interface IProps{
    setData: any;
}

const ResumeDataForm: FC<IProps> = ({setData}) => {

    const { userDataSet, setUserDataSet} = useUserDataSetContext();
    useEffect(()=>{
      setData(userDataSet)
    })
  return (
    <div className={styles.container}>
            <div className={styles.leftSide}>
                <FormInput type='file' label='Zdjęcie' id='photo' name='photo' onChange={e => setUserDataSet({ ...userDataSet, photo: e.target.value })}/>
                <FormInput type='text' label='Imię' id='name' name='name' onChange={e => setUserDataSet({ ...userDataSet, name: e.target.value })}/>
                <FormInput type='text' label='Nazwisko' id='surname' name='surname' onChange={e => setUserDataSet({ ...userDataSet, surname: e.target.value })}/>
                <FormInput type='text' label='Numer telefonu' id='phoneNumber' name='phoneNumber' onChange={e => setUserDataSet({ ...userDataSet, phoneNumber: e.target.value })}/>
                <FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setUserDataSet({ ...userDataSet, email: e.target.value })}/>
                <FormInput type='url' label='Adres strony internetowej' id='websiteURL' name='websiteURL' onChange={e => setUserDataSet({ ...userDataSet, websiteURL: e.target.value })}/>
            </div>
            <div className={styles.rightSide}>
                <DropdownElementsWrapper displayDropdown={true}/>
            </div>
    </div>
  )
}

export default ResumeDataForm