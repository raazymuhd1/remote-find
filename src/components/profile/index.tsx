import { useState } from "react"
import { Mail, Phone } from "lucide-react"

const userDetails = [
  { id: 1, title: "Recent Job", value: "Apple" },
  { id: 2, title: "Last Qualification", value: "B.Tech" },
  { id: 3, title: "Work Experience", value: "4 Years" },
]


const Profile = () => {
    const [showEditBtn, setShowEditBtn] = useState(false)

  return (
    <section 
        className='md:w-[80%] w-full grid md:grid-cols-2 grid-cols-1 mx-auto p-[2rem] '>
        {/* profile sidebar */}
        <aside className="flex w-[50%] md:w-[35%] flex-col sticky top-0 left-0">
           <article className="flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[5px]">
                 <img src="profile-img" alt="profile-img" className="rounded-[50%] object-cover w-[clamp(40px,2vmax,50px)] h-[clamp(40px,2vmax,50px)]" />
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
              <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex w-full gap-[10px] items-center">
                      <Mail className="w-[clamp(1.2rem,1.5vmax,1.5rem)] h-[clamp(1.3rem,1.5vmax,1.5rem)]" />
                      <p className="text-[clamp(.8rem,1vmax,1rem)]"> raazy.devs@gmail.com </p>
                  </div>
              </div>

              <div className="flex flex-col w-full">
                  
              </div>
           </article>
        </aside>

        {/* profile jobs */}
    </section>
  )
}

export default Profile