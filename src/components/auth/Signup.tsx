import { google } from '../../assets'
import TextField from './TextField'

const Signup = () => {
  return (
    <section className='h-screen w-screen flex flex-col justify-center bg-(--light-white)'>
        <div className='flex flex-col gap-[1rem] auth_shadows lg:w-[30%] md:w-[50%] w-[70%] mx-auto min-h-[50%] bg-(--white) rounded-[1.3rem] p-[1.2rem]'>
            <article className='flex flex-col items-center gap-[1.3rem]'>
                <div className='flex flex-col items-center gap-[1rem] w-full'>
                    <h1 className='font-extrabold text-[clamp(1.5rem,2vmax,2rem)] text-(--light-green)'> RemoteFind </h1>
                    <h2 className='text-center text-[clamp(1.3rem,1.7vmax,1.7rem)] font-bold'> Get more opportunities </h2>
                </div>
                <div className='flex items-center rounded-[10px] bg-(--light-white) py-[5px] px-[10px] gap-[10px] cursor-pointer'>
                    <img src={google} alt="google-icon" className='w-[clamp(1.2rem,1.5vmax,1.5rem)] h-[clamp(1.2rem,1.5vmax,1.5rem)] object-cover' />
                    <strong className='text-[clamp(.8rem,1vmax,1rem)]'> Signup with google </strong>
                </div>

                <div className='flex w-full items-center'>
                    <div className='h-[1px] w-[40%] bg-(--grey)' />
                    <h4 className='text-[clamp(.8rem,1vmax,1rem)] whitespace-nowrap font-semibold text-(--grey)'> Or signup with email </h4>
                    <div className='h-[1px] w-[40%] bg-(--grey)' />
                </div>
            </article>

            {/* INPUTS */}
            <article className='w-full flex flex-col gap-[1.3rem]'>
                <TextField htmlFor='fullname' placeholder='Fullname' type="text" label='Fullname' />
                <TextField htmlFor='email' placeholder='Email Address' type="email" label='Email Address' />
                <TextField htmlFor='password' placeholder='Password' type="password" label='Password' />
            </article>

            <article className="w-full flex flex-col items-center gap-[.7rem]">
                <button className='font-semibold w-full py-[5px] px-[10px] rounded-[1rem] bg-(--light-green) text-(--white)'> Sign Up </button>
                <p className='underline italic text-(--grey) cursor-pointer text-[clamp(.6rem,.8vmax,.8rem)]'> Already have an account? Login instead! </p>
            </article>
        </div>
    </section>
  )
}

export default Signup