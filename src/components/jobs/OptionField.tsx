import { useState } from 'react'

interface IOptions {
    id: number;
    value: string;
}

type Props = {
    label: string;
    htmlFor: string;
    options: IOptions[]
}

const OptionField = ({label, htmlFor, options}: Props) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedValue, setSelectedValue] = useState("")

  return (
    <article>
        {/* label */}
        <label 
            className="font-semibold text-[clamp(.8rem,1vmax,1rem)] cursor-pointer"
            htmlFor={htmlFor}> {label} </label>

        <div 
        onClick={() => setShowOptions(!showOptions)}
        className='w-full border-[1px] relative top-0 border-(--border-col) p-[10px] rounded-[5px]'>
            <h4 className='w-full cursor-pointer font-semibold'> { selectedValue || options[0].value } </h4>
            <div 
                onClick={(e) => e.stopPropagation()}
                className={`absolute flex flex-col gap-[4px] rounded-[10px] green_border bg-(--light-green) ${showOptions ? "opacity-[1] translate-y-[40px] h-[130px] translate-x-[-10px]" : "opacity-[0] h-0 w-0 translate-y-[0] translate-x-[-10px]"} w-full top-0 transition-[opacity,height,transform,1s,ease-in-out] z-[9]`}>
                { options.length > 0 && options.map(option => (
                    <h3 
                        key={option.id}
                        onClick={(e) => {
                            setSelectedValue(e.currentTarget.textContent)
                            setShowOptions(false)
                        }}
                        className={` p-[5px] cursor-pointer font-semibold rounded-[5px] hover:bg-(--white) ${showOptions ? "w-full block" : "w-0 hidden"}`}> { option.value } 
                    </h3>
                )) }
            </div>
        </div>
    </article>
  )
}

export default OptionField