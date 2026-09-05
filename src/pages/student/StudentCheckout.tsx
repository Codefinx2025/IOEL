import { Check, ChevronRight, Globe2, LockKeyhole, ShieldCheck, ShoppingCart } from 'lucide-react';
import { FormEvent, useState } from 'react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const orderItems = [
	{ title: 'Digital Marketing Fundamentals', price: '$15.99' },
	{ title: 'Web Development Essentials', price: '$73.99' },
	{ title: 'Graphic Design Masterclass', price: '$44.99' },
];

export default function StudentCheckout() {
	const [country, setCountry] = useState('Sri Lanka');
	const [saveCard, setSaveCard] = useState(false);
	const [placed, setPlaced] = useState(false);

	const placeOrder = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setPlaced(true);
	};

	return (
		<div className="min-h-screen bg-[#fafafa] text-[#171717]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1400px] px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pt-8">
				<div className="mb-5 flex items-center gap-2 text-xs font-medium text-black/45"><button type="button" onClick={() => window.history.back()} className="transition hover:text-black/75">Shopping Cart</button><ChevronRight size={13} className="text-black/30" /><span className="text-black/80">Checkout</span></div>
				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
					<section>
						<h1 className="mb-5 text-[30px] font-extrabold tracking-[-0.02em]">Checkout</h1>
						<form onSubmit={placeOrder}>
							<section><h2 className="mb-2 text-sm font-bold">Billing Address</h2><label className="flex h-12 items-center gap-3 rounded-[3px] border border-black/5 bg-white px-4 text-xs shadow-[0_5px_20px_rgba(0,0,0,0.025)]"><Globe2 size={14} className="text-black/50" /><select value={country} onChange={(event) => setCountry(event.target.value)} className="w-full bg-transparent outline-none"><option>Sri Lanka</option><option>India</option><option>United States</option></select></label><p className="mt-3 text-[10px] text-black/50">IOEL is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p></section>
							<section className="mt-5 overflow-hidden rounded-[3px] border border-black/5 bg-white shadow-[0_5px_20px_rgba(0,0,0,0.025)]"><div className="border-b border-black/8 px-4 py-3"><h2 className="text-sm font-bold">Payment Method</h2></div><div className="p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="flex gap-2"><span className="mt-0.5 h-3 w-3 rounded-full bg-[#626a7c]" /><div><div className="text-xs font-semibold">Credit/Debit Card</div><p className="mt-0.5 text-[10px] text-black/45">Visa, Mastercard, American3, Discover</p></div></div><div className="flex items-center gap-2 text-[8px] font-black italic"><span className="text-[#1a1f71]">VISA</span><span className="text-[#eb001b]">●</span><span className="text-[#f5a800]">●</span><span className="bg-[#0876b9] px-1 text-white">AMEX</span><span className="text-[#ed4a26]">DISC</span></div></div><div className="mt-2.5 grid gap-2 sm:grid-cols-2"><input required placeholder="Name on Card" className="sm:col-span-2" /><input required placeholder="Card Number" /><input required placeholder="Expiration Date (MM/YY)" /><input required placeholder="CVV" /><div className="flex items-center justify-end gap-2 rounded-[3px] border border-black/10 px-3 text-[9px] text-black/55"><span className="font-bold">▰</span><span className="rounded bg-[#171717] px-1.5 py-0.5 text-white">●</span></div></div><label className="mt-4 flex items-center gap-2 text-[10px] text-black/75"><input type="checkbox" checked={saveCard} onChange={(event) => setSaveCard(event.target.checked)} className="accent-[#F5A800]" /> Securely save this card for my later purchase</label></div></section>
							<section className="mt-6"><h2 className="mb-3 text-sm font-bold">Order Details</h2><div className="flex items-center gap-3 rounded-[3px] border border-black/5 bg-white p-3 shadow-[0_5px_20px_rgba(0,0,0,0.025)]"><img src="/images/students.png" alt="Digital Marketing Fundamentals" className="h-9 w-9 rounded object-cover" /><div className="min-w-0 flex-1"><h3 className="truncate text-[11px] font-bold">Digital Marketing Fundamentals</h3><p className="mt-1 text-[9px] text-black/50">6 weeks · At <span className="text-[#F5A800]">★★★★</span><span className="text-black/30">★</span> (11,596)</p></div><div className="text-right"><div className="text-[11px] font-bold">$49.99</div><div className="text-[9px] text-black/40 line-through">$69.99</div></div></div></section>
							<button type="submit" className="sr-only">Place Order</button>
						</form>
					</section>
					<aside className="rounded-[3px] border border-black/5 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)]"><h2 className="text-sm font-bold">Order Summary</h2><div className="mt-5 space-y-3 text-[10px]">{orderItems.map((item) => <div key={item.title} className="flex justify-between gap-4"><span>{item.title}</span><span className="font-semibold">{item.price}</span></div>)}</div><div className="my-5 border-t border-black/8" /><div className="flex items-center justify-between text-xs font-bold"><span>Total</span><span>$80.99</span></div><p className="mt-1 text-right text-[10px] text-[#18945d]">You save $38.98</p><div className="my-5 border-t border-black/8" /><div className="flex items-center justify-between text-xs font-bold"><span>Discount</span><span className="text-[#18945d]">$80.99</span></div><p className="mt-1 text-right text-[10px] text-[#18945d]">You save $73.98</p><div className="my-5 border-t border-black/8" /><div className="flex items-center justify-between text-sm font-extrabold"><span>Total</span><span>$80.99</span></div><p className="mt-1 text-right text-[10px] text-[#18945d]">You pay $80.99</p><button type="button" onClick={() => document.querySelector('form')?.requestSubmit()} className="mt-5 flex w-full items-center justify-center gap-2 rounded-[3px] bg-[#1e1e20] py-3 text-xs font-bold text-white transition hover:bg-black"><ShoppingCart size={14} className="text-[#F5A800]" /> {placed ? 'Order Placed' : 'Place Order'}</button><div className="mt-4 flex items-start gap-3 rounded-[3px] border border-black/8 p-4"><ShieldCheck size={20} className="shrink-0 text-[#26366d]" /><div><div className="text-[11px] font-semibold">Secure Checkout</div><p className="mt-1 text-[9px] leading-4 text-black/50">Your payment information is 100% secure and encrypted.</p></div></div><div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-black/40"><LockKeyhole size={12} /> Encrypted payment processing</div>{placed && <p className="mt-3 flex items-center justify-center gap-1 text-center text-[10px] font-semibold text-[#18945d]"><Check size={12} /> Thank you for your order.</p>}</aside>
				</div>
			</main>
			<StudentDashboardFooter />
		</div>
	);
}
