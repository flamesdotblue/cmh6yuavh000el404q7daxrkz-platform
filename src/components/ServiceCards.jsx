import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Design',
    desc: 'UI/UX-driven websites on WordPress & Shopify. Responsive, accessible, and conversion-focused.',
    cta: 'Learn More',
    to: '/services',
  },
  {
    title: 'Web Applications',
    desc: 'From MVPs to scale-ups using Bubble.io, Supabase, Firebase, and N8N automation.',
    cta: 'Learn More',
    to: '/services',
  },
  {
    title: 'Mobile Applications',
    desc: 'Flutter-based cross-platform apps with backend integration and custom logic.',
    cta: 'Learn More',
    to: '/services',
  },
];

export default function ServiceCards() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500"/>
          <h3 className="text-white font-semibold mt-4">{s.title}</h3>
          <p className="text-slate-400 text-sm mt-2">{s.desc}</p>
          <Link to={s.to} className="inline-block mt-4 text-sm text-blue-400 group-hover:text-blue-300">{s.cta} →</Link>
        </div>
      ))}
    </div>
  );
}
