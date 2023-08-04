import styles from "@/styles/components/patterns.module.css"

import { FC } from "react"

interface IData {
  data: any,
  personalization: {color: string, font: string, fontSize: string}
}

interface IDataElement {
  data: any
}

interface ITime {
  dateStart: string;
  dataEnd: string;
}

const Pattern1: FC <IData> = ({data, personalization}) => {

  const fontSizePx = ()=>{
    if(personalization.fontSize === 'S'){
      return 10
    }else if(personalization.fontSize === 'M'){
      return 14
    }else if(personalization.fontSize === 'L'){
      return 18
    }
  }

  const StartDateToEndDate: FC <ITime> = ({dateStart, dataEnd})=>{

    console.log(dateStart)

    return(
      <div>{dateStart} - {dataEnd}</div>
    )
  }

  const MainSectionElement: FC <IDataElement> = ({data})=>{
    if(data.length > 0){
      return(
        <div className={styles.sectionElementP1}>
          <h2 className={styles.sectionHeaderP1} style={{fontSize: `${fontSizePx()}px`}}>{data[0].name}</h2>
          <div>
            {data.map((e)=>{
              console.log(e.inputsValues)
              return(
                <div key={e.id}>
                  {data[0].name === 'experience' ? 
                  <div className={styles.infoP1}>
                    <h3 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.position}</h3>
                    <h4 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`, color: personalization.color}}>{e.inputsValues.startDate} - {e.inputsValues.endDate}</h4>
                    <h4 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.companyName}, <span className={styles.infoRegularP1}>{e.inputsValues.city}</span></h4>
                    <p className={styles.additionalInfoP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.additionalInfo}</p>
                  </div> : ""}
                  {data[0].name === 'education' ? 
                  <div className={styles.infoP1}>
                    <h3 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.level}</h3>
                    <h4 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`, color: personalization.color}}>{e.inputsValues.startDate} - {e.inputsValues.endDate}</h4>
                    <h4 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.institutionName}, <span className={styles.infoRegularP1}>{e.inputsValues.city}</span></h4>
                    <p className={styles.additionalInfoP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.additionalInfo}</p>
                  </div> : ""}
                  {data[0].name === 'certificates' ? 
                  <div className={styles.infoP1}>
                    <h3 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.certificateName}</h3>
                    <h4 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`, color: personalization.color}}>Data zakończenia: {e.inputsValues.endDate}</h4>
                    <p className={styles.additionalInfoP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.additionalInfo}</p>
                  </div> : ""}
                  {data[0].name === 'skills' ? 
                  <div className={styles.infoP1}>
                    <h3 className={styles.infoBoldP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.skillName}</h3>
                    <p className={styles.additionalInfoP1} style={{fontSize: `${fontSizePx() / 1.5}px`}}>{e.inputsValues.additionalInfo}</p>
                  </div> : ""}
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    }

    console.log(data)
  return (
    <div className={styles.container} style={{fontFamily: personalization.font}}>
        <section className={styles.topSection} style={{borderColor: personalization.color}}>
            <div className={`${styles.roundPhoto} ${styles.photoP1}`}>
            </div>
            <div className={styles.topSectionInfo}>
                <div>
                    <h2 className={styles.nameP1} style={{fontSize: `${fontSizePx()}px`}}>
                      {data.name} 
                      <span style={{color: personalization.color, marginLeft: `${fontSizePx() / 2.5}px`}}>
                        {data.surname}
                      </span>
                    </h2>
                </div>
                <div className={styles.contactP1}>
                    <h3 className={styles.contactElementP1}>{data.phoneNumber}</h3>
                    <h3 className={styles.contactElementP1}>{data.email}</h3>
                    <h3 className={styles.contactElementP1}>{data.websiteURL}</h3>
                </div>
            </div>
        </section>
        <section className={styles.mainSectionP1}>
          <MainSectionElement data={data.experience}/>
          <MainSectionElement data={data.education}/>
          <MainSectionElement data={data.certificates}/>
          <MainSectionElement data={data.skills}/>
        </section>
    </div>
  )
}

export default Pattern1