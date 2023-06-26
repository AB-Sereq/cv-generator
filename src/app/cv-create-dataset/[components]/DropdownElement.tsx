'use client'

import {UserDataSetContext } from '@/context/UserDataSet';

import { useContext, useState } from "react"
import { FC } from 'react';

import FormInput from "@/components/UI/form/FormInput"
import ReadyData from "@/app/cv-create-dataset/[components]/ReadyData";

import { FaCheck, FaTrashAlt } from "react-icons/fa";




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
			<div className="w-100 border h-100" style={{marginBottom: "14px", padding: "4.8px"}}>
				<div className="w-100 d-flex align-items-center justify-content-between" style={{minHeight: "48px"}}>
					<h2 className="fs-6 fw-normal">{name}</h2>
					<div>

						{currentlyUnrolledElement === name ? 
						<div className="d-flex justify-content-between" style={{width: "80px"}}>
							<button onClick={stateReset} className="bg-warning d-flex align-items-center justify-content-center rounded-circle border-0" style={{width: "34px", height: "34px"}}>
								<FaTrashAlt/>
							</button>
							<button onClick={saveData} className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle border-0" style={{width: "34px", height: "34px"}}>
									<FaCheck/>
							</button>

						</div>
						: 
						<button onClick={updateState} className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle border-0" style={{width: "34px", height: "34px"}}>+</button>
						}
					</div>
				</div>
				{currentlyUnrolledElement === name ? 
				<div className="mt-4 w-100 overflow-auto">
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
