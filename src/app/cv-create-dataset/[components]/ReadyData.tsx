import {UserDataSetContext } from '@/context/UserDataSet';

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

    <div className='rounded-4 d-flex me-2 mb-2 w-25 p-3 justify-content-between align-items-center' style={{ minWidth: "280px", minHeight: "60px", backgroundColor: "#f0f0f0"}}>
      <div className='d-flex flex-column justify-content-center w-75'>
        <h2 className='fs-6 m-0'>{name}</h2>
        <p className='fs-6 m-0'>{label}</p>
      </div>
      <button onClick={handleClick} className="bg-primary border-0 text-white rounded-circle" style={{width: "35px", height: "35px"}}>X</button>
    </div>
  )
}

export default ReadyData