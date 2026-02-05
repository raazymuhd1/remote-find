
interface IProps {
    label: string;
    htmlFor: string;
    inputStyles?: string;
    placeholder: string;
}

const JobTextAreaField = ({ label, htmlFor, placeholder, inputStyles }: IProps) => {
  return (
    <div className='flex flex-col gap-[5px]'>
        <label 
            className="font-semibold text-[clamp(.8rem,1vmax,1rem)] cursor-pointer"
            htmlFor={htmlFor}> {label} </label>
        <textarea
            id={htmlFor}
            rows={5}
            cols={5} 
            placeholder={placeholder} 
            className={`${inputStyles} input_field placeholder:tracking-wide`} 
        />
    </div>
  )
}

export default JobTextAreaField