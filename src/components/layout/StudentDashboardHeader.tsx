import { Bell, ChevronDown, Menu, Search, ShoppingCart, SlidersHorizontal } from 'lucide-react';

interface StudentDashboardHeaderProps {
	onOpenMenu?: () => void;
}

export default function StudentDashboardHeader({ onOpenMenu }: StudentDashboardHeaderProps) {
	return (
		<header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-xl">
			<div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3">
					<img src="/icons/logo.png" alt="IOEL" className="h-9 w-9 rounded-full object-contain" />
					<span className="text-[1.45rem] font-black tracking-[0.18em] text-[#111111]">IOEL</span>
				</div>

				<div className="hidden min-w-0 flex-1 items-center lg:flex">
					<div className="flex h-12 w-full max-w-[520px] items-center gap-3 rounded-full border border-black/10 bg-white px-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
						<Search size={18} className="text-black/40" />
						<input
							type="text"
							defaultValue="Search for courses, skills or anything"
							className="w-full bg-transparent text-sm text-black/75 outline-none placeholder:text-black/35"
						/>
						<button type="button" className="rounded-full p-1 text-black/45 transition hover:bg-black/5 hover:text-black/70">
							<SlidersHorizontal size={17} />
						</button>
					</div>
				</div>

				<div className="ml-auto flex items-center gap-3 sm:gap-4">
					<button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition hover:border-[#F5A800]/40 hover:text-[#F5A800] lg:hidden">
						<Search size={18} />
					</button>
					<button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition hover:border-[#F5A800]/40 hover:text-[#F5A800]">
						<ShoppingCart size={18} />
					</button>
					<button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition hover:border-[#F5A800]/40 hover:text-[#F5A800]">
						<Bell size={18} />
						<span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F5A800] px-1 text-[10px] font-bold text-white">3</span>
					</button>
					<button
						type="button"
						onClick={onOpenMenu}
						className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-2 py-1.5 pr-3 text-left shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition hover:border-[#F5A800]/40"
					>
						<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-[#F5A800]">EO</div>
						<div className="hidden leading-tight sm:block">
							<div className="text-sm font-semibold text-black">Emma Olivia</div>
						</div>
						<ChevronDown size={16} className="text-black/45" />
					</button>
					<button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition hover:border-[#F5A800]/40 hover:text-[#F5A800] lg:hidden">
						<Menu size={18} />
					</button>
				</div>
			</div>
		</header>
	);
}