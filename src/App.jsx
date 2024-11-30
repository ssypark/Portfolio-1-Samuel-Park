import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';

// Page Imports
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Layout from './components/Layout';

// Animation Imports
import ScrollToTop from './components/animations/ScrollToTop';

//React Burger Menu (yum)
import './css/Menu.css'
import { bubble as Menu } from 'react-burger-menu'

function App() {
  const lenis = useLenis(({scroll}) => {
  })

  return (
    // Lenis is used to have a smoother scrolling experience
    <ReactLenis root>
    {/* The Browser Router is used to navigate between different routes */}
    <BrowserRouter> 
    {/* The ScrollToTop component is used to scroll to the top of the page when a new route is loaded (see ScrollToTop.js) */}
    <ScrollToTop />
    <div id="outer-container">
    {/* Burger Menu */}
    <Menu className='block md:hidden' pageWrapId="page-wrapper" outerContainerId="outer-container" right>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/work">Work</Link>
    </Menu>
      {/* page-wrapper is necessary for the burger menu. All the content goes in here */}
      <main className="page-wrapper"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="/starter" element={<Home />}></Route> may be used later for a onboarding/loading page? */} 
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
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