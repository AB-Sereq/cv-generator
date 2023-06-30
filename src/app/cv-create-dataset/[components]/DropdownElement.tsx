'use client'

import {UserDataSetContext } from '@/context/UserDataSet';

import { useContext, useState } from "react"
import { FC } from 'react';

import FormInput from "@/components/UI/form/FormInput"
import ReadyData from "@/app/cv-create-dataset/[components]/ReadyData";

import { FaCheck, FaTrashAlt } from "react-icons/fa";

import styles from "@/styles/cv-create-dataset/dropdownElement.module.css";




interface ElementProps{
	name: string;
	id: string;
	plusBtnClickFunc: any;
	currentlyUnrolledElement: string;
	inputs: Array<{ label: any; type: string; name: string}>;
}

interface Data{
	name: string,
	id: string;
	inputsValues: {}[]
}

const DropdownElement: FC<ElementProps> = ({name, id, plusBtnClickFunc, currentlyUnrolledElement, inputs}) => {

	const array: any = [];

	inputs.forEach((e)=>{
		array[e.name] = ""
	})

	const {userDataSet, setUserDataSet} = useContext(UserDataSetContext)

	const [data, setData] = useState<Data>({
		name: id,
		id: String(Date.now()),
		inputsValues: array,
	})

	const resetDataState = () =>{
		setData({
			name: id,
			id: String(Date.now()),
			inputsValues: array,
		})
	}

	const updateState = (e: any)=>{
		e.preventDefault()
		plusBtnClickFunc(name)
	}

	const stateReset = (e: any)=>{
		e.preventDefault()
		plusBtnClickFunc("")
		resetDataState()
		console.log(data)
	}

	const saveData = (e: any)=>{
		e.preventDefault()
		plusBtnClickFunc("")
		const arrayToShift = userDataSet[id];
		arrayToShift.unshift(data)
		resetDataState()

	}

	const updateValues = (e: any, input: any)=>{
		const neww = {...data.inputsValues, [input]: e.target.value};
		const nextData = { ...data, inputsValues: neww };
		setData(nextData)
	}

    return (
		<>
		{currentlyUnrolledElement === "" || currentlyUnrolledElement === name ?
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<h2 className={styles.label}>{name}</h2>
					<div>

						{currentlyUnrolledElement === name ? 
						<div className={styles.unrolledElementControlsWrapper}>
							<button onClick={stateReset} className={`roundBtn ${styles.trashBtn}`}>
								<FaTrashAlt/>
							</button>
							<button onClick={saveData} className="roundBtn">
									<FaCheck/>
							</button>

						</div>
						: 
						<button onClick={updateState} className="roundBtn">+</button>
						}
					</div>
				</div>
				{currentlyUnrolledElement === name ? 
				<div className={styles.inputsContainer}>
					{inputs.map((input)=>{
						return <FormInput key={input.label} type={input.type} label={input.label} id={input.label} name={input.label} onChange={(e) => {
							updateValues(e, input.name) 		
							}}
							/>
					})}
				
				</div>	
				:
				<div>
					{userDataSet[id].length > 0 ?
						userDataSet[id].map((e: any)=>{
							return <ReadyData key={e.id} id={[e.id, id]} name={name} label={e.inputsValues[Object.keys(e.inputsValues)[0]]}/>
						})	
					:
					""
				}
				</div>
				}
			</div>
			: ""}
		</>
	);
}

export default DropdownElement
