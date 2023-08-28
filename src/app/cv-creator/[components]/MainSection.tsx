"use client"

import { FC, useEffect } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import { useState } from 'react';

import pattern1 from "../../../../public/pattern1.jpg";
import pattern2 from "../../../../public/pattern2.jpg";

import Pattern1 from '@/components/patterns/Pattern1';
import Pattern2 from '@/components/patterns/Pattern2';

import PDFPattern1 from '@/components/PDF-patterns/PDFPattern1';

import styles from "@/styles/cv-creator/mainSection.module.css";

import PersonalizationOptions from "./PersonalizationOptions";
import SelectPattern from './SelectPattern';
import ResumeDataForm from '@/components/UI/form/ResumeData/ResumeDataForm';

import { useSession } from 'next-auth/react'


import { useResumePersonalizationContext } from "@/context/ResumePersonalization"
import { useUserDataSetContext } from "@/context/UserDataSet"


interface ISectionProps{
  step: number,
  setUserData: any
}

interface IPatternConfig{
  color: string,
  font: string,
  fontSize: number
}
  

const MainSection: FC<ISectionProps> = ({step, setUserData}) => {
  const session = useSession()

  const [selectedPattern, setSelectedPattern] = useState<number>(1)
  const {userPersonalization } = useResumePersonalizationContext();
  const {userDataSet} = useUserDataSetContext();



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

          <ResumeDataForm/>

        {session?.status === 'authenticated' ? <button className={styles.button}>Użyj gotowego zestawu danych</button> : ""}
      </div>
    )
  }

  if(step === 3){
    return(
      <div className={styles.container}>
        {selectedPattern === 1 ? <div style={{height: "80%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Pattern1 data={userDataSet} personalization={userPersonalization}></Pattern1>
          </div> : ""}
        {selectedPattern === 2 ? "" : ""}

        <PersonalizationOptions/>
      </div>
    )
  }
}

  
export default MainSection