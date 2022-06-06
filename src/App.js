import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'
import Navbar from './components/Navbar';
// pages
import MainHome from './pages/Home Sections/MainHome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHome />
    </div>
  );
}

export default App;
