import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from './pages/home';
import Pricing from './pages/pricing';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Service from './pages/services';
import Layout from './pages/layout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
