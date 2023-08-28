import styles from "@/styles/cv-creator/personalizationOptions.module.css"

import { FC } from "react"

import { useResumePersonalizationContext } from "@/context/ResumePersonalization"



const PersonalizationOptions = () => {

    const { userPersonalization, setUserPersonalization } = useResumePersonalizationContext();

  return (
    <div className={styles.container}>
        <div className={styles.option}>
            <label className={styles.label}>Wielkość tekstu:</label>
            <select className={styles.select} 
                onChange={(e: any)=>{setUserPersonalization({...userPersonalization, fontSize: e.target.value})}}>
                <option value={16}>S</option>
                <option value={20}>M</option>
                <option value={24}>L</option>
            </select>
        </div>

        <div className={styles.option}>
            <label className={styles.label}>Czcionka:</label>
            <select className={styles.select}
                onChange={(e: any)=>{setUserPersonalization({...userPersonalization, fontFamily: e.target.value})}}>
                <option className={styles.segoeUI} value="Segoe UI">Segoe UI</option>
                <option className={styles.bahnschrift} value="Bahnschrift">Bahnschrift</option>
                <option className={styles.arial} value="Arial">Arial</option>
                <option className={styles.couriernew} value="Courier New">Courier New</option>
                <option className={styles.timesnewroman} value="Times New Roman">Times New Roman</option>
                <option className={styles.georgia} value="Georgia">Georgia</option>
                <option className={styles.roboto} value="Roboto">Roboto</option>
            </select>
        </div>

        <div className={styles.option}>
            <label className={styles.label}>Kolor:</label>
            <input type="color" id="color" name="color" className={styles.colorInput} onChange={(e: any)=>{setUserPersonalization({...userPersonalization, color: e.target.value})}}/>
        </div>
    </div>
  )
}

export default PersonalizationOptions