import Hero from 'components/Hero';
import Nav from 'components/Nav';
import Security from 'components/Security';
import Ways from 'components/Ways';
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";


function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="Home page-hero fade small stagger ease-out-back">
        <Nav />
        <Hero />
        <Security />
        <Ways />
      </div>
    </XyzTransition>
  );
}

export default App;
