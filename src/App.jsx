import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  Monitor,
  Zap,
  Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.to('.hero-title-part', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      })
      .to('.hero-sub', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .to('.hero-visual', {
        opacity: 0.4,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      }, '-=1');

      // Scroll Animations
      gsap.utils.toArray('.reveal-up').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          }
        );
      });

      // Horizontal Scroll / Feature Cards
      gsap.to('.feature-card', {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Background Parallax
      gsap.to('.bg-artifact', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        },
        y: 200,
        rotate: 45
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-accent selection:text-background">
      <div className="noise-overlay" />
      
      {/* Background Decorative Artifacts */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-artifact absolute -top-[10%] -right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full blur-3xl opacity-20" />
        <div className="bg-artifact absolute top-[60%] -left-[10%] w-[400px] h-[400px] border border-accent/10 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-display font-bold tracking-tighter">CYPHR.</div>
        <div className="hidden md:flex space-x-12 text-sm font-medium uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">Protocol</a>
          <a href="#contact" className="hover:text-accent transition-colors">Dialogue</a>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <main className="relative z-10">
        {/* Arrival: Hero Section */}
        <section className="h-screen flex flex-col justify-center px-6 md:px-24">
          <div className="max-w-7xl w-full mx-auto">
            <h1 className="text-7xl md:text-[12rem] font-display font-black leading-[0.85] tracking-tighter uppercase overflow-hidden">
              <span className="block hero-title-part translate-y-full opacity-0">Design</span>
              <span className="block hero-title-part translate-y-full opacity-0 text-outline text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>As A</span>
              <span className="block hero-title-part translate-y-full opacity-0 text-accent">Protocol.</span>
            </h1>
            
            <div className="mt-12 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="hero-sub opacity-0 translate-y-8 text-xl md:text-3xl font-light max-w-2xl leading-tight text-white/60">
                Architecting digital experiences through the lens of absolute minimalism and structural precision.
              </p>
              
              <div className="hero-sub opacity-0 translate-y-8 flex flex-col space-y-4">
                <button className="btn-primary flex items-center group">
                  Initiate Protocol
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 text-center md:text-left">
                  Scroll to decrypt
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Proof: Features */}
        <section id="work" className="py-32 px-6 md:px-24 bg-obsidian-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
              <h2 className="text-4xl md:text-7xl font-black uppercase reveal-up">The Proof.</h2>
              <p className="text-white/40 max-w-sm reveal-up uppercase tracking-widest text-xs leading-loose">
                01 — Systematic Execution<br />
                02 — Cognitive Clarity<br />
                03 — Material Integrity
              </p>
            </div>

            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Layers />, title: "Precision Layering", desc: "Every pixel is placed with architectural intent, ensuring depth without noise." },
                { icon: <Cpu />, title: "Logic Driven UI", desc: "Interactions that follow physical laws, creating a sense of weight and momentum." },
                { icon: <Monitor />, title: "Adaptive Optics", desc: "Fluid responsiveness that preserves the editorial hierarchy across any device." },
                { icon: <Zap />, title: "Kinetic Energy", desc: "Animations that communicate purpose, guiding attention with deliberate speed." },
                { icon: <Globe />, title: "Unified Protocol", desc: "A singular design system that scales from micro-interactions to global architectures." },
                { icon: <Shield />, title: "Structural Trust", desc: "Uncompromising quality that commands authority and professional presence." },
              ].map((item, i) => (
                <div key={i} className="feature-card opacity-0 translate-y-24 glass-card p-12 flex flex-col h-full group hover:border-accent/40 transition-all duration-500">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                    {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Philosophy: Manifesto */}
        <section className="py-64 px-6 md:px-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.4em] mb-12 reveal-up">Manifesto 01</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter reveal-up leading-[0.9]">
              Less is not <br />
              <span className="text-accent italic font-light">Nothing.</span><br />
              Less is <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Intense.</span>
            </h2>
            <div className="mt-24 max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed reveal-up">
              We believe in the power of restraint. By stripping away the ornamental, we expose the essence of your brand, allowing the quality of thought to speak louder than visual noise.
            </div>
          </div>
        </section>

        {/* The Process: Protocol Archive */}
        <section className="py-32 px-6 md:px-24 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-32 reveal-up">The Protocol.</h2>
            
            <div className="space-y-1">
              {[
                { step: "01", title: "Excavation", desc: "Unearthing the core tension and emotional resonance of the brand." },
                { step: "02", title: "Architectonics", desc: "Defining the structural hierarchy and spatial logic of the interface." },
                { step: "03", title: "Synthesis", desc: "Merging form and function into a cohesive digital instrument." },
                { step: "04", title: "Refinement", desc: "Tuning the kinetics and acoustics of every interaction." },
              ].map((item, i) => (
                <div key={i} className="reveal-up border-t border-white/10 py-12 flex flex-col md:flex-row items-baseline group hover:bg-white/[0.02] transition-colors px-6">
                  <span className="text-accent font-display font-black text-2xl mr-24">{item.step}</span>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mr-auto group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                  <p className="max-w-md text-white/40 mt-4 md:mt-0">{item.desc}</p>
                  <ChevronRight className="hidden md:block w-8 h-8 ml-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                </div>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </section>

        {/* The Dialogue: Commitment */}
        <section id="contact" className="py-64 px-6 md:px-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="text-[20vw] font-black text-white/[0.02] leading-none select-none">CYPHR</div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-[10rem] font-black uppercase mb-12 tracking-tighter reveal-up">
              Start <br />A Dialogue.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 reveal-up">
              <button className="btn-primary px-12 py-6 text-lg uppercase tracking-widest group">
                Initialize Project
                <Zap className="ml-3 w-5 h-5 inline-block group-hover:fill-background transition-colors" />
              </button>
              <a href="mailto:hello@cyphr.design" className="text-xl font-light hover:text-accent transition-colors border-b border-white/20 pb-1">
                hello@cyphr.design
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/30">
          <div>© 2026 CYPHR STRATEGIC DESIGN</div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Awwwards</a>
            <a href="#" className="hover:text-accent transition-colors">Behance</a>
          </div>
          <div>EST. BERLIN / TOKYO</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
