import React from 'React'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from 'header'
import Textfiled1 from 'textfield1'
import SocialMediaButtons from './SocialMediaButtons'; // Importiere die Buttons

function app() {
    return (
      <BrowserRouter>
      <Routes>
                <h1>Willkommen auf meiner Homepage!</h1>
                <Route path="/header" element={<Header />} />
          <Route path="/socialmedia" element={<SocialMediaButtons />} />
          <Route path="/textfield1" element={<Textfiled1 />} />
          <Header />
          <SocialMediaButtons />
          <Textfiled1 />
                </Routes>
                </BrowserRouter>
  );
}
export default app;