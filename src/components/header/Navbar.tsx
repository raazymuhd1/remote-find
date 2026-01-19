import { links } from '../../constants'
import { Link } from 'react-router'
import { Bell, ChevronDown } from 'lucide-react'
import { profile } from '../../assets'
import { useLocation  } from 'react-router'

const Navbar = () => {
    const location = useLocation()


  return (
    <nav className='w-full h-full flex items-center justify-between'>
        <aside className=''>
            <h2 className='text-[clamp(1rem,2vmax,2rem)] text-(--bright-green) font-extrabold'> RemoteFind </h2>
        </aside>

        {/* links */}
        <ul className='flex gap-[20px]'>
            { links.map(link => (
                <Link to={link.url} 
                    className={`text-[clamp(1rem,1.1vmax,1.2rem)] py-[5px] px-[10px] ${link.url == location?.pathname && "bg-(--bright-green) text-(--white) rounded-[10px]"} hover:text-(--white) hover:rounded-[10px] transition-[all,1s,ease-in-out] hover:bg-(--bright-green) font-semibold`}>
                    { link.title }
                </Link>
            )) }
        </ul>

        <aside className='flex gap-[10px] items-center'>
            <Bell className='w-[clamp(1.3rem,2vmax,2rem)] h-[clamp(1.3rem,2vmax,2rem)] ' />
            <div className='flex items-center gap-[5px]'>
                <img src={profile} alt="profile" className='object-cover w-[clamp(1.2rem,2vmax,2rem)] h-[clamp(1.2rem,2vmax,2rem)] rounded-[50%]' />
                <ChevronDown className='w-[clamp(1.3rem,2vmax,2rem)] h-[clamp(1.3rem,2vmax,2rem)] ' />
            </div>
        </aside>
    </nav>
  )
}

export default Navbar