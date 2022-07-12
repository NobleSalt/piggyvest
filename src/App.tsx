import "animate.css/animate.min.css";
import { Footer, Hero, Invest, Nav, Saver, Security, Testimonials, TopFooter, Ways } from "components";


function App() {
  return (
    <div className="Home page-hero fade small stagger ease-out-back animate__animated">
      <div className="Home-rect"></div>
      <Nav />
      <Hero />
      <Security />
      <Ways />
      <Invest />
      <Saver />
      <Testimonials />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default App;
