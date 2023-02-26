import { Routes, Route } from 'react-router-dom'
import ProSidebar from './pages/global/ProSidebar'
import Navbar from './pages/global/Navbar'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div className='App'>
      <ProSidebar />
      <main className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
