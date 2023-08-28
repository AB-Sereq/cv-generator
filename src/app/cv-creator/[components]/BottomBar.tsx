import { FC } from 'react';
import styles from "@/styles/cv-creator/bottomBar.module.css"
import Button from '@/components/UI/buttons/Button';

import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFPattern1 from '@/components/PDF-patterns/PDFPattern1';

import { useResumePersonalizationContext } from "@/context/ResumePersonalization"
import { useUserDataSetContext } from "@/context/UserDataSet"

interface IProps {
  step: number,
  setStep: any
}

const BottomBar: FC<IProps> = ({step, setStep}) => {

  const {userPersonalization } = useResumePersonalizationContext();
  const {userDataSet} = useUserDataSetContext();


  const patternConfig = {
    fontFamily: userPersonalization.fontFamily,
    color: userPersonalization.color,
    fontSize: userPersonalization.fontSize
  }



  const nextStep = () =>{
    setStep(step + 1)
  }
  const prevStep = () =>{
    setStep(step - 1)
  }

  return (
    <div className={styles.bar}>
      <div>
        {step > 1 ?
          <button onClick={prevStep} className={styles.button}>{"< Wstecz"}</button>
        : ""}
      </div>
      <div className={styles.rightButton}>
        {step < 3 ?
          <Button label='Dalej >' type='' action={nextStep}/>
        :
        <PDFDownloadLink fileName="Resume" document={<PDFPattern1 data={userDataSet} personalization={patternConfig}/>}>
          <Button label='Gotowe' type='' action={null}/>
        </PDFDownloadLink>
        }
      </div>
    </div>
  )
}

export default BottomBar