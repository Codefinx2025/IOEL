import { ChevronRight, Clock3, LockKeyhole, Minus, Plus, ShieldCheck, ShoppingCart, Star, Trash2, Tag } from 'lucide-react';
import { useMemo, useState } from 'react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

type CartCourse = {
	id: number;
	title: string;
	image: string;
	description: string;
	rating: string;
	reviews: string;
	lessons: string;
	level: string;
	price: number;
	oldPrice: number;
	accent: string;
};

const initialCourses: CartCourse[] = [
	{ id: 1, title: 'Digital Marketing Fundamentals', image: '/images/students.png', description: 'Master the basics of digital marketing including SEO, social media, and ads.', rating: '4.9', reviews: '15,950', lessons: '24 Lessons', level: 'Beginner', price: 49.99, oldPrice: 79.99, accent: 'bg-[#1769aa]' },
	{ id: 2, title: 'Web Development Essentials', image: '/images/about.png', description: 'Build modern websites with HTML, CSS, JavaScript and more.', rating: '4.8', reviews: '9,342', lessons: '32 Lessons', level: 'Intermediate', price: 59.99, oldPrice: 99.99, accent: 'bg-[#e2a321]' },
	{ id: 3, title: 'Graphic Design Masterclass', image: '/images/Certificate.png', description: 'Master the principles of design and create stunning visual stories.', rating: '4.7', reviews: '7,305', lessons: '24 Lessons', level: 'Beginner', price: 44.99, oldPrice: 89.99, accent: 'bg-[#e64a35]' },
];

const suggestions = [
	{ title: 'Python for Data Science Zero to Hero', image: '/images/students.png', price: '$39.99' },
	{ title: 'UI/UX Design From Scratch', image: '/images/about.png', price: '$34.99' },
];

const money = (value: number) => `$${value.toFixed(2)}`;

export default function StudentShoppingCart() {
	const [courses, setCourses] = useState(initialCourses);
	const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 2: 1, 3: 1 });
	const [coupon, setCoupon] = useState('');
	const [couponApplied, setCouponApplied] = useState(false);

	const subtotal = useMemo(() => courses.reduce((total, course) => total + course.price * (quantities[course.id] ?? 1), 0), [courses, quantities]);
	const discount = couponApplied ? subtotal * 0.1 : subtotal * 0.45;
	const total = subtotal - discount;

	const removeCourse = (id: number) => {
		setCourses((current) => current.filter((course) => course.id !== id));
		setQuantities((current) => {
			const next = { ...current };
			delete next[id];
			return next;
		});
	};

	return (
		<div className="min-h-screen bg-[#fafafa] text-[#171717]">
			<StudentDashboardHeader />

			<main className="mx-auto max-w-[1400px] px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pt-10">
				<div className="mb-6 flex items-center gap-2 text-xs font-medium text-black/45">
					<button type="button" onClick={() => window.history.back()} className="transition hover:text-black/75">Home</button>
					<ChevronRight size={13} className="text-black/30" />
					<span className="text-black/80">Shopping Cart</span>
				</div>

				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
					<section>
						<div className="mb-5 flex items-end justify-between gap-4">
							<div><h1 className="text-[30px] font-extrabold tracking-[-0.02em]">Shopping Cart</h1><p className="mt-1 text-xs text-black/55">{courses.length} courses in cart</p></div>
							<span className="hidden text-xs text-black/45 sm:block">Courses selected for checkout</span>
						</div>

						<div className="divide-y divide-black/8 border-y border-black/8 bg-white">
							{courses.length ? courses.map((course) => (
								<article key={course.id} className="grid gap-4 px-0 py-4 sm:grid-cols-[74px_minmax(0,1fr)_120px] sm:items-center">
									<div className="relative h-[74px] overflow-hidden rounded-[3px] bg-black/5"><img src={course.image} alt={course.title} className="h-full w-full object-cover" /><span className={`absolute left-0 top-0 h-1.5 w-full ${course.accent}`} /></div>
									<div className="min-w-0"><div className="flex items-start justify-between gap-3"><h2 className="truncate text-[13px] font-bold">{course.title}</h2><span className="shrink-0 text-sm font-bold sm:hidden">{money(course.price)}</span></div><div className="mt-1 flex items-center gap-1 text-[10px] text-black/55"><Star size={11} fill="#F5A800" className="text-[#F5A800]" /> {course.rating} <span>({course.reviews})</span></div><p className="mt-1 line-clamp-2 text-[10px] leading-4 text-black/55">{course.description}</p><div className="mt-1.5 flex flex-wrap items-center gap-2 text-[9px] text-black/55"><span className="inline-flex items-center gap-1"><Clock3 size={10} /> {course.lessons}</span><span className="rounded-sm bg-[#fff7df] px-2 py-0.5 text-[#9d7000]">{course.level}</span></div></div>
									<div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end"><div className="hidden text-right sm:block"><div className="text-sm font-bold">{money(course.price)}</div><div className="text-[10px] text-black/35 line-through">{money(course.oldPrice)}</div></div><div className="flex items-center gap-2"><button type="button" aria-label={`Decrease ${course.title} quantity`} onClick={() => setQuantities((current) => ({ ...current, [course.id]: Math.max(1, (current[course.id] ?? 1) - 1) }))} className="flex h-6 w-6 items-center justify-center rounded border border-black/10 text-black/55"><Minus size={11} /></button><span className="w-4 text-center text-xs">{quantities[course.id] ?? 1}</span><button type="button" aria-label={`Increase ${course.title} quantity`} onClick={() => setQuantities((current) => ({ ...current, [course.id]: (current[course.id] ?? 1) + 1 }))} className="flex h-6 w-6 items-center justify-center rounded border border-black/10 text-black/55"><Plus size={11} /></button><button type="button" aria-label={`Remove ${course.title}`} onClick={() => removeCourse(course.id)} className="ml-2 text-black/35 transition hover:text-red-500"><Trash2 size={14} /></button></div></div>
								</article>
							)) : <div className="flex flex-col items-center justify-center py-16 text-center"><ShoppingCart className="text-black/20" size={38} /><h2 className="mt-3 font-bold">Your cart is empty</h2><p className="mt-1 text-sm text-black/45">Add a course to start learning.</p></div>}
						</div>

						<section className="mt-7"><h2 className="text-sm font-bold">You might also like</h2><div className="mt-3 grid gap-3 sm:grid-cols-2">{suggestions.map((course) => <article key={course.title} className="overflow-hidden rounded-md border border-black/8 bg-white"><div className="relative h-24"><img src={course.image} alt={course.title} className="h-full w-full object-cover" /><button type="button" aria-label={`Save ${course.title}`} className="absolute right-2 top-2 text-white"><Tag size={15} /></button></div><div className="flex items-center justify-between gap-2 p-3"><h3 className="text-[11px] font-semibold">{course.title}</h3><span className="shrink-0 text-xs font-bold text-[#c88900]">{course.price}</span></div></article>)}</div></section>
					</section>

					<aside className="rounded-md border border-black/5 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)]"><h2 className="text-sm font-bold">Order Summary</h2><div className="mt-5 space-y-3 text-xs"><div className="flex justify-between text-black/55"><span>Subtotal ({courses.length} items)</span><span className="font-semibold text-black/80">{money(subtotal)}</span></div><div className="flex justify-between text-black/55"><span>Discount</span><span className="font-semibold text-[#18945d]">-{money(discount)}</span></div></div><div className="my-5 border-t border-black/8" /><div className="flex items-center justify-between"><span className="text-xs font-bold">Total</span><span className="text-xl font-extrabold">{money(total)}</span></div><p className="mt-1 text-right text-[10px] text-[#18945d]">You save {money(discount)}</p><button type="button" onClick={() => { window.history.pushState({}, '', '/student-checkout'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#1e1e20] py-3 text-xs font-bold text-white transition hover:bg-black"><ShoppingCart size={14} className="text-[#F5A800]" /> Proceed to Checkout</button><div className="mt-4 flex items-start gap-3 rounded-md border border-black/8 p-4"><ShieldCheck size={20} className="shrink-0 text-[#26366d]" /><div><div className="text-[11px] font-semibold">Secure Checkout</div><p className="mt-1 text-[9px] leading-4 text-black/50">Your payment information is 100% secure and encrypted.</p></div></div><div className="mt-5 flex h-10 overflow-hidden rounded-md border border-black/10"><input aria-label="Coupon code" value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Coupon code" className="min-w-0 flex-1 px-3 text-xs outline-none" /><button type="button" onClick={() => setCouponApplied(Boolean(coupon.trim()))} className="bg-[#F5A800] px-4 text-[11px] font-bold text-black">Apply</button></div><div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-black/40"><LockKeyhole size={12} /> Encrypted payment processing</div></aside>
				</div>
			</main>

			<StudentDashboardFooter />
		</div>
	);
}
