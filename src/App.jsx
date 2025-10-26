import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function TechStack() {
  const items = [
    'WordPress',
    'Shopify',
    'Bubble.io',
    'Flutter',
    'Supabase',
    'Firebase',
    'N8N',
    'Custom Code',
  ];
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100 tracking-tight">Technologies We Love</h2>
        <p className="text-slate-400 mt-2">Our versatile tech stack allows us to build anything from websites to enterprise-grade applications.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-center py-3 px-2 text-slate-100 text-sm font-medium hover:bg-white/10 transition">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const projects = [
    {
      title: 'Ecommerce Launchpad',
      desc: 'High-converting Shopify storefront with custom sections.',
      stack: ['Shopify', 'Custom Code'],
    },
    {
      title: 'Realtime Collaboration App',
      desc: 'Bubble.io app with Supabase auth and role-based access.',
      stack: ['Bubble.io', 'Supabase'],
    },
    {
      title: 'Cross-Platform Fitness App',
      desc: 'Flutter mobile app with Firebase backend and analytics.',
      stack: ['Flutter', 'Firebase'],
    },
    {
      title: 'Workflow Automation Suite',
      desc: 'Internal tools automated with N8N & serverless functions.',
      stack: ['N8N', 'Custom Code'],
    },
  ];
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-100 tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 mt-2">A glimpse into how we turn ideas into scalable products.</p>
          </div>
          <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 transition">View all</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 transition">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900"/>
              <div className="p-4">
                <h3 className="text-slate-100 font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-300 px-2 py-1">{s}</span>
                  ))}
                </div>
                <Link to="/portfolio" className="inline-block mt-4 text-sm text-blue-400 group-hover:text-blue-300">View Project →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    'End-to-End Expertise',
    'Performance & Scalability',
    'Cross-Platform Development',
    'Fast Turnaround',
  ];
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-100 tracking-tight">Why Choose Versa Sync Studios</h2>
          <p className="text-slate-400 mt-3">We blend creativity with engineering to ship products that feel great and scale smoothly.</p>
          <ul className="mt-6 grid gap-3">
            {points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"/>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-8">
          <p className="text-slate-300">“We don’t just build apps — we build experiences. From prototype to production, we’ve got your back.”</p>
          <div className="mt-4 text-sm text-slate-400">Versa Sync Studios</div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 border border-white/10 p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to build something exceptional? Let’s collaborate.</h3>
        <p className="text-slate-300 mt-3">From concept to launch — we transform ideas into powerful digital products.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/portfolio" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Explore Our Work</Link>
          <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition">Start a Project</Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <section className="relative px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-100 tracking-tight">Services</h2>
          <p className="text-slate-400 mt-2">Design, build, and scale — all under one roof.</p>
          <ServiceCards />
        </div>
      </section>
      <PortfolioPreview />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}

function About() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">About Versa Sync Studios</h1>
        <p className="text-slate-300 mt-4">Founded by developers and designers passionate about merging creativity with technology, Versa Sync Studios helps brands, startups, and businesses build scalable digital products. Our philosophy is simple: every project starts with understanding the client’s vision — we sync ideas with execution.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-200 font-medium">Discovery & Strategy</div>
            <p className="text-slate-400 text-sm mt-2">We align on goals, audience, and success metrics before a single pixel is drawn.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-200 font-medium">Design & Prototype</div>
            <p className="text-slate-400 text-sm mt-2">UI/UX explorations and rapid prototyping to validate direction early.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-200 font-medium">Build & Launch</div>
            <p className="text-slate-400 text-sm mt-2">Modern stacks, automation, and testing to ship reliable products fast.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Services() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Services</h1>
        <p className="text-slate-300 mt-4 max-w-3xl">We build end-to-end solutions that span design, web applications, and mobile apps. Choose the track that fits your goals — or combine them for maximum impact.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl text-white font-semibold">Web Design</h3>
            <p className="text-slate-400 mt-2">UI/UX-driven design, WordPress & Shopify expertise, responsive layouts.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl text-white font-semibold">Web Applications</h3>
            <p className="text-slate-400 mt-2">Built using Bubble.io, Supabase, Firebase, with N8N automation and integrations.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl text-white font-semibold">Mobile Applications</h3>
            <p className="text-slate-400 mt-2">Flutter-based cross-platform apps with backend integration and custom logic.</p>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition">Tell us about your project → Start Now</Link>
        </div>
      </div>
    </main>
  );
}

function Portfolio() {
  const projects = [
    {
      title: 'Commerce Elevate',
      image: '',
      stack: ['Shopify', 'Remix', 'Cloudflare'],
      overview: 'Revamped storefront with optimized UX and blazing-fast performance.',
      result: '30% lift in conversion and faster checkout flow.',
    },
    {
      title: 'TeamSync',
      image: '',
      stack: ['Bubble.io', 'Supabase', 'N8N'],
      overview: 'Internal collaboration tool with realtime updates and automations.',
      result: 'Reduced manual ops by 45% via workflows.',
    },
    {
      title: 'PulseFit',
      image: '',
      stack: ['Flutter', 'Firebase'],
      overview: 'Health & fitness mobile app with analytics and push notifications.',
      result: '4.8 app rating with strong user retention.',
    },
  ];
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Portfolio</h1>
        <p className="text-slate-300 mt-4 max-w-3xl">Recent work and notable builds. Each project is tailored to the brand’s goals and engineered for scale.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((pr) => (
            <div key={pr.title} className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900"/>
              <div className="p-5">
                <h3 className="text-white font-semibold">{pr.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{pr.overview}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {pr.stack.map((s) => (
                    <span key={s} className="text-[11px] rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-300 px-2 py-1">{s}</span>
                  ))}
                </div>
                <div className="text-slate-300 text-sm mt-3">Outcome: {pr.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Start a Project</h1>
        <p className="text-slate-300 mt-4">Tell us about your goals and we’ll follow up within 1–2 business days.</p>
        <form className="mt-8 grid gap-5">
          <div className="grid gap-2">
            <label className="text-slate-200 text-sm">Name</label>
            <input type="text" required placeholder="Jane Doe" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-400" />
          </div>
          <div className="grid gap-2">
            <label className="text-slate-200 text-sm">Email</label>
            <input type="email" required placeholder="you@company.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-400" />
          </div>
          <div className="grid gap-2">
            <label className="text-slate-200 text-sm">Project Type</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:border-blue-400">
              <option className="bg-slate-900">Web Design</option>
              <option className="bg-slate-900">Web Application</option>
              <option className="bg-slate-900">Mobile Application</option>
              <option className="bg-slate-900">Other</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-slate-200 text-sm">Message</label>
            <textarea rows="5" placeholder="Tell us about your idea, timeline, and budget..." className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-400" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition">Send Message</button>
            <a href="mailto:hello@versasync.studio" className="px-4 py-2.5 rounded-lg border border-white/10 text-slate-200 hover:bg-white/10 transition">Email Us</a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">WhatsApp</a>
          </div>
        </form>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400 flex gap-6">
          <NavLink to="/" className="hover:text-slate-200">Home</NavLink>
          <NavLink to="/portfolio" className="hover:text-slate-200">Portfolio</NavLink>
          <NavLink to="/services" className="hover:text-slate-200">Services</NavLink>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Link to="/contact" className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-medium">Start a Project</Link>
      </div>
    </BrowserRouter>
  );
}
