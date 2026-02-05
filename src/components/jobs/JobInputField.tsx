
interface IProps {
    label: string;
    type: string;
    htmlFor: string;
    inputStyles?: string;
    placeholder: string;
}

const JobInputField = ({ label, type, htmlFor, placeholder, inputStyles }: IProps) => {
  return (
    <div className='flex flex-col gap-[5px]'>
        <label 
            className="font-semibold text-[clamp(.8rem,1vmax,1rem)] cursor-pointer"
            htmlFor={htmlFor}> {label} </label>
        <input 
            id={htmlFor}
            type={type}
            placeholder={placeholder}
            className={`${inputStyles} input_field placeholder:tracking-wide`} />
    </div>
  )
}

export default JobInputField