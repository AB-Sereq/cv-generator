"use client"

import { FC } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from 'next/image';

import {v4 as uuidv4} from 'uuid';

import pattern2 from "../../../../public/pattern2.jpg";

import pattern1 from "../../../../public/pattern1.jpg"

import styles from "@/styles/cv-creator/selectPattern.module.css"

interface IProps{
    selectedPattern: any,
    setSelectedPattern: any
}

interface IPatternProps{
    id: number
    pattern: any,
    selectedPattern: any,
    setSelectedPattern: any
}


const Pattern: FC<IPatternProps> = ({id ,pattern, selectedPattern, setSelectedPattern}) => {

    const setSelectedPatternFunc = (pattern: any)=>{
        setSelectedPattern(pattern)
    }


    if(selectedPattern === id){
        return (
          <button className={`${styles.patternBtn} ${styles.selectedPattern}`} onClick={()=>setSelectedPatternFunc(id)}>
            <Image src={pattern} alt='Pattern' className={styles.pattern}/>
          </button>
        )
    }else{
        return(
            <button className={styles.patternBtn} onClick={()=>setSelectedPatternFunc(id)}>
                <Image src={pattern} alt='Pattern' className={styles.pattern}/>
            </button>
        )
    }
}

const SelectPattern: FC<IProps> = ({selectedPattern, setSelectedPattern}) => {
    const patternList: any[] = [{photo: pattern1, id: 1}, {photo: pattern2, id: 2}]

  return (
    <div>
        {patternList.map((pattern) => (
            <Pattern key={uuidv4()} id={pattern.id} pattern={pattern.photo} selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern}/>
        ))}
    </div>
  )

}

export default SelectPattern