"use client"
import FormInput from "@/components/UI/form/FormInput";

import { useState } from "react"

import { FaTrashAlt } from "react-icons/fa";

import styles from "@/styles/user-panel/created-datasets/created-datasets.module.css"

const DatasetsWrapper = (prop: any) => {
    const [datasets, setDatasets] = useState<[]>(prop.prop[0])

    const setSearchingFunc = (e: any) =>{
        const filtering = () =>{
            return prop.prop[0].filter((f: any) => f.dataSetName.toLowerCase().includes(e.target.value))
        }
        setDatasets(filtering())
    }

    const removeElement = async (idValue: string)=>{
        await fetch("http://localhost:3000/api/data-set/delete-data",
        { method: 'POST', body: JSON.stringify({id: idValue})})
    }
    
  return (
    <div className={styles.contentWrapper}>
        <div className={styles.inputContainer}>
        <FormInput label="Wyszukaj zestaw danych po nazwie" id="filter" name="filter" onChange={(e)=>setSearchingFunc(e)} />
        </div>
        <div className={styles.datasetsContainer}>
            {datasets.length === 0 ? <div>Brak zestawów danych</div> : ""}
            {datasets.map((e: any)=>{
                return (
                    <div className={styles.dataset} key={e.id}>
                        <section className={styles.topSection}>
                            <h2 className={styles.name}>Nazwa zestawu: <span className={styles.span}>{e.dataSetName}</span></h2>
                            <button className={`roundBtn ${styles.trashBtn}`} onClick={()=> {console.log(removeElement(e.id))}}>
                                    <FaTrashAlt/>
                            </button>
                        </section>
                        <section className={styles.bottomSection}>
                            <h3 className={styles.label}>Imię: <span className={styles.span}>{e.name}</span></h3>
                            <h3 className={styles.label}>Nazwisko: <span className={styles.span}>{e.surname}</span></h3>
                            <h3 className={styles.label}>Ostatnia zmiana: <span className={styles.span}>{e.updatedAt}</span></h3>
                        </section>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DatasetsWrapper