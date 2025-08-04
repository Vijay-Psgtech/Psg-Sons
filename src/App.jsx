// src/App.jsx
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from './components/Header';
import SideNavbar from './components/SideNavbar';


import Home from './sections/Home';
import Genesis from './sections/Genesis';
import Genesis2 from './sections/Genesis2';
import Legacy from './sections/Legacy';
import Legacy2 from './sections/Legacy2';
import Visionary from './sections/Visionary';
import Visionary2 from './sections/Visionary2';
import Brothers from './sections/Brothers';
import Brothers2 from './sections/Brothers2';
import FifthBrother from './sections/FifthBrother';
import FifthBrother2 from './sections/FifthBrother2';
import Rkguest from './sections/rkguest';
import Leading from './sections/Leading';

const anchors = [
  'home',
  'genesis',
  'genesis.2',
  'legacy',
  'legacy.2',
  'Visionary',
  'visionary.2',
  'brothers',
  'brothers.2',
  'fifth-brother',
  'fifth-brother.2',
  'rk',
  'leading-the-way',
  'edu-odyssey',
  'chronicles-of-excellence',
  'alumni',
  'visual-heritage',
  'contact'
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <>
      <Header />
      <SideNavbar activeSection={activeSection} />

      <ReactFullpage 
        anchors={anchors}
        navigation={false}
        scrollingSpeed={800}
        scrollOverflow={false}
        onLeave={(_, destination)=>{
          setActiveSection(anchors[destination.index]);
        }}
        render={()=>{
          return(
            <ReactFullpage.Wrapper>
              <Home />
              <Genesis />
              <Genesis2 />
              <Legacy />
              <Legacy2 />
              <Visionary />
              <Visionary2 />
              <Brothers />
              <Brothers2 />
              <FifthBrother />
              <FifthBrother2 />
              <Rkguest />
              <Leading />
            </ReactFullpage.Wrapper>
          )
        }}
      />

      
    </>
  );
}

export default App;
