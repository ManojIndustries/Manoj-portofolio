import './App.css';
import './components/Header'
import Header from './components/Header';
import Whoami from './components/Whoami';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Skills from './components/Skills';
import Conatctme from './components/Conatctme';

export default function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>

      <div data-aos="fade-left">
        <Header />
      </div>
      <section>
        <div data-aos="fade-right">

          <Whoami />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,154.7C672,181,768,203,864,224C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      <Skills />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,144C672,128,768,128,864,138.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <Conatctme />
    </>
  )
}