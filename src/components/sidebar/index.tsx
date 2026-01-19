import React from 'react'
import { MapPin, Check } from "lucide-react"
import { filter } from '../../constants'

const Sidebar = () => {
  return (
    <aside className='w-[20%] h-full sticky top-0 flex flex-col gap-5 p-[1.5rem] border-r-[1px] border-r-(--grey)'>
        <div className='w-full flex items-center justify-between border-b-[1px] border-b-(--border-col) pb-[.7rem]'>
            <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold'> Filter </h3>
            <strong className='text-[red] text-[clamp(.8rem,1vmax,1rem)]'> Reset </strong>
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
        </article>

        {/* roles */}
    </aside>
  )
}

export default Sidebar