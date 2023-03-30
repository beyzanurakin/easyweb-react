import { Routes, Route, Navigate } from 'react-router-dom'
import ProSidebar from './pages/global/ProSidebar'
import Navbar from './pages/global/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './components/overview/Overview'
import IssueReport from './components/issueReport/IssueReport'
import All from './components/issueReport/All'
import Controls from './components/issueReport/Controls'
import Errors from './components/issueReport/Errors'
import Notifications from './components/issueReport/Notifications'
import Warnings from './components/issueReport/Warnings'
import ScannedPages from './components/scannedPages/ScannedPages'
import ScanComparison from './components/scanComparison/ScanComparison'
import Optimization from './pages/optimization/Optimization'
import General from './pages/optimization/General'
import Performance from './pages/optimization/Performance'
import Accessibility from './pages/optimization/Accessibility'
import BestApps from './pages/optimization/BestApps'
import Security from './pages/security/Security'
import Analytics from './pages/analytics/Analytics'
import Homepage from './pages/homepage/Homepage'

function App() {
  return (
    <div className='App'>
      <ProSidebar />
      <main className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate replace to='homepage' />} />
          <Route path='/homepage' element={<Homepage />} />

          <Route path='seo' element={<Dashboard />}>
            <Route path='/seo' element={<Navigate replace to='overview' />} />
            <Route path='overview' element={<Overview />}></Route>
            <Route path='issue-report' element={<IssueReport />}>
              <Route
                path='/seo/issue-report'
                element={<Navigate replace to='all' />}
              />
              <Route path='all' element={<All />}></Route>
              <Route path='errors' element={<Errors />}></Route>
              <Route path='warnings' element={<Warnings />}></Route>
              <Route path='notifys' element={<Notifications />}></Route>
              <Route path='controls' element={<Controls />}></Route>
            </Route>
            <Route path='scanned-pages' element={<ScannedPages />}>
              <Route path='all' element={<All />}></Route>
              <Route path='errors' element={<Errors />}></Route>
              <Route path='warnings' element={<Warnings />}></Route>
              <Route path='notifys' element={<Notifications />}></Route>
            </Route>
            <Route path='scan-comparison' element={<ScanComparison />}></Route>
          </Route>

          <Route path='optimization' element={<Optimization />}>
            <Route
              path='/optimization'
              element={<Navigate replace to='general' />}
            />
            <Route path='general' element={<General />}></Route>
            <Route path='performance' element={<Performance />}></Route>
            <Route path='accessibility' element={<Accessibility />}></Route>
            <Route path='best-apps' element={<BestApps />}></Route>
          </Route>
          <Route path='security' element={<Security />}></Route>
          <Route path='analytics' element={<Analytics />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
