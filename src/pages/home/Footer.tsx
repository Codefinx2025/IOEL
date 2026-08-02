import { ArrowRight, Mail, Phone, Facebook, Linkedin, Youtube, Shield } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Courses', 'Testimonials', 'Contact'];
const certCourses = ['Digital Marketing', 'Web Development', 'Graphic Design', 'Data Analytics', 'Cyber Security'];
const diplomaCourses = ['Business Management', 'Full-Stack Dev', 'AI & ML', 'Digital Entrepreneurship', 'Finance'];

export default function Footer() {
  const scroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A, #050500)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-yellow-500/30">
                <img src="/logo12_27_224448png.png" alt="IOEL" className="w-full h-full object-contain bg-white p-1" />
              </div>
              <div>
                <div className="text-white font-black text-xl tracking-wider">IOEL</div>
                <div className="text-yellow-500/60 text-xs tracking-widest">INSTITUTE OF E LEARNING</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              The Leading e-Learning Partner. Empowering students worldwide with professional online education.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/instituteofelearning', label: 'Facebook' },
                { Icon: Linkedin, url: 'https://www.linkedin.com/company/institute-of-e-learning/', label: 'LinkedIn' },
                { Icon: Youtube, url: 'https://www.youtube.com/@KokilaMudugamuwa', label: 'YouTube' },
              ].map(({ Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-yellow-400 hover:border-yellow-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-2.5">
              <a href="tel:+94771033845" className="flex items-center gap-2.5 text-white/50 text-sm hover:text-yellow-400 transition-colors">
                <Phone size={14} className="text-yellow-500" /> +94 77 103 3845
              </a>
              <a href="mailto:info@ioel.com" className="flex items-center gap-2.5 text-white/50 text-sm hover:text-yellow-400 transition-colors">
                <Mail size={14} className="text-yellow-500" /> info@ioel.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scroll(`#${link.toLowerCase()}`)}
                    className="text-white/50 text-sm hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate courses */}
          <div>
            <h4 className="text-white font-bold mb-5">Certificate Programs</h4>
            <ul className="space-y-3">
              {certCourses.map((c) => (
                <li key={c}>
                  <span className="text-white/50 text-sm hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-300" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diploma courses */}
          <div>
            <h4 className="text-white font-bold mb-5">Diploma Programs</h4>
            <ul className="space-y-3">
              {diplomaCourses.map((c) => (
                <li key={c}>
                  <span className="text-white/50 text-sm hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-300" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-gold rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">Stay Updated</h3>
              <p className="text-white/50 text-xs sm:text-sm">Get the latest courses, news and exclusive offers in your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input md:w-64 flex-1"
              />
              <button className="btn-gold flex items-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-white/30 text-xs sm:text-sm text-center sm:text-left">
            <Shield size={14} className="text-yellow-500/50" />
            <span>© 2026 IOEL – Institute of E Learning. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <button key={item} className="text-white/30 text-xs hover:text-yellow-400 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
