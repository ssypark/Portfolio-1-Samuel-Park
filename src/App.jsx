
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Layout from './components/Layout';
// import HTMLElements from './components/pages/HTMLElements';

function App() {


  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/starter" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
