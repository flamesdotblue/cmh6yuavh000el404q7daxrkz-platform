import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950 pointer-events-none" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-4xl">
            We Build Websites, Web Apps & Mobile Apps that Sync with Your Vision.
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl">
            From concept to launch — Versa Sync Studios transforms ideas into powerful digital products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/portfolio" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Explore Our Work</Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition">Start a Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
