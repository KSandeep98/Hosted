
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Term from './Component/Term'
import HomePage from './Pages/HomePage';
import Header from './Component/Header'
import Footer from './Component/Footer';
import AboutPage from './Pages/AboutPage';
import ScrollToTop from "./Component/ScrollToTop";
// import  ContactPage  from './Pages/ContactPage';

function App() {


  return (
  
    <Router>
       <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Term" element={<Term />} />
        {/* <Route path="/Contact" element={<ContactPage/>}/> */}
        
      </Routes>
      <Footer/>
    </Router>
      
  )
}

export default App
