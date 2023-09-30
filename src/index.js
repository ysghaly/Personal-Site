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
          <Route path="my-portfolio" element={<Portfolio />} />
          <Route path="resume" element={<About skills={true} experience={true} education={true} certificates={true} />} />
          <Route path="resume/skills" element={<About header={"hidden"}  skills={true} experience={false} education={false} />} certificates={false} />
          <Route path="resume/education" element={<About header={"hidden"}  skills={false} experience={false} education={true} certificates={false} />} />
          <Route path="resume/experience" element={ <About header={"hidden"}  skills={false} experience={true} education={false} certificates={false} />} />
          <Route path="resume/certificates" element={ <About header={"hidden"}  skills={false} experience={false} education={false} certificates={true} />} />
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


