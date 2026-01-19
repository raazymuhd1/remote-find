import React from 'react'
import { MapPin, Check } from "lucide-react"
import { filter } from '../../constants'

const Sidebar = () => {
  return (
    <aside className='w-[20%] h-full sticky top-0 flex flex-col gap-5 p-[10px] border-r-[1px] border-r-(--grey)'>
        <div className='w-full flex items-center justify-between'>
            <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold'> Filter </h3>
            <strong className='text-[red] text-[clamp(.8rem,1vmax,1rem)]'> Reset </strong>
        </div>

        {/* location */}
        <div className='flex w-[80%] flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Location</h4>
            <div className='flex w-full items-center justify-center gap-[5px]'>
                <MapPin className='w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--grey)' />
                <p className='text-(--grey)'> Jakarta, Indonesia </p>
            </div>
        </div>

        {/* position */}
        <article className='flex w-full flex-col gap-[10px]'>
            <h4 className='font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]'>Job Position</h4>
            <div className='w-full flex flex-wrap gap-[10px]'>
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

        {/* salary range */}

        {/* roles */}
    </aside>
  )
}

export default Sidebar