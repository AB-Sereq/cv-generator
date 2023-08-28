"use client"


import Navbar from "@/components/UI/Navbar";

import TopSection from "./[components]/TopSection";
import MainSection from "./[components]/MainSection";
import BottomBar from "./[components]/BottomBar";
import PersonalizationOptions from "./[components]/PersonalizationOptions";

import { useState } from "react";

import styles from "@/styles/cv-creator/page.module.css"

import { ResumePersonalizationProvider } from "@/context/ResumePersonalization"

import { UserDataSetContextProvider } from "@/context/UserDataSet"


const Page = () => {
    const [step, setStep] = useState<number>(1)
    const [data, setData] = useState("")
  return (
    <>
        <Navbar/>
        <div className={styles.container}>

          <ResumePersonalizationProvider>
          <UserDataSetContextProvider>
            <TopSection step={step}/>
            <MainSection step={step} setUserData={setData}/>
            <div>
              <BottomBar step={step} setStep={setStep}/>
            </div>
          </UserDataSetContextProvider>
          </ResumePersonalizationProvider>
          
        </div>
    </>
  )
}

export default Page