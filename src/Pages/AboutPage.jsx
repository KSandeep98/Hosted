// AboutPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OurMission from '../Component/OurMission';
import WeAre from '../Component/WeAre';
import WeOffer from '../Component/WeOffer';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay for DOM to render
      }
    }
  }, [location]);

  return (
    <div>
      <WeAre />
      <WeOffer />
      <OurMission />
    </div>
  );
};

export default AboutPage;
