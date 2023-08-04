'use client';

import { createContext, useContext, useState } from "react";

interface IData{

    photo: string,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    websiteURL: string,
  
    experience: [],
    certificates: [],
    education: [],
    courses: [],
    skills: [],
    achievements: [],
    hobbys: [],
    characteristic: [],
    additionalActivity: []
  }

const UserDataSetContext = createContext({})

export const UserDataSetContextProvider = ({ children }: any) => {
    const [userDataSet, setUserDataSet] = useState<IData>({
        photo: '',
        name: '',
        surname: "",
        phoneNumber: "",
        email: "",
        websiteURL: "",
    
        experience: [],
        certificates: [],
        education: [],
        courses: [],
        skills: [],
        achievements: [],
        hobbys: [],
        characteristic: [],
        additionalActivity: []
    });

    return (
        <UserDataSetContext.Provider value={{ userDataSet, setUserDataSet }}>
            {children}
        </UserDataSetContext.Provider>
    )
};

export const useUserDataSetContext = () => useContext(UserDataSetContext);