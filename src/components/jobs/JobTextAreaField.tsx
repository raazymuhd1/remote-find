
interface IProps {
    label: string;
    htmlFor: string;
    inputStyles?: string;
    placeholder: string;
}

const JobTextAreaField = ({ label, htmlFor, placeholder, inputStyles }: IProps) => {
  return (
    <div className='flex flex-col gap-[10px]'>
        <label htmlFor={htmlFor}> {label} </label>
        <textarea
            id={htmlFor}
            rows={5}
            cols={5} 
            placeholder={placeholder} 
            className={`${inputStyles} input_field`} 
        />
    </div>
  )
}

export default JobTextAreaField