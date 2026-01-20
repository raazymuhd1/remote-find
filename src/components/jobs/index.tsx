import { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import JobCard from './JobCard'
import JobDetails from './JobDetails'

const Jobs = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [jobs, setJobs] = useState('')

  return (
    <section className='md:w-[85%] h-[90vh] overflow-y-auto w-full bg-(--light-white) md:p-[1.3rem] p-[.5rem]'>
      {/* BANNER */}
      <section className='flex flex-col gap-[1rem]'>
          <div className='bg-(--light-green) flex flex-col gap-[2rem] p-[15px] w-full rounded-[15px]'>
              <div className='flex w-full flex-col'>
                <h3 className='text-[clamp(1rem,2vmax,2rem)] font-bold text-(--white)'> Discover your ideal career right here! </h3>
                <p className='text-[clamp(.8rem,1vmax,1rem)] text-(--white)'> Explore opportunities that suit your interest to achieve the career you want </p>
              </div>
              <div className='md:w-[80%] w-full flex items-center gap-[10px] rounded-[2rem] p-[5px] border-[1px] bg-(--white) border-(--border-col)'>
                <Search className='w-[clamp(1rem,1.3vmax,1.3rem)] h-[clamp(1rem,1.3vmax,1.3rem)]' />
                <input type="text" className='placeholder:text-(--grey) w-[95%] h-full focus:outline-0' placeholder='Search Jobs' />
                <aside className='rounded-[50%] w-max p-[5px] bg-(--light-green)'>
                    <ArrowRight className='w-[clamp(1rem,1.3vmax,1.3rem)] h-[clamp(1rem,1.3vmax,1.3rem)] text-(--white)'  />
                </aside>
              </div>
          </div>

          <h4 className='text-[clamp(1rem,1.1vmax,1.1rem)] font-semibold'> 250 Jobs Results </h4>
      </section>


      {/* jobs card */}
      <article className='mt-[1rem] w-full overflow-y-auto md:p-[1rem] p-[.5rem]'>
        <JobCard setShowDetails={setShowDetails} />
      </article>

      {/* job details modal */}
      <div 
        onClick={() => setShowDetails(false)}
        className={`fixed inset-0 ${showDetails ? "opacity-[1] h-screen w-screen job_details" : "w-0 h-0 opacity-[0]"} delay-200 transition-[position,height,width,right,opacity,3s,ease-in-out] z-[10]`}>
         <aside 
          onClick={(e) => e.stopPropagation()}
          className='absolute right-0 bg-(--white) h-full lg:w-[30%] md:w-[40%] w-[80%] p-[1.5rem] rounded-[10px]'>
           <JobDetails />
         </aside>
      </div>
    </section>
  )
}

export default Jobs