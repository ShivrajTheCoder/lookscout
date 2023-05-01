import React from 'react'

export default function InputComponent(props) {
  return (
      <div className='w-full flex flex-col my-4'>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} ref={props.register} name={props.name} className='border-2 rounded-sm my-2 px-2 py-1' type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
      </div>
  )
}
