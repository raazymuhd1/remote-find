import { useState } from "react"
import { links } from '../../constants'
import { Link } from 'react-router'
import { Bell, ChevronDown, Menu } from 'lucide-react'
import { profile } from '../../assets'
import { useLocation  } from 'react-router'

const Navbar = () => {
    const location = useLocation()
    const [showMobileMenu, setShowMobileMenu] = useState(false)


  return (
    <nav className='w-full h-full flex items-center justify-between'>
        <aside className=''>
            <h2 className='text-[clamp(1.4rem,2vmax,2rem)] text-(--light-green) font-extrabold'> RemoteFind </h2>
        </aside>

        {/* links (desktop size) */}
        <aside className='w-[60%] flex items-center justify-between'>
            <ul className='md:flex hidden gap-[20px]'>
                { links.map(link => (
                    <Link to={link.url} 
                        className={`text-[clamp(1rem,1.1vmax,1.2rem)] py-[5px] px-[10px] ${link.url == location?.pathname && "bg-(--light-green) text-(--white) rounded-[10px]"} hover:text-(--white) hover:rounded-[10px] transition-[all,1s,ease-in-out] hover:bg-(--light-green) font-semibold`}>
                        { link.title }
                    </Link>
                )) }
            </ul>

            <aside className='md:flex hidden gap-[10px] items-center'>
                <Bell className='w-[clamp(1.3rem,2vmax,2rem)] h-[clamp(1.3rem,2vmax,2rem)] ' />
                <div className='flex items-center gap-[5px]'>
                    <img src={profile} alt="profile" className='object-cover w-[clamp(1.2rem,2vmax,2rem)] h-[clamp(1.2rem,2vmax,2rem)] rounded-[50%]' />
                    <ChevronDown className='w-[clamp(1.3rem,2vmax,2rem)] h-[clamp(1.3rem,2vmax,2rem)] ' />
                </div>
            </aside>

        </aside>

        <div 
          onClick={() => setShowMobileMenu(true)}
          className='w-max md:hidden p-[10px] bg-(--light-green) flex justify-center cursor-pointer sticky top-0 rounded-[.5rem]'>
          <Menu className='w-[clamp(1.3rem,1.8vmax,1.8rem)] h-[clamp(1.3rem,1.8vmax,1.8rem)] text-(--white)' />
        </div>
        
        {/* mobile screen links */}
        <div 
             onClick={() => setShowMobileMenu(false)}
            className={`${showMobileMenu ? "opacity-[1] translate-y-[-0] mobile_links" : "translate-y-[100vh] opacity-[0]"} transition-[transform,opacity,2s,ease-in-out] delay-200 h-screen w-screen w-full fixed inset-0 z-[9]`}>
            <aside 
                onClick={(e) => e.stopPropagation()}
                className='w-full h-[30%] bg-(--white) flex gap-[1rem] flex-col-reverse items-center justify-center rounded-bl-[10px] rounded-br-[10px]'>
                <ul className='flex w-full flex-col items-center gap-[20px]'>
                    { links.map(link => (
                        <Link to={link.url} 
                            className={`text-[clamp(1rem,1.1vmax,1.2rem)] w-full py-[5px] px-[10px] ${link.url == location?.pathname && "bg-(--light-green) text-(--white) rounded-[10px]"} hover:text-(--white) hover:rounded-[10px] transition-[all,1s,ease-in-out] hover:bg-(--light-green) font-semibold`}>
                            { link.title }
                        </Link>
                    )) }
                </ul>

                <aside className='flex gap-[10px] items-center'>
                    <Bell className='w-[clamp(1.7rem,2vmax,2rem)] h-[clamp(1.7rem,2vmax,2rem)] ' />
                    <div className='flex items-center gap-[5px]'>
                        <img src={profile} alt="profile" className='object-cover w-[clamp(2rem,2vmax,2rem)] h-[clamp(2rem,2vmax,2rem)] rounded-[50%]' />
                        <ChevronDown className='w-[clamp(1.7rem,2vmax,2rem)] h-[clamp(1.7rem,2vmax,2rem)] ' />
                    </div>
                </aside>
            </aside>
        </div>
    </nav>
  )
}

export default Navbar