import { BrowserRouter } from "react-router-dom";

import { About, Contact, Skills, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      {/* <Tech /> */}
      {/* <Works /> */}
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
