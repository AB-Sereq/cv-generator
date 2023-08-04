"use client"

import { FC } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from 'next/image';

import { useState } from 'react';

import pattern1 from "../../../../public/pattern1.jpg";
import pattern2 from "../../../../public/pattern2.jpg";

import Pattern1 from '@/components/patterns/Pattern1';

import styles from "@/styles/cv-creator/mainSection.module.css";

import PersonalizationOptions from "./PersonalizationOptions";
import SelectPattern from './SelectPattern';
import ResumeDataForm from '@/components/UI/form/ResumeData/ResumeDataForm';

import { UserDataSetContextProvider } from "@/context/UserDataSet"


interface ISectionProps{
  step: number
}

interface IPatternConfig{
  color: string,
  font: string,
  fontSize: string
}
  
import React from 'react'

const MainSection: FC<ISectionProps> = ({step}) => {

  const [selectedPattern, setSelectedPattern] = useState<any>(null)
  const [data, setData] = useState("")
  const [patternConfig, setPatternConfig] = useState<IPatternConfig>({
    color: "",
    font: "",
    fontSize: "S"
  })


  if(step === 1){
    return(
        <div className={styles.container}>

          <div className={styles.choosePattern}>
              <div >
                <SelectPattern selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern}/>
              </div>
          </div>
        </div>
    )
  }
  if(step === 2){
    return(
      <div className={styles.container}>
        <UserDataSetContextProvider>
          <ResumeDataForm setData={setData}/>

        </UserDataSetContextProvider>
      </div>
    )
  }

  if(step === 3){
    return(
      <div className={styles.container}>
        {selectedPattern === 1 ? <Pattern1 data={data} personalization={patternConfig}/> : ""}

        <PersonalizationOptions patternConfig={patternConfig} setPatternConfig={setPatternConfig}/>
      </div>
    )
  }
}

  
export default MainSection