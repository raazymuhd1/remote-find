import { useState } from 'react'
import { MapPin, Check } from "lucide-react"
import { filter } from '../../constants'

const Sidebar = () => {
    const [salaryRange, setSalaryRange] = useState("");
    const [customSalary, setCustomSalary] = useState(false);
    const [position, setPosition] = useState("");
    const [type, setType] = useState("");
    const [roles, setRoles] = useState("");

  return (
    <aside className='w-[20%] sidebar h-full sticky inset-0 overflow-y-auto flex flex-col gap-5 p-[1.5rem] border-r-[1px] border-r-(--grey)'>
        <div className='w-full flex items-center justify-between border-b-[1px] border-b-(--border-col) pb-[.7rem]'>
            <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold'> Filter </h3>
            <strong className='text-[red] cursor-pointer text-[clamp(.8rem,1vmax,1rem)]'> Reset </strong>
        </div>

        {/* location */}
        <div className='flex w-[80%] flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Location</h4>
            <div className='flex w-full items-center justify-center border-[1px] border-(--border-col) rounded-[10px] gap-[5px]'>
                <MapPin className='w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--grey)' />
                <input type="text" className='placeholder:text-(--grey) w-[80%] p-[5px] h-full focus:outline-0' placeholder='Jakarta, Indonesia' />
            </div>
        </div>

        {/* position */}
        <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Position</h4>
            <div className='w-[80%] flex flex-wrap gap-y-[.7rem] gap-x-[1.5rem]'>
                { filter.jobLocation.map(location => (
                    <div key={location.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--bright-green) rounded-[5px] p-[3px]`}>
                        <Check className='w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] text-(--white)' />
                        </aside>
                        <p className='text-[clamp(.8rem,1vmax,1rem)]'> {location.title} </p>
                    </div>
                )) }
            </div>
        </article>

        {/* type */}
          <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Types</h4>
            <div className='w-[80%] flex flex-wrap gap-y-[.7rem] gap-x-[1.5rem]'>
                { filter.jobTypes.map(type => (
                    <div key={type.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--bright-green) rounded-[5px] p-[3px]`}>
                             <Check className='w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] text-(--white)' />
                        </aside>
                        <p className='text-[clamp(.8rem,1vmax,1rem)]'> {type.title} </p>
                    </div>
                )) }
            </div>

        </article>

        {/* salary range */}
        <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Salary Range</h4>
              <div className='w-[80%] flex flex-wrap gap-y-[.7rem] gap-x-[1.5rem]'>
                { filter.salaryRange.map(salary => (
                    <div key={salary.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--bright-green) rounded-[5px] p-[3px]`}>
                             <Check className='w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] text-(--white)' />
                        </aside>
                        <p className='text-[clamp(.8rem,1vmax,1rem)]'> {salary.value} </p>
                    </div>
                )) }
            </div>

             { customSalary && <input type="text" placeholder='$500' className={`p-[5px] border-[1px] border-(--border-col) w-[80%] rounded-[5px]`} /> }
        </article>

        {/* roles */}
         <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Roles</h4>
            <div className='w-[50%] flex flex-wrap gap-y-[.3rem] gap-x-[1.1rem]'>
                { filter.roles.map(role => (
                    <div key={role.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--bright-green) rounded-[5px] p-[3px]`}>
                        <Check className='w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] text-(--white)' />
                        </aside>
                        <p className='text-[clamp(.8rem,1vmax,1rem)]'> {role.title} </p>
                    </div>
                )) }
            </div>
        </article>
    </aside>
  )
}

export default Sidebar