import React from 'react'

interface IProps {
    htmlFor: string;
    placeholder: string;
    type: string;
    label: string;
}

const TextField = ({  htmlFor, placeholder, type, label }: IProps) => {
  return (
    <div className={`flex flex-col gap-[5px] w-full`}>
        <label htmlFor={htmlFor} className='font-semibold text-[clamp(.8rem,1vmax,1rem)]'> {label} </label>
        <input type={type} id={htmlFor} placeholder={placeholder} className={`py-[5px] px-[10px] rounded-[10px] border-[1px] border-(--border-col) w-full`} />
    </div>
  )
}

export default TextField