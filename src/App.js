import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css'
import './App.css'
import Navbar from './components/Navbar';
// pages
import MainHome from './pages/Home Sections/MainHome';
import Footer from './components/Footer';
import AdminPanel from './pages/admin/AdminPanel';
import Login from './pages/admin/Login'
import ProcessPage from './pages/process/ProcessPage'
// context 
import { RegFormProvider } from './context/RegFormProvider';
// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const regFormRef = useRef()
  const learnMoreRef = useRef()
  return (
    <>
      <Router>
        <RegFormProvider>
          <Navbar regFormRef={regFormRef} />
          <Routes>
            <Route path='/' element={<MainHome learnMoreRef={learnMoreRef} regFormRef={regFormRef} />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/admin-login' element={<Login />} />
            <Route path='/payment' element={<ProcessPage />} />
          </Routes>
          <Footer />
        </RegFormProvider>
      </Router>
    </>
  );
}

export default App;
