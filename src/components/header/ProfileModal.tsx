import { Link } from "react-router"

interface IProps {
    showProfile: boolean;
}

const ProfileModal = ({showProfile}: IProps) => {
  return (
    <section className={`absolute top-[2rem] min-w-[200px] min-h-[200px] rounded-[10px] p-[.8rem] bg-(--white) ${showProfile ? "block" : "hidden"}`}>
        <Link to="/profile"> Profile </Link>
    </section>
  )
}

export default ProfileModal