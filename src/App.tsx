import { About } from './components/About';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      
      {/* Har section ke beech proper vertical gap/spacing ke sath order set kiya gaya hai */}
      <main className="flex flex-col gap-24 sm:gap-32 overflow-hidden">
        <Hero />
        <Showcase />
        <Testimonials />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;