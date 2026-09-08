import {
	Award,
	BookOpen,
	Check,
	ChevronRight,
	Clock3,
	Flame,
	MoreVertical,
	PenLine,
	Play,
	Star,
	Trophy,
} from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const inProgressCourses = [
	{ title: 'Digital Marketing Fundamentals', image: '/images/students.png', progress: 75, lesson: 'Social Media Strategy', count: '12 / 16 Lessons' },
	{ title: 'Web Development Essentials', image: '/images/about.png', progress: 45, lesson: 'JavaScript Functions', count: '9 / 20 Lessons' },
	{ title: 'Data Analytics Basics', image: '/images/Certificate.png', progress: 30, lesson: 'Data Visualization', count: '6 / 20 Lessons' },
];

const completedCourses = [
	{ title: 'Graphic Design Masterclass', image: '/images/Certificate.png', rating: '4.8', date: 'May 20, 2025' },
	{ title: 'Python for Data Science', image: '/images/students.png', rating: '4.7', date: 'May 10, 2025' },
	{ title: 'UI/UX Design From Scratch', image: '/images/about.png', rating: '4.9', date: 'Apr 28, 2025' },
	{ title: 'English Communication', image: '/images/students.png', rating: '4.6', date: 'Apr 05, 2025' },
];

const categories = [
	{ name: 'Development', value: '40%', color: '#f5a800' },
	{ name: 'Marketing', value: '25%', color: '#ffbd35' },
	{ name: 'Design', value: '20%', color: '#26a7e8' },
	{ name: 'Data Science', value: '15%', color: '#38b66a' },
];

export default function StudentMyProgress() {
	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#111111]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1400px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
				<div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
					<div className="min-w-0">
						<div className="border-b border-black/10 pb-3">
							<p className="text-[11px] text-black/50">Home <span className="px-1">›</span> My Progress</p>
							<h1 className="mt-2 text-[25px] font-extrabold tracking-tight">My Progress</h1>
							<p className="mt-1 text-xs text-black/60">Track your learning progress and share your experience</p>
							<nav className="mt-4 flex gap-6 text-[10px] font-semibold sm:gap-8">
								<a href="#overview" className="border-b-2 border-[#F5A800] pb-3 text-[#F5A800]">Progress Overview</a>
								<a href="#completed" className="pb-3 text-black/60">Completed Courses</a>
								<a href="#reviews" className="pb-3 text-black/60">Reviews &amp; Ratings</a>
							</nav>
						</div>

						<section id="overview" className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-5">
							<StatCard icon={BookOpen} value="12" label="Courses Enrolled" tone="amber" />
							<StatCard icon={Play} value="7" label="In Progress" tone="blue" />
							<StatCard icon={Check} value="5" label="Completed" tone="green" />
							<StatCard icon={Clock3} value="36" label="Total Hours" tone="violet" />
							<div className="flex items-center gap-3 rounded-lg border border-black/8 bg-white px-3 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)] sm:col-span-2 xl:col-span-1 xl:flex-col xl:justify-center xl:gap-1">
								<div className="relative flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#F5A800 0 68%, #ececec 68% 100%)' }}><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold">68%</span></div>
								<span className="text-[9px] font-semibold text-black/60">Overall Progress</span>
							</div>
						</section>

						<section className="mt-5">
							<SectionHeading title="In Progress Courses" action="View All" />
							<div className="mt-2 overflow-hidden rounded-lg border border-black/8 bg-white">
								{inProgressCourses.map((course) => <ProgressCourse key={course.title} {...course} />)}
							</div>
						</section>

						<section id="completed" className="mt-5">
							<SectionHeading title="Completed Courses" action="View All" />
							<div className="mt-2 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
								{completedCourses.map((course) => <CompletedCourse key={course.title} {...course} />)}
							</div>
						</section>
					</div>

					<aside className="space-y-3 xl:pt-1">
						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]">
							<div className="flex items-center gap-2 text-[10px] font-bold"><Flame size={14} className="text-orange-500" fill="currentColor" /> Learning Streak</div>
							<div className="mt-3 text-[14px] font-extrabold text-[#F5A800]">12 <span className="text-[11px] text-black">Days</span></div>
							<p className="mt-1 text-[9px] text-black/55">Keep it up! You're doing great.</p>
							<div className="mt-3 grid grid-cols-7 gap-1 text-center text-[8px] text-black/55">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <div key={`${day}-${index}`}><span>{day}</span><span className={`mx-auto mt-1 flex h-3 w-3 items-center justify-center rounded-full ${index < 5 ? 'bg-[#F5A800] text-black' : index === 5 ? 'border border-[#F5A800] text-[#F5A800]' : 'bg-black/10'}`}>{index < 5 ? '✓' : ''}</span></div>)}</div>
						</section>

						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Progress by Category</h2><div className="mt-3 flex items-center gap-3"><div className="relative h-[76px] w-[76px] shrink-0 rounded-full" style={{ background: 'conic-gradient(#f5a800 0 40%, #ffbd35 40% 65%, #26a7e8 65% 85%, #38b66a 85% 100%)' }}><div className="absolute inset-[13px] rounded-full bg-white" /></div><div className="w-full space-y-2 text-[8px]">{categories.map((category) => <div key={category.name} className="flex items-center justify-between gap-2"><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: category.color }} />{category.name}</span><span>{category.value}</span></div>)}</div></div></section>

						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Recent Achievements</h2><div className="mt-3 space-y-3">{[[Award, 'Quick Learner', 'Completed 3 courses'], [Star, 'Dedicated Learner', '7 day streak'], [Trophy, 'Top Performer', 'Scored 90%+ in an exam']].map(([Icon, title, detail]) => <div key={title as string} className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A800] text-white"><Icon size={13} /></span><div className="text-[9px]"><p className="font-bold">{title as string}</p><p className="text-black/50">{detail as string}</p></div></div>)}</div><button type="button" className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-[#F5A800]">View All Achievements <ChevronRight size={12} /></button></section>

						<section id="reviews" className="relative overflow-hidden rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Share Your Knowledge</h2><p className="mt-2 max-w-[190px] text-[9px] leading-4 text-black/55">Help others by reviewing the courses you've completed.</p><button type="button" className="mt-3 inline-flex items-center gap-1 rounded bg-[#F5A800] px-3 py-2 text-[9px] font-bold text-black"><PenLine size={11} /> Write a Review</button><Star size={54} className="absolute bottom-2 right-2 text-black/10" strokeWidth={1} /></section>
					</aside>
				</div>
			</main>
			<StudentDashboardFooter />
		</div>
	);
}

function StatCard({ icon: Icon, value, label, tone }: { icon: typeof BookOpen; value: string; label: string; tone: 'amber' | 'blue' | 'green' | 'violet' }) {
	const tones = { amber: 'bg-[#fff5d9] text-[#F5A800]', blue: 'bg-[#eaf5ff] text-[#278fe0]', green: 'bg-[#eafaf0] text-[#20aa61]', violet: 'bg-[#f3eaff] text-[#9a40e8]' };
	return <div className="flex items-center gap-3 rounded-lg border border-black/8 bg-white px-3 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${tones[tone]}`}><Icon size={15} /></span><div><p className="text-[16px] font-extrabold leading-none">{value}</p><p className="mt-1 text-[8px] text-black/50">{label}</p></div></div>;
}

function SectionHeading({ title, action }: { title: string; action: string }) {
	return <div className="flex items-center justify-between"><h2 className="text-[12px] font-bold">{title}</h2><button type="button" className="inline-flex items-center gap-1 text-[9px] font-semibold text-black/65">{action} <ChevronRight size={11} /></button></div>;
}

function ProgressCourse({ title, image, progress, lesson, count }: (typeof inProgressCourses)[number]) {
	return <article className="flex items-center gap-2 border-b border-black/8 p-2 last:border-0 sm:gap-3"><img src={image} alt="" className="h-12 w-[76px] shrink-0 rounded object-cover sm:h-14 sm:w-[88px]" /><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><h3 className="truncate text-[10px] font-bold">{title}</h3><span className="hidden text-[8px] text-black/55 sm:block">{progress}%</span></div><div className="mt-2 h-1 rounded-full bg-black/10"><div className="h-full rounded-full bg-[#F5A800]" style={{ width: `${progress}%` }} /></div><div className="mt-1 flex justify-between text-[8px] text-black/50"><span>Last lesson: {lesson}</span><span>{count}</span></div></div><button type="button" className="hidden rounded bg-[#F5A800] px-3 py-2 text-[8px] font-bold text-black sm:block">Continue Learning</button><button type="button" aria-label={`More options for ${title}`} className="text-black/45"><MoreVertical size={15} /></button></article>;
}

function CompletedCourse({ title, image, rating, date }: (typeof completedCourses)[number]) {
	return <article className="overflow-hidden rounded-lg border border-black/8 bg-white p-2 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><img src={image} alt="" className="h-[56px] w-full rounded object-cover" /><h3 className="mt-2 line-clamp-2 min-h-[24px] text-[9px] font-bold leading-3">{title}</h3><div className="mt-1 flex items-center gap-1 text-[8px] text-black/55"><Star size={10} className="text-[#F5A800]" fill="currentColor" />{rating}</div><p className="mt-1 text-[8px] text-black/45">Completed<br />{date}</p><button type="button" className="mt-2 w-full rounded border border-black/10 py-1.5 text-[8px] font-semibold">Review &amp; Rate</button></article>;
}
