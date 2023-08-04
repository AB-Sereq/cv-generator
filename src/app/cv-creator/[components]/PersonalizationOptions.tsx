import styles from "@/styles/cv-creator/personalizationOptions.module.css"

import { FC } from "react"



const PersonalizationOptions: FC<any> = ({patternConfig, setPatternConfig}) => {

  return (
    <div className={styles.container}>
        <div className={styles.option}>
            <label className={styles.label}>Wielkość tekstu:</label>
            <select className={styles.select} 
                onChange={(e: any)=>{setPatternConfig({...patternConfig, fontSize: e.target.value})}}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
        </div>

        <div className={styles.option}>
            <label className={styles.label}>Czcionka:</label>
            <select className={styles.select}
                onChange={(e: any)=>{setPatternConfig({...patternConfig, font: e.target.value})}}>
                <option className={styles.segoeUI} value="Segoe UI">Segoe UI</option>
                <option className={styles.helvetica} value="Helvetica">Helvetica</option>
                <option className={styles.arial} value="Arial">Arial</option>
                <option className={styles.couriernew} value="Courier New">Courier New</option>
                <option className={styles.timesnewroman} value="Times New Roman">Times New Roman</option>
                <option className={styles.georgia} value="Georgia">Georgia</option>
                <option className={styles.roboto} value="Roboto">Roboto</option>
            </select>
        </div>

        <div className={styles.option}>
            <label className={styles.label}>Kolor:</label>
            <input type="color" id="color" name="color" className={styles.colorInput} onChange={(e: any)=>{setPatternConfig({...patternConfig, color: e.target.value})
        console.log(patternConfig)}}/>
        </div>
    </div>
  )
}

export default PersonalizationOptions