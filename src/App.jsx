
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Layout from './components/Layout';
//React Burger Menu (yum)
// import 'react-burger-menu/lib/styles.css';
import './css/Menu.css'
import { slide as Menu } from 'react-burger-menu'

function App() {


  return (
    <BrowserRouter>
    <div id="outer-container">
      {/* Burger Menu */}
    <Menu className='block md:hidden' pageWrapId="page-wrapper" outerContainerId="outer-container">
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

  )
}

export default App
