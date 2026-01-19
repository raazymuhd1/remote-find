import { Search, ArrowRight } from 'lucide-react'

const Jobs = () => {
  return (
    <section className='w-[80%] bg-(--light-white) p-[1.3rem]'>
       <div className='bg-(--bright-green) flex flex-col gap-[2rem] p-[15px] w-full rounded-[15px]'>
          <div className='flex w-full flex-col'>
            <h3 className='text-[clamp(1rem,2vmax,2rem)] font-bold text-(--white)'> Discover your ideal career right here! </h3>
            <p className='text-[clamp(.8rem,1vmax,1rem)] text-(--white)'> Explore opportunities that suit your interest to achieve the career you want </p>
          </div>
          <div className='w-[80%] flex items-center gap-[10px] rounded-[2rem] p-[5px] border-[1px] bg-(--white) border-(--border-col)'>
             <Search className='w-[clamp(1rem,1.3vmax,1.3rem)] h-[clamp(1rem,1.3vmax,1.3rem)]' />
             <input type="text" className='placeholder:text-(--grey) w-[95%] h-full focus:outline-0' placeholder='Search Jobs' />
             <aside className='rounded-[50%] w-max p-[5px] bg-(--bright-green)'>
                <ArrowRight className='w-[clamp(1rem,1.3vmax,1.3rem)] h-[clamp(1rem,1.3vmax,1.3rem)] text-(--white)'  />
             </aside>
          </div>
       </div>
    </section>
  )
}

export default Jobs