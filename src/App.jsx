
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Component/Header'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Team from './Component/Team'
import Services from './Component/Services'
import Term from './Component/Term'


function App() {


  return (
    <>
      <Header />
      <Term/>
      <Home />
      <Team />
      <Services />
      <Contact />
    </>
  )
}

export default App
