import React from 'react';
import './App.css';
import Header from './component/header/header';
import ArchivePage from './page/archives/archivePage';
import Tickets from './page/tickets/tickets';
import Nowplaying from './page/intro/nowplaying'
import Textfield1 from './component/textfield1/textfield1';
import SocialMediaButtons from './component/SocialFollow/socialMediaLogo'; 
import Manifesto from './page/manifesto/manifesto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="pageWrapper">    
        <Header />
        <Routes>
          {/* <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="*" element={<div>404 Page Not Found</div>} /> */}
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/" element={<Manifesto />} />
          {/* <Route path="/socialmedia" element={<SocialMediaButtons />} />
          <Route path="/textfield1" element={<Textfield1 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


  