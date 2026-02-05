import { Bookmark, Check } from "lucide-react"
import { apple } from "../../assets"
import type { Job } from "../../types";

interface IProps {
    setShowDetails: (status: boolean) => void;
    job: Job
}

const JobCard = ({ setShowDetails, job }: IProps) => {

  return (
    <section 
        key={job.id}
        className={`p-[20px] h-[220px] basis-[200px] grow-1 flex flex-col justify-between gap-[1.3rem] rounded-[15px] green_border cursor-pointer bg-(--white) transition-[margin,border,2s,ease-in-out] hover:translate-y-[-3px]`}>
        <div className='flex items-center w-full justify-between'>
            {/* company logo */}
            <img src={apple} alt="company-logo" className="rounded-[50%] w-[clamp(1.3rem,1.9vmax,1.9rem)] object-cover h-[clamp(1.3rem,1.9vmax,1.9rem)]" />
            <aside className="p-[5px] transition-[background,1s,ease-in-out] hover:text-(--white) hover:bg-(--light-green) rounded-[10px] cursor-pointer w-max">
                <Bookmark className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)]" />
            </aside>
        </div>

        <div className="flex flex-col gap-[10px]">
            <aside className="flex items-center flex-col gap-[5px]">
                <div className="flex items-center gap-[5px]">
                    <h3 className="font-semibold text-[clamp(.8rem,1.1vmax,1.1rem)]"> {job?.companyName} </h3>
                    <div className="p-[3px] transition-[background,1s,ease-in-out] bg-(--blue-check) rounded-[50%] w-max">
                        <Check className="w-[clamp(.4rem,.6vmax,.6rem)] h-[clamp(.4rem,.6vmax,.6rem)] text-(--white)" />
                    </div>

                </div>
                <h3 className="font-semibold text-[clamp(.6rem,.8vmax,.8rem)] whitespace-nowrap"> { job?.role } </h3>
            </aside>

            {/* job types & location */}
            <div className="flex flex-wrap items-center w-[80%] mx-auto justify-center gap-[10px]">
                <h4 className="rounded-[10px] py-[3px] px-[5px] border-[1px] border-(--border-col) font-semibold text-[clamp(.8rem,.9vmax,.9rem)] text-(--grey)"> { job?.detail?.position } </h4>
                <h4 className="rounded-[10px] py-[3px] px-[5px] border-[1px] border-(--border-col) font-semibold text-[clamp(.8rem,.9vmax,.9rem)] text-(--grey)"> { job?.detail?.location } </h4>
            </div>
        </div>

        {/* salary & details */}
        <div className="w-full flex items-center justify-between">
            <aside className="flex flex-col">
              <h3 className="font-bold"> { job?.detail?.salaryRange } </h3>
              <p className="text-(--grey)"> { job?.detail?.location } </p>
            </aside>

            <aside 
                onClick={() => setShowDetails(true)}
                className="border-[1px] border-(--light-green) py-[2px] px-[5px] rounded-[.7rem] bg-(--light-green) transition-[background,1s,ease-in-out]">
                <h4 className="text-[clamp(.8rem,1vmax,1rem)] font-semibold text-(--white)"> Details </h4>
            </aside>
        </div>
    </section>
  )
}

export default JobCard