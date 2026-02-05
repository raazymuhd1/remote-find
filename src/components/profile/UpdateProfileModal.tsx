import React from 'react'

interface IProps {
  showUpdate: boolean;
  updateProfile: (status: boolean) => void;
}

const UpdateProfileModal = ({ showUpdate, updateProfile }: IProps) => {
  return (
    <section 
    onClick={() => updateProfile(false)}
    className={`fixed bg-[red] flex flex-col inset-0 ${showUpdate ? "translate-x-[0px] opacity-[1] h-screen w-screen" : "translate-x-[-500px] opacity-[0] h-0 w-0"} transition-[opacity,transform,height,width,2s,ease-in-out] delay-200`}>
        <article 
          onClick={(e) => e.stopPropagation()}
          className='w-[clamp(30%,2vmax,40%)] h-max bg-(--white) rounded-[10px] p-[10px]'>
           <input type='text' placeholder='Recent Job' className='w-full p-[10px]' />
           <input type='text' placeholder='Qualification' className='w-full p-[10px]' />
           <input type='text' placeholder='Experience' className='w-full p-[10px]' />
           <input type='email' placeholder='email' className='w-full p-[10px]' />
        </article>
    </section>
  )
}

export default UpdateProfileModal