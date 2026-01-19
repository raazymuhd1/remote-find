import React from 'react'
import { apple } from '../../assets'

const JobDetails = () => {
  return (
    <section className=''>
        {/* company & job title */}
        <aside className='flex w-full items-center gap-[10px]'>
            <img src={apple} alt="company-logo" className='objec-cover w-[clamp(1.8rem,2.4vmax,2.4rem)]' />
            <aside className='flex flex-col'>
                <h3 className='text-[clamp(1rem,1.5vmax,1.5rem)] font-bold'> Frontend Developer </h3>
                <strong className='text-(--bright-green) text-[clamp(.8rem,1vmax,1rem)]'> Apple </strong>
            </aside>
        </aside>

        {/* job details */}
    </section>
  )
}

export default JobDetails