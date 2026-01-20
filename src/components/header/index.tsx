import Navbar from './Navbar'
import { useLocation } from 'react-router'

const Header = () => {
   const location = useLocation()

  return (
    <header className={`w-full sticky bg-(--white) p-[15px] border-[1px] border-( --border-col) top-0 h-[100px] z-[9] ${location.pathname == "/auth/signup" && "hidden"}`}>
        <Navbar />
    </header>
  )
}

export default Header