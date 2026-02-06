import Navbar from './Navbar'
import { useLocation } from 'react-router'

const Header = () => {
   const location = useLocation()

  return (
    <header className={`w-full sticky bg-(--white) p-[15px] border-b-[1px] border-b-(--light-green) top-0 rounded-[10px] h-[100px] z-[9] ${(location.pathname == "/auth/signup" || location.pathname == "/auth/signin") && "hidden"}`}>
        <Navbar />
    </header>
  )
}

export default Header