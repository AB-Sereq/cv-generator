import { FC } from 'react';

import styles from "@/styles/cv-creator/topSection.module.css"

interface IProps {
  step: number
}

interface IElement {
    text: string,
    number: number,
    step: number
}


const Element: FC<IElement> = ({text, number, step}) => {
    if(number === step){
        return (
            <div className={`${styles.element} ${styles.current}`}>
                <div className={styles.dot}>{number}</div>
                <h2 className={styles.text}>{text}</h2>
            </div>
          )
    }else{
        return (
          <div className={styles.element}>
              <div className={styles.dot}>{number}</div>
              <h2 className={styles.text}>{text}</h2>
          </div>
        )
    }
}


const TopSection: FC<IProps> = ({step}) => {
    
    const texts = ['Wybierz wzór graficzny', 'Uzupełnij swoje dane', 'Wygeneruj CV']
   

  return (
    <div className={styles.container}>
      <div className={styles.dotsContainer}>
        <Element text={texts[0]} number={1} step={step}/>
        <Element text={texts[1]} number={2} step={step}/>
        <Element text={texts[2]} number={3} step={step}/>
      </div>
    </div>
  )
}

export default TopSection