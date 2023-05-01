import React from 'react'
import { BiLockAlt, BiDollar } from 'react-icons/bi'
import { RxPerson } from 'react-icons/rx'
import { GoThumbsup } from 'react-icons/go'
import FormIconLabelComponent from './FormIconLabelComponent'
export default function FormStageComponenet() {
    return (
        <div className='grid grid-cols-4 bg-[#FAFBFC] p-5'>
            <FormIconLabelComponent name={"Account"} icon={<BiLockAlt color={"#5F6D7E"}/>}/>
            <FormIconLabelComponent name={"Personal"} icon={<RxPerson color={"#5F6D7E"}/>}/>
            <FormIconLabelComponent name={"Billing"} icon={<BiDollar color={"#5F6D7E"}/>}/>
            <FormIconLabelComponent name={"Done"} icon={<GoThumbsup color={"#5F6D7E"}/>}/>
        </div>
    )
}
