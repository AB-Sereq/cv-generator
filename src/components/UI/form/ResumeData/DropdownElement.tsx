import { useState } from "react"

import { FC } from 'react';

import { useUserDataSetContext } from "@/context/UserDataSet";

import { FaCheck, FaTrashAlt } from "react-icons/fa";

import FormInput from "./FormInput";
import ReadyData from "./ReadyData";

import styles from "@/styles/components/resumeDataForm/dropdownElement.module.css"

interface IDropownElementProps{
	name: string;
	id: string;
	plusBtnClickFunc: any;
	currentlyUnrolledElement: string;
	inputs: Array<{ label: any; type: string; name: string}>;
}

interface IDataState{
	name: string,
	id: string;
	inputsValues: {}[]
}

const DropdownElement: FC<IDropownElementProps> = ({name, id, inputs, plusBtnClickFunc, currentlyUnrolledElement}) => {

	const { userDataSet, setUserDataSet} = useUserDataSetContext();

	const array: any = [];

	inputs.forEach((e)=>{
		array[e.name] = ""
	})

	const [data, setData] = useState<IDataState>({
		name: id,
		id: String(Date.now()),
		inputsValues: array,
	})

	const stateReset = ()=>{
		setData({
			name: id,
			id: String(Date.now()),
			inputsValues: array,
		})
	}

	const stateResetFunc = (e: any)=>{
		e.preventDefault()
		plusBtnClickFunc("")
		stateReset()
	}

	const updateValues = (e: any, input: any)=>{
		const neww = {...data.inputsValues, [input]: e.target.value};
		const nextData = { ...data, inputsValues: neww };
		setData(nextData)
	}

	const saveData = (e: any)=>{
		e.preventDefault()
		plusBtnClickFunc("")
		if(Object.values(data.inputsValues).join("") !== ""){
			setUserDataSet({ ...userDataSet, [name]: userDataSet[String(id)].push(data)})
		}
		stateReset()
	}


  return (
	<>
		{currentlyUnrolledElement !== "" && currentlyUnrolledElement !== id? "" :
		(
		<div className={styles.container}>
			<section className={styles.topSection}>
				<h2 className={styles.nameHeader}>{name}</h2>
				{currentlyUnrolledElement === id ? (
					<div className={styles.unrolledElementControlsWrapper}>
						<button className={`roundBtn ${styles.trashBtn}`} onClick={stateResetFunc}>
							<FaTrashAlt/>
						</button>
						<button className="roundBtn" onClick={saveData}>
							<FaCheck/>
						</button>
					</div>
				): 
				(
					<div>
						<button className='roundBtn' onClick={(e: any)=> {
							e.preventDefault()
							plusBtnClickFunc(id)}
							}>+</button>
					</div>
				)}
			</section>
			{currentlyUnrolledElement === id ? (
				<section className={styles.inputsSection}>
					{inputs.map((input)=>{
						return <FormInput key={input.label} type={input.type} label={input.label} id={input.label} name={input.label} onChange={(e) => {
							updateValues(e, input.name) 		
							}}
							/>
					})}
				</section>

			) : (
				<div>
					{userDataSet[id].length > 0 ?
						userDataSet[id].map((e: any)=>{
							return <ReadyData key={e.id} id={[e.id, id]} name={name} label={e.inputsValues[Object.keys(e.inputsValues)[0]]}/>
						})	
					:
					""
				}
				</div>
			)}
		</div>
		)	}
	</>
  )
}

export default DropdownElement