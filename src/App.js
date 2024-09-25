import React from 'react';
import './App.css';
import Header from './component/header/header'; 
import Textfield1 from './component/textfield1/Textfield1';
import SocialMediaButtons from './component/SocialFollow/socialMediaLogo'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/socialmedia" element={<SocialMediaButtons />} />
        <Route path="/textfield1" element={<Textfield1 />} />
      </Routes>
    </Router>
  );
}

export default App;


  