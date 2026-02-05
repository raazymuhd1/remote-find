
interface IProps {
    label: string;
    type: string;
    htmlFor: string;
    inputStyles?: string;
    placeholder: string;
}

const JobInputField = ({ label, type, htmlFor, placeholder, inputStyles }: IProps) => {
  return (
    <div className='flex flex-col gap-[10px]'>
        <label htmlFor={htmlFor}> {label} </label>
        <input type={type} placeholder={placeholder} className={`${inputStyles} input_field`} />
    </div>
  )
}

export default JobInputField