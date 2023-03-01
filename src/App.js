import { Routes, Route, Navigate } from 'react-router-dom';
import ProSidebar from './pages/global/ProSidebar';
import Navbar from './pages/global/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './components/overview/Overview';
import IssueReport from './components/issueReport/IssueReport';
import All from './components/issueReport/All';
import Controls from './components/issueReport/Controls';
import Errors from './components/issueReport/Errors';
import Notifications from './components/issueReport/Notifications';
import Warnings from './components/issueReport/Warnings';
import ScannedPages from './components/scannedPages/ScannedPages';
import ScanComparison from './components/scanComparison/ScanComparison';

function App() {
  return (
    <div className='App'>
      <ProSidebar />
      <main className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<Navigate replace to='overview' />} />
            <Route path='/overview' element={<Overview />}></Route>
            <Route path='issue-report' element={<IssueReport />}>
              <Route
                path='/issue-report'
                element={<Navigate replace to='all' />}
              />
              <Route path='all' element={<All />}></Route>
              <Route path='errors' element={<Errors />}></Route>
              <Route path='warnings' element={<Warnings />}></Route>
              <Route path='notifys' element={<Notifications />}></Route>
              <Route path='controls' element={<Controls />}></Route>
            </Route>
            <Route path='scanned-pages' element={<ScannedPages />}></Route>
            <Route path='scan-comparison' element={<ScanComparison />}></Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
