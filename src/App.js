import './App.css';
import './components/Header'
import Header from './components/Header';
import Whoami from './components/Whoami';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

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
    </>
  )
}