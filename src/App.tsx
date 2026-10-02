import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <>
    <CustomCursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
