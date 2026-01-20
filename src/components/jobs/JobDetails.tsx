import React from 'react'
import { apple } from '../../assets'
import { Bookmark, MessageSquareShare, MapPin, BriefcaseBusiness, Building, CreditCard } from 'lucide-react'

const dummyResponsibilities = ["Conduct market research", "Industry trends and competition", "formulate appropriate design solutions"]
const dummyRequirements = ["3 years of UI/UX design experience", "Familiarity usability research and validation", "Familiar working in agile environment"]

const dummyJobsDetail = [
    {id: 1, title: "Location", value: "Jakarta, ID", icon: MapPin},
    {id: 2, title: "Position", value: "On Site", icon: Building},
    {id: 3, title: "Type", value: "Fulltime", icon: BriefcaseBusiness},
    {id: 4, title: "Salary Range", value: "$2k/m", icon: CreditCard},
] 

const JobDetails = () => {
  return (
    <section className='flex flex-col gap-[1rem]'>
        {/* company & job title */}
        <aside className='flex w-full items-center gap-[10px]'>
            <img src={apple} alt="company-logo" className='object-cover w-[clamp(2rem,2.8vmax,2.8rem)] h-[clamp(2rem,2.8vmax,2.8rem)] rounded-[50%]' />
            <aside className='flex flex-col'>
                <h3 className='text-[clamp(1rem,1.3vmax,1.3rem)] font-bold tracking-[1px]'> Frontend Developer </h3>
                <strong className='text-(--light-green) text-[clamp(.8rem,1vmax,1rem)] tracking-[1px]'> Apple </strong>
            </aside>
        </aside>

        {/* job details */}
        <article className='w-[80%] flex items-center flex-wrap gap-[1rem]'>
            { dummyJobsDetail.map(jobDetails => (
                <div className='flex gap-[5px] items-start'>
                    <jobDetails.icon className='w-[clamp(.8rem,1vmax,1rem)] h-[clamp(.8rem,1vmax,1rem)] translate-y-[5px]' />
                    <div className='flex flex-col'>
                        <h3 className='font-semibold text-[clamp(.8rem,1vmax,1rem)] tracking-[1px]'> {jobDetails.title} </h3>
                        <p className='text-(--grey) text-[clamp(.7rem,.9vmax,.9rem)] tracking-[1px]'> {jobDetails.value} </p>
                    </div>
                </div>
            )) }
        </article>
        
        <div className='w-full flex flex-col'>
            <h4 className='text-[.8rem,1max,1rem] font-semibold tracking-[1px]'> posted 4 days ago </h4>
            <p className='text-(--light-green) text-[clamp(.6rem,.8vmax,.8rem)] font-semibold tracking-[1px]'> Other job from this company </p>
        </div>

        <div className='w-full flex gap-[15px] items-center'>
            <button className='px-[10px] py-[5px] rounded-[10px] bg-(--light-green) text-(--white) border-0 w-[50%] tracking-[1px]'> Apply Now </button>
             <div className='rounded-[10px] p-[5px] border-[1px] border-(--bright-green) hover:bg-(--bright-green) transition-[background,1s,ease-in-out]'>
                 <Bookmark className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--light-green)" />
             </div>
            <MessageSquareShare className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)] text-(--light-green)" />
        </div>

        {/* more details */}
        <article className='w-full flex flex-col gap-[1rem]'>
            <div className='flex flex-col w-full'>
                <h2 className='font-semibold text-[clamp(1rem,1.2vmax,1.2rem)] tracking-[1px]'> Description </h2>
                <p className='text-[clamp(.6rem,.8vmax,.8rem)] text-(--grey) tracking-[1px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel tenetur iste obcaecati recusandae! Ducimus itaque eius saepe autem quas qui, ea porro consectetur quia et, obcaecati beatae! At, repudiandae! </p>
            </div>

             <div className='flex flex-col w-full'>
                <h2 className='font-semibold text-[clamp(1rem,1.2vmax,1.2rem)] tracking-[1px]'> Responsibilities </h2>
                { dummyResponsibilities.map((res, idx) => (
                    <li key={idx} className='ml-[1.2rem] text-[clamp(.6rem,.8vmax,.8rem)] text-(--grey) tracking-[1px]'> {res} </li>
                )) }
            </div>

             <div className='flex flex-col w-full'>
                <h2 className='font-semibold text-[clamp(1rem,1.2vmax,1.2rem)] tracking-[1px]'> Requirements </h2>
                { dummyRequirements.map((req, idx) => (
                    <li key={idx} className='ml-[1.2rem] text-[clamp(.6rem,.8vmax,.8rem)] text-(--grey) tracking-[1px]'> {req} </li>
                )) }
            </div>
        </article>
    </section>
  )
}

export default JobDetails