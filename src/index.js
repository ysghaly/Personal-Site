import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio';
import About from './pages/Resume';
import './css/App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="work" element={<Portfolio />} />
          <Route path="test" element={<Portfolio />} />
          <Route path="resume" element={<About skills={true} experience={true} education={true} />} />
          <Route path="resume/skills" element={<About skills={true} experience={false} education={false} />} />
          <Route path="resume/education" element={<About skills={false} experience={false} education={true} />} />
          <Route path="resume/experience" element={ <About skills={false} experience={true} education={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


