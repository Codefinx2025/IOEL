import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Youtube } from 'lucide-react';

const exploreLinks = ['All Courses', 'Categories', 'Bestsellers', 'New Releases', 'Career Tracks', 'Learning Paths'];
const companyLinks = ['About Us', 'Our Mentors', 'Testimonials', 'Blog', 'Careers', 'Contact Us'];
const supportLinks = ['Help Center', 'FAQs', 'Payment Options', 'Refund Policy', 'Terms of Use', 'Privacy Policy'];

export default function StudentDashboardFooter() {
	return (
		<footer className="border-t border-white/5 bg-[#08111f] text-white">
			<div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
				<div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_1fr]">
					<div className="space-y-5">
						<div className="flex items-center gap-3">
							<img src="/icons/logo.png" alt="IOEL" className="h-14 w-14 rounded-full object-contain" />
							<div>
								<div className="text-4xl font-black tracking-[0.18em] text-[#F5A800]">IOEL</div>
								<div className="text-[10px] font-semibold tracking-[0.3em] text-[#F5A800]/65">THE LEADING E-LEARNING PARTNER</div>
							</div>
						</div>
						<p className="max-w-sm text-sm leading-6 text-white/68 sm:text-[15px]">
							Empowering learners worldwide with high-quality online education. Learn from industry experts, build real-world skills, and advance your career with confidence.
						</p>
						<div className="grid gap-3 text-sm text-white/78">
							<div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 text-[#F5A800]"><MapPin size={16} /></span><span>No. 123, Innovation Drive, Colombo 07, Sri Lanka</span></div>
							<div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 text-[#F5A800]"><Mail size={16} /></span><span>support@ioel.com</span></div>
							<div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 text-[#F5A800]"><Phone size={16} /></span><span>+94 77 123 4567</span></div>
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Explore</h3>
						<ul className="mt-5 space-y-3 text-sm text-white/65">
							{exploreLinks.map((link) => <li key={link}>{link}</li>)}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Company</h3>
						<ul className="mt-5 space-y-3 text-sm text-white/65">
							{companyLinks.map((link) => <li key={link}>{link}</li>)}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Support</h3>
						<ul className="mt-5 space-y-3 text-sm text-white/65">
							{supportLinks.map((link) => <li key={link}>{link}</li>)}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Newsletter</h3>
						<p className="mt-5 text-sm leading-6 text-white/65">Subscribe to get the latest updates, new courses, and exclusive offers.</p>
						<div className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/5">
							<input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/35" />
							<button type="button" className="flex items-center justify-center bg-[#F5A800] px-4 text-sm font-bold text-black transition hover:bg-[#ffbe2f]">→</button>
						</div>
						<p className="mt-3 text-xs text-white/40">We respect your privacy. Unsubscribe anytime.</p>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-6 border-t border-white/8 pt-6 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">
					<p>© 2025 IOEL. All rights reserved.</p>
					<div className="flex items-center gap-3">
						<span className="text-white/65">Follow Us</span>
						{[Facebook, TwitterLike, Linkedin, Youtube, Instagram].map((Icon, index) => (
							<span key={index} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70">
								<Icon size={16} />
							</span>
						))}
					</div>
					<div className="flex items-center gap-2">
						<span className="text-white/65">We Accept</span>
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

function TwitterLike({ size }: { size?: number }) {
	return (
		<svg viewBox="0 0 24 24" width={size ?? 16} height={size ?? 16} fill="currentColor" aria-hidden="true">
			<path d="M22 5.92c-.73.32-1.52.54-2.35.64.85-.51 1.5-1.32 1.81-2.28-.79.47-1.67.81-2.6.99A4.1 4.1 0 0 0 11.8 8.7c0 .32.03.63.1.93A11.64 11.64 0 0 1 3.15 4.6a4.09 4.09 0 0 0 1.27 5.47c-.65-.02-1.26-.2-1.8-.5v.05a4.1 4.1 0 0 0 3.29 4.01c-.32.09-.66.14-1 .14-.24 0-.48-.02-.7-.07a4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.28a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.36-.02-.53A8.39 8.39 0 0 0 22 5.92Z" />
		</svg>
	);
}