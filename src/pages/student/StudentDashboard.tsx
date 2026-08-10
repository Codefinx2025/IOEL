import {
	ArrowRight,
	BookOpen,
	Clock3,
	Code2,
	GraduationCap,
	LayoutGrid,
	Megaphone,
	MonitorSmartphone,
	PenLine,
	Play,
	Rocket,
	ShieldCheck,
	Star,
	Trophy,
	Users,
	Video,
} from 'lucide-react';
import { useState } from 'react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

interface StudentDashboardProps {
	onNavigateHome?: () => void;
}

const categories = [
	{ icon: LayoutGrid, name: 'All Categories', courses: '50 Courses', active: true },
	{ icon: MonitorSmartphone, name: 'Development', courses: '12 Courses' },
	{ icon: BookOpen, name: 'Business', courses: '8 Courses' },
	{ icon: PenLine, name: 'Design', courses: '9 Courses' },
	{ icon: Megaphone, name: 'Marketing', courses: '7 Courses' },
	{ icon: Code2, name: 'IT & Software', courses: '15 Courses' },
];

const courseCards = [
	{ title: 'Digital Marketing Fundamentals', image: '/images/students.png', lessons: '24 Lessons', duration: '6 Weeks', level: 'Beginner', badge: 'Bestseller' },
	{ title: 'Web Development Essentials', image: '/images/about.png', lessons: '32 Lessons', duration: '8 Weeks', level: 'Intermediate', badge: 'Popular' },
	{ title: 'Graphic Design Masterclass', image: '/images/Certificate.png', lessons: '20 Lessons', duration: '5 Weeks', level: 'Beginner', badge: 'Creative' },
	{ title: 'Data Analytics Basics', image: '/images/students.png', lessons: '18 Lessons', duration: '4 Weeks', level: 'Beginner', badge: 'Hot' },
];

const recommendedCards = [
	{ title: 'AI Tools for Productivity Masterclass', image: '/images/about.png', lessons: '28 Lessons', duration: '5 Weeks', level: 'Beginner', badge: 'New' },
	{ title: 'Python for Data Science Zero to Hero', image: '/images/Certificate.png', lessons: '42 Lessons', duration: '10 Weeks', level: 'Intermediate', badge: 'Popular' },
	{ title: 'UI/UX Design From Scratch', image: '/images/students.png', lessons: '24 Lessons', duration: '6 Weeks', level: 'Beginner', badge: 'Top Rated' },
	{ title: 'English Communication Skills for Professionals', image: '/images/about.png', lessons: '16 Lessons', duration: '4 Weeks', level: 'Beginner', badge: 'Skill Boost' },
];

const stats = [
	{ icon: BookOpen, value: '12', label: 'Courses Enrolled' },
	{ icon: Play, value: '36', label: 'Lessons Completed' },
	{ icon: Clock3, value: '18', label: 'Hours Learned' },
	{ icon: Trophy, value: '3', label: 'Certificates Earned' },
];

const menuItems = [
	'Account Profile',
	'My Progress',
	'Saved Courses',
	'My Certificates',
	'My Cart',
	'Notes & Bookmarks',
	'Messages',
	'Notifications',
	'Account Settings',
	'Privacy & Security',
	'Payment Methods',
	'Billing & Subscription',
	'Purchase History',
	'Help Center',
	'Language',
];

export default function StudentDashboard({ onNavigateHome }: StudentDashboardProps) {
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-[#f7f7f4] text-[#101010]">
			<StudentDashboardHeader onOpenMenu={() => setIsProfileMenuOpen(true)} />

			{isProfileMenuOpen ? (
				<button
					type="button"
					aria-label="Close profile menu"
					onClick={() => setIsProfileMenuOpen(false)}
					className="fixed inset-0 z-40 cursor-default bg-black/10 backdrop-blur-[1px]"
				/>
			) : null}

			<main className="mx-auto max-w-[1400px] px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-6">
				<div className="grid gap-6">
					<div className="space-y-6">
						<section className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-7">
							<div className="absolute inset-y-0 right-0 hidden w-72 bg-[radial-gradient(circle_at_center,rgba(245,168,0,0.16),transparent_65%)] md:block" />
							<div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
								<div>
									<p className="text-sm font-semibold text-black/50">Welcome back,</p>
									<h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-[2.5rem]">
										Senuni Deepna! <span className="inline-block rotate-12 text-2xl">👋</span>
									</h1>
									<p className="mt-2 max-w-lg text-sm leading-6 text-black/55 sm:text-[15px]">Keep learning and grow your skills.</p>
									<button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-5 py-3 text-sm font-bold text-black shadow-[0_14px_35px_rgba(245,168,0,0.35)] transition hover:bg-[#ffbb28]">
										Continue Learning <ArrowRight size={16} />
									</button>
								</div>

								<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:col-span-1 lg:grid-cols-2">
									{stats.map(({ icon: Icon, value, label }) => (
										<div key={label} className="rounded-3xl border border-black/5 bg-[#fcfcfa] px-4 py-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
											<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4cf] text-[#F5A800]"><Icon size={20} /></div>
											<div className="mt-3 text-2xl font-extrabold text-[#111111]">{value}</div>
											<div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">{label}</div>
										</div>
									))}
								</div>
							</div>
						</section>

						<section className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-6">
							<div className="flex items-center justify-between gap-4">
								<h2 className="text-lg font-bold text-[#111111]">Browse by Category</h2>
								<button className="text-sm font-semibold text-black/55 transition hover:text-[#F5A800]">View all →</button>
							</div>
							<div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-6">
								{categories.map(({ icon: Icon, name, courses, active }) => (
									<div
										key={name}
										className={`rounded-2xl border px-4 py-4 transition ${active ? 'border-[#F5A800]/30 bg-[#FFF8E4] shadow-[0_8px_24px_rgba(245,168,0,0.15)]' : 'border-black/5 bg-[#fcfcfa] hover:border-[#F5A800]/25 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]'}`}
									>
										<div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${active ? 'bg-[#F5A800] text-black' : 'bg-black/5 text-[#F5A800]'}`}><Icon size={18} /></div>
										<div className="mt-3 text-sm font-bold text-[#111111]">{name}</div>
										<div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">{courses}</div>
									</div>
								))}
							</div>
						</section>

						<CourseRow title="Trending Courses" courses={courseCards} />
						<CourseRow title="Recommended for You" courses={recommendedCards} />

						<section className="overflow-hidden rounded-[24px] border border-black/5 bg-[#121212] p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-6">
							<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex items-start gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A800] text-black shadow-[0_10px_30px_rgba(245,168,0,0.35)]"><Trophy size={24} /></div>
									<div>
										<p className="text-sm font-semibold text-white/60">Unlock Your Full Potential</p>
										<h3 className="mt-1 text-xl font-bold">Upgrade to Premium and get unlimited access to expert-led courses, exclusive content, and certification.</h3>
									</div>
								</div>
								<button className="inline-flex items-center justify-center rounded-full bg-[#F5A800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#ffbe2f]">
									Upgrade Now <ArrowRight size={16} className="ml-2" />
								</button>
							</div>
						</section>
					</div>
				</div>
			</main>

			{isProfileMenuOpen ? (
				<aside className="fixed right-4 top-20 z-50 h-[calc(100vh-6rem)] w-[315px] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:right-5 sm:top-24">
					<div className="flex h-full flex-col">
						<div className="flex items-center gap-3 border-b border-black/5 px-4 py-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-[#F5A800]">SD</div>
							<div>
								<div className="font-bold text-[#111111]">Senuni Deepna</div>
								<div className="text-sm text-black/45">senuni@ioel.com</div>
							</div>
						</div>

						<div className="flex-1 overflow-y-auto px-3 py-3">
							<ul className="space-y-1 text-sm text-[#333333]">
								{menuItems.map((item, index) => (
									<li
										key={item}
										className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition ${index === 7 ? 'bg-[#FFF8E4] font-semibold text-[#C88900]' : 'hover:bg-black/5'}`}
									>
										<span>{item}</span>
										{item === 'Notifications' ? <span className="rounded-full bg-[#F5A800] px-2 py-0.5 text-[11px] font-bold text-white">3</span> : null}
										{item === 'Language' ? <ArrowRight size={14} className="text-black/35" /> : null}
									</li>
								))}
								<li className="mt-2 rounded-2xl px-3 py-2.5 text-[#E14B3B] transition hover:bg-red-50">Logout</li>
							</ul>
						</div>

						<div className="border-t border-black/5 p-4">
							<div className="flex items-center gap-3 rounded-[22px] bg-[#fcfcfa] p-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF3C6] text-[#F5A800]"><ShieldCheck size={22} /></div>
								<div>
									<div className="text-sm font-bold text-[#111111]">Secure Learning</div>
									<div className="text-sm text-black/45">Your data and progress are protected.</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
			) : null}

			<StudentDashboardFooter />
		</div>
	);
}

function CourseRow({ title, courses }: { title: string; courses: Array<{ title: string; image: string; lessons: string; duration: string; level: string; badge: string }> }) {
	return (
		<section className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-6">
			<div className="flex items-center justify-between gap-4">
				<h2 className="text-lg font-bold text-[#111111]">{title}</h2>
				<button className="text-sm font-semibold text-black/55 transition hover:text-[#F5A800]">View all →</button>
			</div>

			<div className="mt-4 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
				{courses.map((course) => (
					<article key={course.title} className="overflow-hidden rounded-[22px] border border-black/5 bg-[#fcfcfa] shadow-[0_10px_26px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.08)]">
						<div className="relative h-40 overflow-hidden">
							<img src={course.image} alt={course.title} className="h-full w-full object-cover" />
							<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
							<span className="absolute left-3 top-3 rounded-full bg-[#F5A800] px-3 py-1 text-[11px] font-bold text-black">{course.badge}</span>
							<button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm">
								<Video size={16} />
							</button>
						</div>
						<div className="p-4">
							<h3 className="line-clamp-2 text-[15px] font-bold leading-6 text-[#111111]">{course.title}</h3>
							<div className="mt-3 flex items-center gap-3 text-xs font-semibold text-black/45">
								<span className="inline-flex items-center gap-1 text-[#F5A800]"><Star size={14} /> 4.8</span>
								<span>{course.lessons}</span>
								<span>{course.duration}</span>
							</div>
							<div className="mt-3 flex items-center justify-between">
								<span className="text-sm font-semibold text-black/50">{course.level}</span>
								<button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A800] text-black transition hover:bg-[#ffbe2f]">
									<ArrowRight size={16} />
								</button>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}