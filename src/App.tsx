import { Header } from './components'
import { FindJobs } from './pages'
import { Routes, Route } from 'react-router'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <main className='w-full flex'>
      {/* sidebar */}
      <Routes>
        <Route path='/' index={true} element={<FindJobs />} />
      </Routes>
      </main>
    </>
  )
}

export default App
