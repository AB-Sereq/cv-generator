"use client"


import Navbar from "@/components/UI/Navbar";

import TopSection from "./[components]/TopSection";
import MainSection from "./[components]/MainSection";
import BottomBar from "./[components]/BottomBar";
import PersonalizationOptions from "./[components]/PersonalizationOptions";

import { useState } from "react";

import styles from "@/styles/cv-creator/page.module.css"


const Page = () => {
    const [step, setStep] = useState<number>(1)
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <TopSection step={step}/>
            <MainSection step={step}/>
            <div>
              <BottomBar step={step} setStep={setStep}/>
            </div>
        </div>
    </>
  )
}

export default Page