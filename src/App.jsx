
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';


// Page Imports
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Layout from './components/Layout';

import ScrollToTop from './components/animations/ScrollToTop';
//React Burger Menu (yum)
import './css/Menu.css'
import { bubble as Menu } from 'react-burger-menu'
//https://thednp.github.io/kute.js/ for animations
// Lottie JS for AE to JS
function App() {
  const lenis = useLenis(({scroll}) => {

  })

  return (
    <ReactLenis root>
    <BrowserRouter>
    <ScrollToTop />
    <div id="outer-container">
      {/* Burger Menu */}
    <Menu className='block md:hidden' pageWrapId="page-wrapper" outerContainerId="outer-container" right>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/work">Work</Link>
    </Menu>

      <main className="page-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="/starter" element={<Home />}></Route> */}
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
