import React from 'react';
import './App.css';
import Header from './component/header/header';
import ArchivePage from './page/archives/archivePage';
import Textfield1 from './component/textfield1/textfield1';
import SocialMediaButtons from './component/SocialFollow/socialMediaLogo'; 
import Manifesto from './page/manifesto/manifesto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/tickets" element={<div>Tickets Page Content</div>} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/socialmedia" element={<SocialMediaButtons />} />
        <Route path="/textfield1" element={<Textfield1 />} />
      </Routes>
    </Router>
  );
}

export default App;


  