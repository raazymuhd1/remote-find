import JobInputField from "./JobInputField"
import JobTextAreaField from "./JobTextAreaField"
import OptionField from "./OptionField"
import { createJobOptions } from "../../constants"


const CreateJob = () => {
  return (
    <section className="w-[90%] mx-auto bg-(--light-white) h-[80vh] flex flex-col items-center justify-center bg-(--white))">
        <article className="w-[35%] post_job h-[85%] mt-[2rem] overflow-y-auto rounded-[1.1rem] flex flex-col items-center gap-[1rem] bg-(--white) border-[1px] border-(--light-green) box_shadow">
            <h2 className='text-[clamp(1rem,1.5vmax,1.5rem)] p-[2rem] sticky top-0 h-[60px] bg-(--white) w-full text-center font-bold z-[2]'> Post Job </h2>
            <div className='flex flex-col gap-[.6rem] p-[2rem] w-full'> 
                <JobInputField {
                  ...{
                    label: "Company Name",
                    type: "text",
                    htmlFor: "company-name",
                    placeholder: "e.g Apple"
                  }
                } />
                <JobInputField {
                  ...{
                    label: "Role",
                    type: "text",
                    htmlFor: "role",
                    placeholder: "e.g Fullstack Developer"
                  }
                } />
                <JobInputField {
                  ...{
                    label: "Description",
                    type: "text",
                    htmlFor: "description",
                    placeholder: "Description"
                  }
                } />
                <JobInputField {
                  ...{
                    label: "Location",
                    type: "text",
                    htmlFor: "location",
                    placeholder: "e.g Jakarta, Indonesia"
                  }
                } />
                {/* location option */}
                {/* type option */}
                <OptionField 
                  { ...{
                     label: "Position",
                     htmlFor: "position",
                     options: createJobOptions.jobLocation
                  } }
                />
                <OptionField 
                  { ...{
                     label: "Job Types",
                     htmlFor: "job-types",
                     options: createJobOptions.jobTypes
                  } }
                />
                {/* salary input */}
                <JobInputField {
                  ...{
                    label: "Salary",
                    type: "text",
                    htmlFor: "salary",
                    placeholder: "e.g $1k/monthly"
                  }
                } />
                <JobTextAreaField
                  {
                    ...{
                      label: "Requirements",
                      htmlFor: "requirements",
                      placeholder: "Fill up the requirements by following this format: \n - familiar with react \n -familiar with mongodb \n - etc "
                    }
                  }
                />
                <JobTextAreaField
                  {
                    ...{
                      label: "Responsibilities",
                      htmlFor: "responsibilities",
                      placeholder: "Fill up the responsibilities by following this format: \n - familiar with react \n -familiar with mongodb \n - etc "
                    }
                  }
                />
            </div>
            <button className='text-[clamp(.8rem,1vmax,1rem)] button_shadow sticky bottom-[5px] bg-(--light-green) w-full text-(--white) py-[5px] px-[10px] rounded-[20px] cursor-pointer hover:opacity-[.7] font-bold'> Post </button>
        </article>
    </section>
  )
}

export default CreateJob