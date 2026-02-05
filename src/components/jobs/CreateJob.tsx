import JobInputField from "./JobInputField"
import JobTextAreaField from "./JobTextAreaField"

const CreateJob = () => {
  return (
    <section className="w-[90%] mx-auto bg-(--light-white) h-[80vh] flex flex-col items-center justify-center bg-(--white))">
        <article className="w-[40%] rounded-[1.1rem] p-[2rem] flex flex-col gap-[1rem] bg-(--white)">
            <h2 className='text-[clamp(1rem,1.2vmax,1.2rem)] font-bold'> Post Job </h2>
            <div className='flex flex-col gap-[1rem] w-full'> 
                <JobInputField {
                  ...{
                    label: "Company Name",
                    type: "text",
                    htmlFor: "company-name",
                    placeholder: "Company name"
                  }
                } />
                <JobInputField {
                  ...{
                    label: "Role",
                    type: "text",
                    htmlFor: "role",
                    placeholder: "Role"
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
                    placeholder: "Location"
                  }
                } />
                {/* position option */}
                {/* location option */}
                {/* type option */}
                {/* salary range option */}

                <JobTextAreaField
                  {
                    ...{
                      label: "Requirements",
                      htmlFor: "requirements",
                      placeholder: "fill the requirements by following this format \n - familiar with react \n -familiar with mongodb \n etc "
                    }
                  }
                />
                <JobTextAreaField
                  {
                    ...{
                      label: "Responsibilities",
                      htmlFor: "responsibilities",
                      placeholder: "fill the requirements by following this format \n - familiar with react \n -familiar with mongodb \n etc "
                    }
                  }
                />
            </div>
            <button className='text-[clamp(.8rem,1vmax,1rem)] bg-(--light-green) w-full text-(--white) p-[10px] rounded-[10px] cursor-pointer hover:opacity-[.7] font-bold'> Post </button>
        </article>
    </section>
  )
}

export default CreateJob