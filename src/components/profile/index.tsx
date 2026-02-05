import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { profile } from "../../assets"
import UpdateProfileModal from "./UpdateProfileModal"

const details = [
  { id: 1, title: "Recent Job", value: "Apple" },
  { id: 2, title: "Last Qualification", value: "B.Tech" },
  { id: 3, title: "Work Experience", value: "4 Years" },
]

const jobTypes = [
  { id: 1, title: "Saved Jobs", isActive: true, total: 0 },
  { id: 2, title: "Applied Jobs", isActive: false, total: 0 },
]

const Profile = () => {
    const [showEditBtn, setShowEditBtn] = useState(false)
    const [userDetails, ] = useState(details)
    const [jobTabs,] = useState(jobTypes)
    const [showProfileUpdate, updateProfile] = useState(false)

  return (
   <>
      <section 
         className='md:w-[80%] h-[90vh] w-full flex md:flex-row flex-col gap-[2rem] mx-auto p-[2rem] '>
         {/* profile sidebar */}
         <aside className="flex w-full md:w-[30%] p-[.8rem] bg-(--white) rounded-[15px] gap-[1rem] flex-col sticky top-0 left-0 hover:border-(--light-green) border-[1px] border-(--white) transition-[border,1s,ease-in-out]">
            <article className="w-full flex flex-col gap-[1rem]">
               <div className="flex flex-col gap-[5px]">
                  <img src={profile} alt="profile-img" className="rounded-[50%] object-cover w-[clamp(50px,2vmax,60px)] h-[clamp(50px,2vmax,60px)]" />
                  <h2 className="font-bold text-[clamp(1rem,1.2vmax,1.2rem)]"> Raazy Dev </h2>
                  <p className="text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Jakarta, Indonesia </p>
               </div>

               {/* user details */}
               <div className="w-full flex flex-col gap-[5px]">
                  { userDetails.map(detail => (
                     <div key={detail.id} className="flex items-center gap-[1rem] justify-between w-full">
                        <p className="text-[clamp(.8rem,1vmax,1rem)] whitespace-nowrap text-(--grey)"> { detail.title } </p>
                        <aside 
                           onMouseEnter={() => setShowEditBtn(true)}
                           onMouseLeave={() => setShowEditBtn(false)}
                           className={`w-[50%] flex items-center gap-[.6rem]`}>
                           <strong className="text-[clamp(.8rem,1vmax,1rem)]"> {detail.value} </strong>
                           <input type="text" className={`hidden p-[8px] rounded-[5px] w-full`} />
                           <h4 className={`text-[clamp(.8rem,1vmax,1rem)] cursor-pointer ${showEditBtn ? "opacity-[1]" : "opacity-[0]"}`}> Edit </h4>
                        </aside>
                     </div>
                  )) }
               </div>

               {/* email & phone */}
               <aside className="w-full flex flex-col gap-[5px]">
                     <div className="flex w-full gap-[10px] items-center">
                        <Mail className="w-[clamp(1.2rem,1.5vmax,1.5rem)] h-[clamp(1.3rem,1.5vmax,1.5rem)]" />
                        <p className="text-[clamp(.8rem,1vmax,1rem)]"> raazy.devs@gmail.com </p>
                     </div>
               </aside>
               
               {/* buttons */}
               <aside className="flex gap-[.6rem] w-full">
                     <button 
                        onClick={() => updateProfile(true)}
                        className="px-[10px] py-[3px] rounded-[10px] md:w-[150px] w-full bg-(--light-green) font-semibold text-(--white) cursor-pointer hover:opacity-[.7] transition-[opacity,1s,ease-in-out]"> Update </button>
                     <button className="px-[10px] py-[3px] rounded-[10px] md:w-[150px] w-full bg-(--light-green) font-semibold text-(--white) cursor-pointer hover:opacity-[.7] transition-[opacity,1s,ease-in-out]"> Upload Resume </button>
               </aside>

            </article>
               {/* applied & saved jobs */}
               <aside className="flex w-full justify-center md:flex-col flex-row gap-[.6rem] mt-[1.5rem]">
                  { jobTabs.map(type => (
                     <h4 className={`text-[clamp(.8rem,1vmax,1rem)] hover:bg-(--light-green) cursor-pointer hover:text-(--white) rounded-[5px] p-[10px] font-semibold ${type.isActive && "bg-(--light-green) text-(--white)"}`}> {type.title} ({type.total}) </h4>
                  )) }
               </aside>
         </aside>

         {/* profile jobs */}
         <aside className="w-full flex flex-col gap-[1.4rem] md:w-[70%] p-[2rem] bg-(--white) overflow-x-auto rounded-[15px] md:h-full md:mt-0 mt-[.5rem] h-[30rem] hover:border-(--light-green) border-[1px] border-(--white) transition-[border,1s,ease-in-out]">
               <div className="flex w-full hover:translate-y-[-2px] transition-[all,1s,ease-in-out] cursor-pointer flex-col gap-[1rem] border-[1px] border-(--border-col) p-[.5rem] bg-(--light-white) rounded-[15px] hover:border-(--light-green)">
               {/* top detail */}
                  <div className="flex w-full justify-between">
                     <aside className="flex flex-col">
                        <h2 className="font-bold text-[clamp(1rem,1.2vmax,1.2rem)]"> Frontend Developer </h2>
                        <div className="flex items-center gap-[5px]">
                           <h4 className="font-semibold text-[clamp(.8rem,1vmax,1rem)]"> Apple </h4>
                           <p className="text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Jakarta, Indonesia </p>
                        </div>
                     </aside>

                     <p className="text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Applied 12 day(s) ago </p>
                  </div>

                  <div className="flex items-center w-full justify-between">
                     <p className="w-[70%] text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam tenetur sequi, id minima illo cum soluta itaque placeat! Id itaque nam a doloribus iusto tenetur eaque sed sequi nulla. </p>
                     <strong className="bg-(--light-green) text-(--white) text-[clamp(.6rem,8vmax,.8rem)] p-[3px] rounded-[5px] cursor-pointer"> Read More </strong>
                  </div>
               </div>

               <div className="flex w-full hover:translate-y-[-2px] transition-[all,1s,ease-in-out] cursor-pointer flex-col gap-[1rem] border-[1px] border-(--border-col) p-[.5rem] bg-(--light-white) rounded-[15px] hover:border-(--light-green)">
               {/* top detail */}
                  <div className="flex w-full justify-between">
                     <aside className="flex flex-col">
                        <h2 className="font-bold text-[clamp(1rem,1.2vmax,1.2rem)]"> Blockchain Developer </h2>
                        <div className="flex items-center gap-[5px]">
                           <h4 className="font-semibold text-[clamp(.8rem,1vmax,1rem)]"> Alchemy </h4>
                           <p className="text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Boston, Usa </p>
                        </div>
                     </aside>

                     <p className="text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Applied 12 day(s) ago </p>
                  </div>

                  <div className="flex items-center w-full justify-between">
                     <p className="w-[70%] text-[clamp(.8rem,1vmax,1rem)] text-(--grey)"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam tenetur sequi, id minima illo cum soluta itaque placeat! Id itaque nam a doloribus iusto tenetur eaque sed sequi nulla. </p>
                     <strong className="bg-(--light-green) text-(--white) text-[clamp(.6rem,8vmax,.8rem)] p-[3px] rounded-[5px] cursor-pointer"> Read More </strong>
                  </div>
               </div>
         </aside>
      </section>

      <UpdateProfileModal 
         { 
            ...{
               showUpdate: showProfileUpdate,
               updateProfile
            }
          }
      />
   </>
  )
}

export default Profile