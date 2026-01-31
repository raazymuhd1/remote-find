import type { ChangeEventHandler } from "react";
import type { InputValidationRules, Path, UseFormRegister } from "react-hook-form";
import type { UserForm } from "../../types";

interface InputProps {
  inputLabel: Path<UserForm>;
  register: UseFormRegister<UserForm>;
  validation: {
     required?: boolean;
     minLength?: number;
     maxLength?: number
  }
}

interface IProps {
    htmlFor: string;
    placeholder: string;
    type: string;
    label: string;
    inputProps: InputProps;
    // value: string;
    // handleChange: ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({  htmlFor, placeholder, type, label, inputProps }: IProps) => {
  return (
    <div className={`flex flex-col gap-[5px] w-full`}>
        <label htmlFor={htmlFor} className='font-semibold text-[clamp(.8rem,1vmax,1rem)]'> {label} </label>
        <input 
          type={type} id={htmlFor} 
          {  ...inputProps.register(inputProps.inputLabel, inputProps.validation) }
          // value={value}
          // onChange={handleChange}
          placeholder={placeholder} 
          className={`py-[5px] px-[10px] rounded-[10px] border-[1px] border-(--border-col) w-full`} />
    </div>
  )
}

export default TextField