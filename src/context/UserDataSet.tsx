"use client";

import { createContext, useState } from "react";

export const UserDataSetContext = createContext({})

export const UserDataSetContextProvider = ({ children }:any ) =>{
    const [userDataSet, setUserDataSet] = useState({
        experience: [],
        certificates: [],
        education: [],
        courses: [],
        skills: [],
        achievements: [],
        hobbys: [],
        characteristic: [],
        additionalActivity: []
    })

    const value = {
        userDataSet,
        setUserDataSet
    }

    return (
        <UserDataSetContext.Provider value={value}>{children}</UserDataSetContext.Provider>
    )
}
