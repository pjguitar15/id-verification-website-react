import React, { useRef, useEffect } from 'react'
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
import PartnerProgram from './pages/partner-program/PartnerProgram';
import Contact from './pages/contact/Contact';

function App() {
  const regFormRef = useRef()
  const learnMoreRef = useRef()
  const startRef = useRef()
  useEffect(() => {
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <>
      <Router>
        <RegFormProvider>
          <Navbar startRef={startRef} regFormRef={regFormRef} />
          <Routes>
            <Route path='/' element={<MainHome learnMoreRef={learnMoreRef} regFormRef={regFormRef} />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/admin-login' element={<Login />} />
            <Route path='/purchase-verification' element={<ProcessPage />} />
            <Route path='/partner-program' element={<PartnerProgram />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </RegFormProvider>
      </Router>
    </>
  );
}

export default App;
