import { Header, Sidebar } from './components'
import { FindJobs } from './pages'
import { Routes, Route } from 'react-router'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <main className='w-full h-[90vh] flex'>
        {/* sidebar */}
        <Sidebar />
        <Routes>
          <Route path='/' index={true} element={<FindJobs />} />
        </Routes>

        {/*  */}
      </main>
    </>
  )
}

export default App
