import { useState } from 'react'
import { Header, Sidebar } from './components'
import { FindJobs, UploadJobs, Auth, UserProfile } from './pages'
import { ListFilterPlus } from 'lucide-react'
import { Routes, Route, useLocation } from 'react-router'
import './App.scss'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()


  return (
    <>
      <Header />
      <main className='w-full h-[90vh] flex md:flex-row flex-col'>
        {/* sidebar */}
        <Sidebar isMobileScreen={false} />
        {/* sidebar triggers on mobile screen */}
        <div 
          onClick={() => setShowSidebar(true)}
          className={`w-full md:hidden p-[10px] filter_triggers flex justify-center cursor-pointer sticky top-0 ${(location.pathname == "/auth/signin" || location.pathname == "/auth/signup" || location.pathname == "/user/profile") && "hidden"}`}>
          <ListFilterPlus className='w-[clamp(1.3rem,1.8vmax,1.8rem)] h-[clamp(1.3rem,1.8vmax,1.8rem)]' />
        </div>

        {/* mobile sidebar */}
        <aside 
          onClick={() => setShowSidebar(false)}
          className={`w-full fixed left-0 bottom-0 ${showSidebar ? "opacity-[1] rounded-[10px] h-[90vh] sidebar_mobile w-screen" : "w-0 h-0 opacity-[0]"}`}>
           <Sidebar isMobileScreen={true} />
        </aside>

        <Routes>
          <Route path='/auth/*' element={<Auth />} />
          {/* <Route path='/auth/signin' element={<Auth />} /> */}
          <Route path='/' index={true} element={<FindJobs />} />
          <Route path='/upload-jobs' element={<UploadJobs />} />
          <Route path='/user/profile' element={<UserProfile />} />
        </Routes>

        {/*  */}
      </main>
    </>
  )
}

export default App
