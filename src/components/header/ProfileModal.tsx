import { Link } from "react-router"
import { X } from "lucide-react";

interface IProps {
    showProfile: boolean;
    setShowProfile: (status: boolean) => void;
}

const ProfileModal = ({showProfile, setShowProfile}: IProps) => {
  return (
    <section className={`absolute w-[150px] h-[150px] rounded-[10px] p-[.8rem] bg-(--white) transition-[display,position,2s,ease-in-out] flex top-[2rem] flex-col items-center gap-[1rem] ${showProfile ? "w-[150px] h-[150px] opacity-[1] translate-x-[-5rem]" : "h-0 w-0 translate-x-[5rem]"}`}>
        <X className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)]" />
        {/* links */}
        <Link
            onClick={() => setShowProfile(false)} 
            to="/user/profile" 
            className="font-semibold p-[5px] hover:bg-(--light-green) text-[clamp(.7rem,1vmax,1rem)] hover:text-(--white) border-[1px] text-center border-(--light-green) rounded-[10px]  w-full"> 
            Profile 
        </Link>
    </section>
  )
}

export default ProfileModal