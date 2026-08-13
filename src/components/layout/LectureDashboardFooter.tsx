import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

const explore = ['All Courses', 'Categories', 'Bestsellers', 'New Releases', 'Career Tracks', 'Learning Paths'];
const company = ['About Us', 'Our Mentors', 'Testimonials', 'Blog', 'Careers', 'Contact Us'];
const support = ['Help Center', 'FAQs', 'Payment Options', 'Refund Policy', 'Terms of Use', 'Privacy Policy'];

export default function LectureDashboardFooter() {
  return (
    <footer className="bg-[#071028] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/icons/logo.png"
                alt="IOEL logo"
                className="h-28 w-28 object-contain"
              />
              <div>
                <div className="text-3xl font-black tracking-[0.22em] text-[#f5a800]">IOEL</div>
                <div className="text-[10px] font-semibold tracking-[0.28em] text-[#f5a800]/70">
                  THE LEADING E-LEARNING PARTNER
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/70">
              Empowering learners worldwide with high-quality online education. Learn from industry experts,
              build real-world skills, and advance your career with confidence.
            </p>

            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#f5a800]">
                  <MapPin size={15} />
                </span>
                <span>No. 123, Innovation Drive, Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#f5a800]">
                  <Mail size={15} />
                </span>
                <span>support@ioel.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#f5a800]">
                  <Phone size={15} />
                </span>
                <span>+94 77 123 4567</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f5a800]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {explore.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f5a800]">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f5a800]">Support</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f5a800]">Newsletter</h3>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Subscribe to get the latest updates, new courses, and exclusive offers.
            </p>
            <div className="mt-5 flex overflow-hidden rounded-full border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button type="button" className="flex items-center justify-center bg-[#f5a800] px-4 text-xl font-bold text-[#111111] transition hover:bg-[#ffbf35]">
                →
              </button>
            </div>
            <p className="mt-3 text-xs text-white/45">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2025 IOEL. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span className="text-white/70">Follow Us</span>
            {[Facebook, TwitterIcon, Linkedin, Youtube, Instagram].map((Icon, index) => (
              <span key={index} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/75">
                <Icon size={16} />
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/70">We Accept</span>
            <div className="flex items-center gap-2">
              <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-[#1a1f71]">VISA</span>
              <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-[#eb001b]">MC</span>
              <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-[#009cde]">AMEX</span>
              <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-[#0070ba]">PayPal</span>
              <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-[#635bff]">stripe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2h3.68l-8.04 9.2L22.5 22h-7.28l-5.7-7.92L3.8 22H.12l8.62-9.85L1.5 2h7.47l5.16 7.14L18.9 2Zm-1.29 18h2.03L7.05 3.9H4.9L17.61 20Z" />
    </svg>
  );
}
