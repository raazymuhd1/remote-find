import { Link } from "react-router"
import { X } from "lucide-react";

interface IProps {
    showProfile: boolean;
    setShowProfile: (status: boolean) => void;
}

const ProfileModal = ({showProfile, setShowProfile}: IProps) => {
  return (
    <section 
      onMouseEnter={(e) => e.stopPropagation()}
      className={`absolute rounded-[10px] p-[.8rem] bg-(--white) transition-[display,position,2s,ease-in-out] top-[2rem] ${showProfile ? "w-[150px] h-[150px] opacity-[1] translate-y-[0] translate-x-[-5rem]" : "opacity-[0] h-0 w-0 translate-y-[-5rem]"} box_shadow`}>
        <div className={`${showProfile ? "w-full h-full block" : "w-0 h-0 hidden"} flex flex-col items-center gap-[1rem] transition-[height,width,display,2s,ease-in-out]`}>
            <X className="w-[clamp(1rem,1.4vmax,1.4rem)] h-[clamp(1rem,1.4vmax,1.4rem)]" />
            {/* links */}
            <Link
                onClick={() => setShowProfile(false)} 
                to="/user/profile" 
                className="font-semibold p-[5px] hover:bg-(--light-green) text-[clamp(.7rem,1vmax,1rem)] hover:text-(--white) border-[1px] text-center border-(--light-green) rounded-[10px]  w-full "> 
                Profile 
            </Link>
            <Link
                onClick={() => setShowProfile(false)} 
                to="/auth/signin" 
                className="font-semibold p-[5px] hover:bg-(--light-green) text-[clamp(.7rem,1vmax,1rem)] hover:text-(--white) border-[1px] text-center border-(--light-green) rounded-[10px]  w-full "> 
                Logout 
            </Link>
        </div>
    </section>
  )
}

export default ProfileModal