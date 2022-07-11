import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import { Footer, Hero, Nav, Security, TopFooter, Ways } from "components";


function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="Home page-hero fade small stagger ease-out-back">
        <Nav />
        <Hero />
        <Security />
        <Ways />
        <TopFooter />
        <Footer />
      </div>
    </XyzTransition>
  );
}

export default App;
