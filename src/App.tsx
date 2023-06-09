import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/sessionFooter/footer/Footer';
import InviteToSpeak from './components/sessionInviteSpeak/InviteToSpeak';
import BuildFaster from './components/sessionBuildFaster/BuildFaster';
import SuportChakra from './components/sessionSupportChakra/supportChakraCorps/SuportChakra';

function App() {
  return (
    <div className='container'>
      <SuportChakra />
      <BuildFaster />
      <InviteToSpeak />
      <Footer />
    </div>
  );
}

export default App;
