import { FC } from 'react';
import styles from "@/styles/cv-creator/bottomBar.module.css"
import Button from '@/components/UI/buttons/Button';

interface IProps {
  step: number,
  setStep: any
}

const BottomBar: FC<IProps> = ({step, setStep}) => {


  const nextStep = () =>{
    if(step < 3){
      setStep(step + 1)
    }
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
        : <Button label='Gotowe' type='' action={null}/>}
      </div>
    </div>
  )
}

export default BottomBar