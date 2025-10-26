export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500"/>
            <span className="font-semibold tracking-tight">Versa Sync Studios</span>
          </div>
          <p className="text-slate-400 mt-3 max-w-sm">© Versa Sync Studios — Powered by Code & Creativity.</p>
        </div>
        <div className="text-slate-300">
          <div className="font-medium">Contact</div>
          <a href="mailto:hello@versasync.studio" className="block text-slate-400 hover:text-slate-200 mt-2">hello@versasync.studio</a>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-slate-400 hover:text-slate-200">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-slate-200">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-slate-200">GitHub</a>
          </div>
        </div>
        <div className="text-slate-300">
          <div className="font-medium">Quick Links</div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-slate-400">
            <a href="/" className="hover:text-slate-200">Home</a>
            <a href="/about" className="hover:text-slate-200">About</a>
            <a href="/services" className="hover:text-slate-200">Services</a>
            <a href="/portfolio" className="hover:text-slate-200">Portfolio</a>
            <a href="/contact" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
