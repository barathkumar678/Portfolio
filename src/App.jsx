import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="dot-grid-bg" />

      {/* ── Header ── */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo magnetic" data-hover="Home">
            barath<span className="logo-accent">.</span>
          </a>

          <nav className="nav-links">
            {['About', 'Skills', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link magnetic"
                data-hover={item}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="nav-cta magnetic" data-hover="Hire">
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      {/* ── Main ── */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-copy">
            © 2026 Barath Kumar P. Crafted with ✦ passion.
          </span>
          <div className="footer-links">
            <a href="mailto:barathkumarpandi@gmail.com" className="footer-link magnetic" data-hover="Email">Email</a>
            <a href="https://linkedin.com/in/barath-kumar-p-0051b229a" target="_blank" rel="noopener noreferrer" className="footer-link magnetic" data-hover="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
