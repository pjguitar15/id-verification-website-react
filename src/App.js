import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'
import Navbar from './components/Navbar';
// pages
import MainHome from './pages/Home Sections/MainHome';
import Footer from './components/Footer';
// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainHome />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
