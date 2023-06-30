import {UserDataSetContext } from '@/context/UserDataSet';
import styles from "@/styles/cv-create-dataset/readyData.module.css"

import { FC } from 'react';
import { useContext, useState } from "react"

interface Props{
  name: string
  label: string
  id: any[]
}

const ReadyData: FC<Props> = ({ name, label, id}) => {

  const {userDataSet, setUserDataSet} = useContext(UserDataSetContext)

  const handleClick = (e: any) =>{
    e.preventDefault()
    const arr: any[] = []
    userDataSet[id[1]].map((e: any)=>{
      if(e.id === id[0]){
        console.log(e)
      }else{
        arr.push(e)
      }
    })
    setUserDataSet({...userDataSet, [id[1]]: arr})
  }

  return (

    <div className={styles.contentWrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.label}>{name}</h2>
        <p className={styles.paragraph}>{label}</p>
      </div>
      <button onClick={handleClick} className="roundBtn">X</button>
    </div>
  )
}

export default ReadyData