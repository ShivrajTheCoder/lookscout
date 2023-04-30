import React from 'react'

export default function FormIconLabelComponent(props) {
    const {icon,name}=props;
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='border-[#5F6D7E] border p-1 w-fit rounded-xl'>
                {icon}
            </div>
            <span>{name}</span>
        </div>
    )
}
