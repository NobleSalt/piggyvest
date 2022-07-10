import Hero from 'components/Hero';
import Nav from 'components/Nav';
import Security from 'components/Security';
import Ways from 'components/Ways';

function App() {
  return (
    <div className="Home">
      <Nav />
      <Hero />
      <Security />
      <Ways />
    </div>
  );
}

export default App;
