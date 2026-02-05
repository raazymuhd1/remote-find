import { useState } from 'react'
import { MapPin, Check } from "lucide-react"
import { jobFilter } from '../../constants'
import { useLocation } from 'react-router'
interface IProps {
    isMobileScreen: boolean;
}

interface FilterTab {
    id: number;
    title: string;
    isActive: boolean;
}

const Sidebar = ({isMobileScreen}: IProps) => {
    const [customSalary, ] = useState(false);
    const [positions, setPositions] = useState(jobFilter.jobLocation);
    const [types, setTypes] = useState(jobFilter.jobTypes);
    const [roles, setRoles] = useState(jobFilter.roles);
    const [salaryRanges, setSalaryRanges] = useState(jobFilter.salaryRange);
    const location = useLocation()

    const handleFilterTabs = (filterTabs: FilterTab[], tabId: number, updateFilterTab: (data: FilterTab[]) => void) => {
        const tabs: FilterTab[] = [...filterTabs]
        
        tabs.forEach(tab => {
            if(tab.id == tabId) {
                tab.isActive = true
                console.log("tabId", tabId)
                 return
             }
    
             tab.isActive = false;
        })
        
         updateFilterTab(tabs)
    }


  return (
    <aside 
        onClick={e => e.stopPropagation()}
        className={`${location.pathname == "/auth/signup" || location.pathname == "/user/profile" || location.pathname == "/auth/signin" ? "w-0 h-0" : "lg:w-[15%] md:w-[25%] w-[70%] h-screen p-[1.5rem]" } sidebar sticky inset-0 overflow-y-auto bg-(--white) flex-col ${isMobileScreen ? "md:hidden flex" : "md:flex hidden"} gap-5 border-r-[1px] md:z-0 z-[9] border-r-(--grey)`}>
        <div className='w-full flex items-center justify-between border-b-[1px] border-b-(--border-col) pb-[.7rem]'>
            <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold'> Filter </h3>
            <strong className='text-[red] cursor-pointer text-[clamp(.8rem,1vmax,1rem)]'> Reset </strong>
        </div>

        {/* location */}
        <div className='flex md:w-[80%] w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Location</h4>
            <div className='flex w-full items-center justify-center border-[1px] border-(--border-col) rounded-[10px] md:gap-[5px]'>
                <MapPin className='w-[clamp(.8rem,1.2vmax,1.2rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--grey) translate-y-[3px]' />
                <input type="text" className='placeholder:text-(--grey) md:w-[80%] w-full p-[5px] h-full focus:outline-0 placeholder:text-[clamp(.7rem,.9vmax,.9rem)]' placeholder='Jakarta, Indonesia' />
            </div>
        </div>

        {/* position */}
        <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Position</h4>
            <div className='w-[80%] flex flex-wrap gap-y-[.7rem] gap-x-[1.5rem]'>
                { positions.map(location => (
                    <div 
                        onClick={() => {
                            handleFilterTabs(positions, location.id, setPositions)
                        }}
                        key={location.id} className='flex items-center gap-[5px] cursor-pointer'>
                        <aside className={`bg-(--light-green) border-[1px] border-(--border-col) h-[15px] w-[15px] ${location.isActive ? "bg-(--light-green)" : "bg-transparent"}`}>
                            <Check className={`w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] text-(--white) ${location.isActive ? "block" : "hidden"}`} />
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
                { types.map(type => (
                    <div key={type.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--light-green) rounded-[5px] p-[3px]`}>
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
                { salaryRanges.map(salary => (
                    <div key={salary.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--light-green) rounded-[5px] p-[3px]`}>
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
                { roles.map(role => (
                    <div key={role.id} className='flex items-center gap-[5px]'>
                        <aside className={`w-max h-max bg-(--light-green) rounded-[5px] p-[3px]`}>
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