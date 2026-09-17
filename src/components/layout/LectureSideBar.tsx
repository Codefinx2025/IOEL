import {
	ArrowRight,
	BookOpen,
	BarChart3,
	Bell,
	FileText,
	GraduationCap,
	LayoutGrid,
	MessageCircle,
	Settings2,
	UserRound,
	Wallet,
	X,
} from 'lucide-react';

interface LectureSideBarProps {
	onClose: () => void;
}

const mainItems = [
	{ label: 'Dashboard', icon: LayoutGrid },
	{ label: 'Courses', icon: BookOpen },
	{ label: 'Students', icon: UserRound },
	{ label: 'Analytics', icon: BarChart3 },
	{ label: 'Earnings', icon: Wallet },
	{ label: 'Reviews', icon: MessageCircle },
	{ label: 'Announcements', icon: Bell },
];

const courseItems = [
	{ label: 'Create Course', icon: FileText },
	{ label: 'Content Library', icon: FileText },
	{ label: 'Quizzes', icon: FileText },
	{ label: 'Assignments', icon: FileText },
	{ label: 'Live Sessions', icon: FileText },
];

const supportItems = [
	{ label: 'Instructor Hub', icon: GraduationCap },
	{ label: 'Messages', icon: MessageCircle },
	{ label: 'Discussions', icon: MessageCircle },
];

const accountItems = [
	{ label: 'Profile', icon: UserRound },
	{ label: 'Account Settings', icon: Settings2 },
	{ label: 'Payout Settings', icon: Wallet },
	{ label: 'Help & Support', icon: MessageCircle },
];

export default function LectureSideBar({ onClose }: LectureSideBarProps) {
	return (
		<>
			<button type="button" aria-label="Close profile menu" onClick={onClose} className="fixed inset-0 z-40 cursor-default bg-black/5" />
			<aside className="absolute right-0 top-[calc(100%+8px)] z-50 w-[min(322px,calc(100vw-24px))] overflow-hidden rounded-[18px] border border-[#111111]/8 bg-white px-4 py-4 text-[#111111] shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
				<div className="flex items-center gap-3 border-b border-[#111111]/8 px-1 pb-4">
					<div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-[#f5a800]">JD</div>
					<div className="min-w-0 flex-1">
						<p className="truncate text-sm font-bold">John Doe</p>
						<p className="truncate text-[11px] text-[#111111]/50">john.doe@ioel.com</p>
					</div>
					<button type="button" onClick={onClose} aria-label="Close menu" className="flex h-7 w-7 items-center justify-center rounded-full text-[#111111]/45 hover:bg-[#111111]/5 hover:text-[#111111]">
						<X size={15} />
					</button>
				</div>

				<SidebarGroup items={mainItems} onSelect={onClose} />
				<SidebarGroup items={courseItems} onSelect={onClose} divided />
				<SidebarGroup items={supportItems} onSelect={onClose} divided />
				<SidebarGroup items={accountItems} onSelect={onClose} divided />

				<div className="mt-1 border-t border-[#111111]/8 pt-2">
					<button type="button" onClick={onClose} className="flex w-full items-center gap-3 rounded-lg px-1 py-2 text-[12px] text-red-500 transition hover:bg-red-50">
						<ArrowRight size={15} />
						<span>Logout</span>
					</button>
				</div>
			</aside>
		</>
	);
}

interface SidebarItem {
	label: string;
	icon: typeof LayoutGrid;
}

function SidebarGroup({ items, onSelect, divided = false }: { items: SidebarItem[]; onSelect: () => void; divided?: boolean }) {
	return (
		<div className={`${divided ? 'border-t border-[#111111]/8 pt-2' : ''} mt-2`}>
			{items.map(({ label, icon: Icon }) => (
				<button key={label} type="button" onClick={onSelect} className="flex w-full items-center gap-3 rounded-lg px-1 py-2 text-[12px] text-[#111111]/85 transition hover:bg-[#f5a800]/10 hover:text-[#111111]">
					<Icon size={15} strokeWidth={1.7} />
					<span>{label}</span>
				</button>
			))}
		</div>
	);
}