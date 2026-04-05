import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const links = [
  { icon: <Mail size={18} />, label: 'Email', value: 'barathkumarpandi@gmail.com', href: 'mailto:barathkumarpandi@gmail.com', color: 'purple' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 6374026811', href: 'tel:+916374026811', color: 'cyan' },
  { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'barath-kumar-p', href: 'https://linkedin.com/in/barath-kumar-p-0051b229a', color: 'emerald' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Madurai, Tamilnadu', href: null, color: 'rose' },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll('.reveal');
      gsap.fromTo(items,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
          y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="container contact-section" id="contact">
      <div className="section-label reveal">
        <span className="section-label-dot" /> Get in Touch
      </div>

      <div className="contact-layout">
        {/* Left */}
        <div>
          <h2 className="contact-big-text reveal">
            Let's build<br />
            something <span className="accent">great</span><br />
            together.
          </h2>
          <p className="contact-desc reveal">
            I'm always excited to collaborate on new projects. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-links-list">
            {links.map((link, i) => {
              const Tag = link.href ? 'a' : 'div';
              const props = link.href
                ? { href: link.href, target: link.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                : {};
              return (
                <Tag key={i} className="contact-link-item reveal magnetic" data-hover={link.label} {...props}>
                  <div className={`contact-link-icon ${link.color}`}>{link.icon}</div>
                  <div>
                    <div className="contact-link-info-label">{link.label}</div>
                    <div className="contact-link-info-value">{link.value}</div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Right – Form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.target);
            const subject = encodeURIComponent(`Portfolio Contact: ${fd.get('name')}`);
            const body = encodeURIComponent(fd.get('message'));
            window.open(`mailto:barathkumarpandi@gmail.com?subject=${subject}&body=${body}`);
          }}
        >
          <div className="form-field reveal">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="form-field reveal">
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-field reveal">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." required rows={5} />
          </div>
          <div className="form-submit reveal">
            <button type="submit" className="btn-glow primary magnetic" data-hover="Send">
              <Send size={15} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
