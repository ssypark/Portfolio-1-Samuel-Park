import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';

// Page Imports
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Gallery from "./components/pages/Gallery";
import Layout from './components/Layout';
import SalmonSanctuary from './components/pages/projects/SalmonSanctuary';
import Amalgm from './components/pages/projects/Amalgm';
import InteractiveDocument from './components/pages/projects/InteractiveDocument';
import FlyDex from './components/pages/projects/FlyDex';
import IntroBumper from './components/pages/projects/IntroBumper';

// Animation Imports
import ScrollToTop from './components/animations/ScrollToTop';



function App() {
  const lenis = useLenis(({ scroll }) => {
  })

  return (
    // Lenis is used to have a smoother scrolling experience
    <ReactLenis root>
      {/* The Browser Router is used to navigate between different routes */}
      <BrowserRouter>
        {/* The ScrollToTop component is used to scroll to the top of the page when a new route is loaded (see ScrollToTop.js) */}
        <ScrollToTop />
        <div id="outer-container">

          {/* page-wrapper is necessary for the burger menu. All the content goes in here */}
          <main className="page-wrapper">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                {/* <Route path="/starter" element={<Home />}></Route> may be used later for a onboarding/loading page? */}
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/salmon-sanctuary" element={<SalmonSanctuary />} />
                <Route path="/work/amalgm-brand-book" element={<Amalgm />} />
                <Route path="/work/interactive-document" element={<InteractiveDocument />} />
                <Route path="/work/flydex-app" element={<FlyDex />} />
                <Route path="/work/intro-bumper-video" element={<IntroBumper />} />
                <Route path="/art" element={<Gallery />} />
              </Route>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App

// Author Info:
// Name: Samuel Park
// Student ID: A00964543
// Class ID: MDIA 3294 Fall 2024

//Personal notes:
// https://thednp.github.io/kute.js/ for animations
// Lottie JS for AE to JS