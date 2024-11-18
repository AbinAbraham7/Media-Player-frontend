import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


import Landing from './pages/Landing';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Watchhistory" element={<Watchhistory />} />
          
        </Routes>
       <Footer/>
     
    </div>
  );
}

export default App;
