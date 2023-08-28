import styles from "@/styles/components/patterns.module.css"
import { FC } from "react"

interface IData {
  data: any,
  personalization: {color: string, fontFamily: string, fontSize: number}
}

interface IElementData {
  values: any,
  personalization: any
}


const Element: FC <IElementData> = ({values, personalization}) => {

  console.log(values)
  return (
    <div>

      {values.name === "experience" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.position}</h2>
          {values.inputsValues.startDate !== "" ? <div className={styles.date}>
            <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.startDate}-</h2>
            {values.inputsValues.endDate !== "" ? <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.endDate}</h2> : <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>Now</h2>}
          </div> : ""}
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2}}>{values.inputsValues.companyName}, <span className={styles.span}>{values.inputsValues.city}</span></h2>
        </div> : ""}

        {values.name === "education" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.institutionName}</h2>
          {values.inputsValues.startDate !== "" ? <div className={styles.date}>
            <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.startDate}-</h2>
            {values.inputsValues.endDate !== "" ? <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.endDate}</h2> : <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>Now</h2>}
          </div> : ""}
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2}}>{values.inputsValues.level}, <span className={styles.span}>{values.inputsValues.city}</span></h2>
        </div> : ""}

        {values.name === "skills" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.skillName}</h2>
        </div> : ""}

        {values.name === "certificates" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.certificateName}</h2>
          {values.inputsValues.endDate !== "" ?
            <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>Finished: {values.inputsValues.endDate}</h2>

          : ""}
        </div> : ""}

        {values.name === "courses" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.courseName}</h2>
          {values.inputsValues.endDate !== "" ?
            <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>Finished: {values.inputsValues.endDate}</h2>

          : ""}
        </div> : ""}

        {values.name === "achievements" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.achievementName}</h2>
        </div> : ""}

        {values.name === "characteristic" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.characteristicName}</h2>
        </div> : ""}

        {values.name === "hobbys" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.hobbyName}</h2>
        </div> : ""}

        {values.name === "additionalActivity" ? 
        <div>
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 1.6}}>{values.inputsValues.activityName}</h2>
          {values.inputsValues.startDate !== "" ? <div className={styles.date}>
            <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.startDate}-</h2>
            {values.inputsValues.endDate !== "" ? <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>{values.inputsValues.endDate}</h2> : <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2, color: personalization.color}}>Now</h2>}
          </div> : ""}
          <h2 className={styles.header} style={{fontSize: personalization.fontSize / 2.2}}>{values.inputsValues.city}</h2>
        </div> : ""}

      <p style={{fontSize: personalization.fontSize / 2.2, marginBottom:"2%"}}>{values.inputsValues.additionalInfo}</p>
    </div>
  )
}


const Pattern1: FC <IData> = ({data, personalization}) => {

  const infos: any[] = [data.phoneNumber, data.email, data.websiteURL]
  const mainSectionData: any[] = [data.experience, data.education, data.skills, data.certificates, data.courses, data.achievements, data.characteristic, data.hobbys, data.additionalActivity]

  console.log(mainSectionData[1])

  return(
    <div className={styles.container} style={{fontFamily: personalization.fontFamily}}>
      <section className={styles.topSection} style={{borderColor: personalization.color}}>
        <img className={styles.roundPhoto} src={data.photo} alt="" />
        <div className={styles.topSectionRight}>
          <h2 style={{fontSize: `${personalization.fontSize / 1.3}px`, fontWeight: 700}}>{data.name} <span style={{color: personalization.color}}>{data.surname}</span></h2>
          <div className={styles.info}>
          {infos.map((e)=> (
            <div key={e}>
              {e !== "" ? 
                  <div className={styles.infoElement}>
                    <div className={styles.dot} style={{backgroundColor: personalization.color}}></div>
                    <h3 className={styles.contact}>{e}</h3>
                  </div>
              : ""}

            </div>
          ))}
          </div>
        </div>
      </section>

      <section className={styles.mainSection}>
        {mainSectionData.map((e)=> (
            <div key={e}>
              {e.length !== 0 ? 
                <div>
                  <div className={styles.headerDiv}>
                    <div className={styles.bigDot} style={{backgroundColor: personalization.color, width: `${personalization.fontSize / 2.3}px`}}></div>
                    <h2 className={styles.header} style={{fontSize: `${personalization.fontSize / 1.3}px`, fontWeight: 700}}>{e[0].name}</h2>
                  </div>
                    {e.map((f: any)=> (
                      <div className={styles.mainSectionElement} key={f}>
                        <Element values={f} personalization={personalization}/>
                      </div>
                    ))}
                </div>
              : ""}

            </div>
          ))}
      </section>
    </div>
  )

}

export default Pattern1