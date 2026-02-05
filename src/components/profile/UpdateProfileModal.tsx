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
          className='w-[70%] md:w-[30%] mx-auto translate-y-[25rem] h-max bg-(--white) rounded-[20px] p-[1.4rem] flex flex-col gap-[1rem] items-center border-[1px] border-(--light-green)'>
            <h2 className='text-[clamp(1rem,1.2vmax,1.2rem)] font-bold'> Update Profile </h2>
           <div className='flex flex-col gap-[1rem] w-full'>
              <input type='text' placeholder='Recent Job' className='w-full p-[10px] border-[1px] border-(--border-col) rounded-[10px] placeholder:text-[clamp(.6rem,.8vmax,.8rem)]' />
              <input type='text' placeholder='Qualification' className='w-full p-[10px] border-[1px] border-(--border-col) rounded-[10px] placeholder:text-[clamp(.6rem,.8vmax,.8rem)]' />
              <input type='text' placeholder='Experience' className='w-full p-[10px] border-[1px] border-(--border-col) rounded-[10px] placeholder:text-[clamp(.6rem,.8vmax,.8rem)]' />
              <input type='email' placeholder='email' className='w-full p-[10px] border-[1px] border-(--border-col) rounded-[10px] placeholder:text-[clamp(.6rem,.8vmax,.8rem)]' />
            </div>

              <button className='text-[clamp(.8rem,1vmax,1rem)] bg-(--light-green) w-full text-(--white) p-[10px] rounded-[10px]'> Save </button>
        </article>
    </section>
  )
}

export default UpdateProfileModal