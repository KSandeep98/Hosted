
import AboutUs from '../Component/AboutUs'
import Home from '../Component/Home'
import Partners from '../Component/Partners'
import ProjectSection from '../Component/ProjectSection'
import Services from '../Component/Services'
import ContactForm from '../Component/ContactForm'
import '../App.css'
import Newsletter from '../Component/Newsletter'

const HomePage = () => {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Services/>
      <ProjectSection/>
      <Partners/>
      <ContactForm/>
      <Newsletter/>
    </div>
  )
}

export default HomePage
