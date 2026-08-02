import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Facebook, Linkedin, Youtube } from 'lucide-react';

const socials = [
  {
    Icon: Facebook,
    label: 'Facebook',
    url: 'https://www.facebook.com/instituteofelearning',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/institute-of-e-learning/',
  },
  {
    Icon: Youtube,
    label: 'YouTube',
    url: 'https://www.youtube.com/@KokilaMudugamuwa',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', course: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', course: '', message: '' });
  };


  return (
   <section
        id="contact"
        ref={ref}
        className="relative py-16 sm:py-28 overflow-hidden bg-white"
      >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-yellow-400/10 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 -right-24 w-[380px] h-[380px] rounded-full bg-amber-300/10 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 reveal">
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="text-[#F5A800] uppercase font-semibold tracking-[0.2em] text-sm">
              Contact Our Team
            </span>

            <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-[#111] leading-tight max-w-3xl">
            Start Your
            <br />
            <span className="text-[#F5A800]">Learning Journey</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-8 max-w-2xl text-gray-500 text-base sm:text-lg leading-relaxed">
            Ready to transform your career? Reach out to our team, and we'll help
            you find the perfect course to achieve your goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-12">

          {/*Left info*/}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 reveal">
            {/* Contact cards */}
            {[
              { Icon: Phone, label: 'Phone / WhatsApp', value: '+94 77 103 3845', sub: 'Available 24/7' },
              { Icon: Mail, label: 'Email', value: 'info@ioel.com', sub: 'Reply within 24 hours' },
              { Icon: MapPin, label: 'Headquarters', value: 'Online Globally', sub: '45+ countries served' },
            ].map(({ Icon, label, value, sub }) => (
              <div key={label} className="
                  bg-[#1A1A1A]
                  rounded-2xl
                  p-5
                  flex
                  items-start
                  gap-4
                  border
                  border-[#2B2B2B]
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-500/40
                  hover:shadow-yellow-500/10
                  ">
                <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-yellow-500/10
                  border
                  border-yellow-500/30
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  ">
                  <Icon size={20} className="text-yellow-400" />
                </div>
                <div>
                 <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-white text-lg font-semibold">{value}</div>
                  <div className="text-gray-500 text-sm mt-1">{sub}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/94771033845"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 btn-gold w-full justify-center !rounded-[15px]"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="
                    w-11 h-11
                    rounded-xl
                    flex items-center justify-center
                    bg-[#141313]
                    border border-[#2A2A2A]
                    text-white
                    shadow-md
                    transition-all duration-300
                    hover:bg-[#F5A800]
                    hover:border-[#F5A800]
                    hover:text-[#141313]
                    hover:-translate-y-1
                    hover:shadow-[0_8px_24px_rgba(245,168,0,0.35)]
                  "
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 reveal">
           <div
            className="
              bg-[#1A1A1A]
              rounded-2xl
              sm:rounded-3xl
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#2F2F2F]
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
            >
              <h3 className="text-white font-bold text-2xl mb-2">Send Us a Message</h3>
              <p className="text-white/50 text-sm mb-8">We'll get back to you within 24 hours.</p>

              {sent && (
                <div className="mb-6 bg-green-500/20 border border-green-500/40 rounded-xl p-4 text-green-400 text-sm font-medium">
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">Course Interest</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="form-input"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-[#1a1a1a]">Select a course...</option>
                    <option value="digital-marketing" className="bg-[#1a1a1a]">Digital Marketing Certificate</option>
                    <option value="web-dev" className="bg-[#1a1a1a]">Web Development Diploma</option>
                    <option value="data" className="bg-[#1a1a1a]">Data Analytics Certificate</option>
                    <option value="business" className="bg-[#1a1a1a]">Business Management Diploma</option>
                    <option value="ai" className="bg-[#1a1a1a]">AI & Machine Learning Diploma</option>
                    <option value="other" className="bg-[#1a1a1a]">Other / Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your learning goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4 text-base !rounded-[12px]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
