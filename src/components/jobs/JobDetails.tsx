import React from 'react'
import { apple } from '../../assets'
import { Bookmark, MessageSquareShare  } from 'lucide-react'

const JobDetails = () => {
  return (
    <section className='flex flex-col gap-[1rem]'>
        {/* company & job title */}
        <aside className='flex w-full items-center gap-[10px]'>
            <img src={apple} alt="company-logo" className='object-cover w-[clamp(2rem,2.8vmax,2.8rem)] h-[clamp(2rem,2.8vmax,2.8rem)] rounded-[50%]' />
            <aside className='flex flex-col'>
                <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold'> Frontend Developer </h3>
                <strong className='text-(--bright-green) text-[clamp(.8rem,1vmax,1rem)]'> Apple </strong>
            </aside>
        </aside>

        {/* job details */}
        
        <div className='w-full flex flex-col'>
            <h4 className='text-[1rem,1.2vmax,1.2rem] font-semibold'> posted 4 days ago </h4>
            <p className='text-(--bright-green) text-[clamp(.8rem,1vmax,1rem)] font-semibold'> Other job from this company </p>
        </div>

        <div className='w-full flex gap-[15px] items-center'>
            <button className='px-[10px] py-[5px] rounded-[10px] bg-(--bright-green) text-(--white) border-0 w-[50%]'> Apply Now </button>
             <div className='rounded-[10px] p-[5px] border-[1px] border-(--bright-green) hover:bg-(--bright-green) transition-[background,1s,ease-in-out]'>
                 <Bookmark className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--bright-green)" />
             </div>
            <MessageSquareShare className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--bright-green)" />
        </div>
    </section>
  )
}

export default JobDetails