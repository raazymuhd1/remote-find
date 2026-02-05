import React from 'react'

interface IProps {
  showUpdate: boolean;
  updateProfile: (status: boolean) => void;
}

const UpdateProfileModal = ({ showUpdate, updateProfile }: IProps) => {
  return (
    <section 
    onClick={() => updateProfile(false)}
    className={`fixed update_Profile_modals inset-0 ${showUpdate ? "translate-x-[0px] opacity-[1] h-screen w-screen" : "translate-x-[-500px] opacity-[0] h-0 w-0"} transition-[opacity,transform,height,width,2s,ease-in-out] delay-200`}>
        <article 
          onClick={(e) => e.stopPropagation()}
          className='w-[70%] md:w-[30%] mx-auto translate-y-[20rem] h-max bg-(--white) rounded-[20px] p-[1.4rem] flex flex-col gap-[1rem] items-center border-[1px] border-(--light-green) box_shadow'>
            <h2 className='text-[clamp(1rem,1.2vmax,1.2rem)] font-bold'> Update Profile </h2>
           <div className='flex flex-col gap-[1rem] w-full'>
              <input type='text' placeholder='Recent Job' className='input_field' />
              <input type='text' placeholder='Qualification' className='input_field' />
              <input type='text' placeholder='Experience' className='input_field' />
              <input type='email' placeholder='email' className='input_field' />
            </div>

              <button className='text-[clamp(.8rem,1vmax,1rem)] bg-(--light-green) w-full text-(--white) p-[10px] rounded-[10px] cursor-pointer hover:opacity-[.7] button_shadow'> Save </button>
        </article>
    </section>
  )
}

export default UpdateProfileModal