import { useState} from "react"

import DropdownElement from "@/app/cv-create-dataset/[components]/DropdownElement"

import styles from "@/styles/cv-create-dataset/dropdownElementsWrapper.module.css"

import { FC } from 'react';

interface props{
  displayDropdown: boolean
}

const DropdownElementsWrapper: FC<props> = ({displayDropdown}) => {

  const [unroleldElement, setUnroleldElement] = useState<string>("")


  return (
    <>
    {displayDropdown ? 
    <div className={styles.contentWrapper}>

        <DropdownElement name="Doświadczenie zawodowe" id="experience" 
          inputs={[
            {
              label: "Nazwa firmy",
              type: 'text',
              name: "companyName",
            },
            {
              label: "Miejscowość",
              type: 'text',
              name: "city",
            },
            {
              label: "Stanowisko",
              type: 'text',
              name: "position",
            },
            {
              label: "Data rozpoczęcia",
              type: 'date',
              name: "startDate",
            },
            {
              label: "Data zakończenia",
              type: 'date',
              name: "endDate",
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo",
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />

        <DropdownElement name="Certyfikaty" id="certificates"
          inputs={[
            {
              label: "Nazwa certyfikatu",
              type: 'text',
              name: 'certificateName'
            },
            {
              label: "Data zakończenia",
              type: 'date',
              name: "endDate"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        
      />

        <DropdownElement name="Edukacja" id="education"
          inputs={[
            {
              label: "Poziom wykształcenia",
              type: 'text',
              name: "level"
            },
            {
              label: "Miejscowość",
              type: 'text',
              name: "city"
            },
            {
              label: "Pełna nazwa instytucji",
              type: 'text',
              name: "institutionName"
            },
            {
              label: "Data rozpoczęcia",
              type: 'date',
              name: "startDate",
            },
            {
              label: "Data zakończenia",
              type: 'date',
              name: "endDate",
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}/>

        <DropdownElement name="Skończone kursy i szkolenia" id="courses"
          inputs={[
            {
              label: "Nazwa kursu / szkolenia",
              type: "text",
              name: "courseName"
            },
            {
              label: "Data rozpoczęcia",
              type: 'date',
              name: "startDate",
            },
            {
              label: "Data zakończenia",
              type: 'date',
              name: "endDate",
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />

        <DropdownElement name="Umiejętności" id="skills"
          inputs={[
            {
              label: "Umiejętność",
              type: 'text',
              name: "skillName"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />

        <DropdownElement name="Osiągnięcia" id="achievements"
          inputs={[
            {
              label: "Osiągnięcie",
              type: 'text',
              name: "achievementName"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }

          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />

        <DropdownElement name="Zainteresowania i hobby" id="hobbys"
          inputs={[
            {
              label: "Twoje hobby",
              type: 'text',
              name: "hobbyName"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />
        <DropdownElement name="Cechy" id="characteristic"
          inputs={[
            {
              label: "Cecha",
              type: 'text',
              name: "characteristicName"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />

        <DropdownElement name="Aktywność dodatkowa" id="additionalActivity"
          inputs={[
            {
              label: "Aktywność",
              type: 'text',
              name: "activityName"
            },
            {
              label: "Miejscowość",
              type: 'text',
              name: "city"
            },
            {
              label: "Data rozpoczęcia",
              type: 'date',
              name: "startDate"
            },
            {
              label: "Data zakończenia",
              type: 'date',
              name: "endDate"
            },
            {
              label: "Dodatkowe informacje",
              type: "text",
              name: "additionalInfo"
            }
          ]} 
          plusBtnClickFunc={setUnroleldElement} 
          currentlyUnrolledElement={unroleldElement}
        />
        </div>
        :
        ""}

    </>
  )
}

export default DropdownElementsWrapper