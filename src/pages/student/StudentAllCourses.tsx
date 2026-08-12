import {
	ArrowRight,
	BookOpen,
	Bookmark,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Code2,
	Clock3,
	Filter,
	GraduationCap,
	LayoutGrid,
	List,
	Megaphone,
	MonitorSmartphone,
	PenLine,
	Search,
	SlidersHorizontal,
	Star,
	Users,
} from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const categoryTabs = [
	{ label: 'All Categories', count: '50 Courses', active: true, icon: LayoutGrid },
	{ label: 'Development', count: '10 Courses', icon: MonitorSmartphone },
	{ label: 'Business', count: '8 Courses', icon: BookOpen },
	{ label: 'Design', count: '9 Courses', icon: PenLine },
	{ label: 'Marketing', count: '7 Courses', icon: Megaphone },
	{ label: 'IT & Software', count: '6 Courses', icon: Code2 },
];

const courses = [
	{
		title: 'Digital Marketing Fundamentals',
		image: '/images/students.png',
		badge: 'Marketing',
		badgeClass: 'bg-[#F5A800] text-black',
		rating: '4.8',
		lessons: '24 Lessons',
		duration: '8 Weeks',
		level: 'Beginner',
		description: 'Learn SEO, social media, paid ads, and content strategy with practical campaign examples.',
	},
	{
		title: 'Web Development Essentials',
		image: '/images/about.png',
		badge: 'Development',
		badgeClass: 'bg-[#7C5CFF] text-white',
		rating: '4.8',
		lessons: '32 Lessons',
		duration: '10 Weeks',
		level: 'Intermediate',
		description: 'Master HTML, CSS, responsive layouts, and modern JavaScript foundations.',
	},
	{
		title: 'Graphic Design Masterclass',
		image: '/images/Certificate.png',
		badge: 'Design',
		badgeClass: 'bg-[#F5A800] text-black',
		rating: '4.9',
		lessons: '18 Lessons',
		duration: '6 Weeks',
		level: 'Beginner',
		description: 'Explore layout, typography, branding, and campaign visuals for modern brands.',
	},
	{
		title: 'Data Analytics Basics',
		image: '/images/students.png',
		badge: 'IT & Software',
		badgeClass: 'bg-[#1E88E5] text-white',
		rating: '4.9',
		lessons: '20 Lessons',
		duration: '7 Weeks',
		level: 'Beginner',
		description: 'Understand spreadsheets, dashboards, and data storytelling with real business data.',
	},
	{
		title: 'Advanced Business Management',
		image: '/images/about.png',
		badge: 'Business',
		badgeClass: 'bg-[#22C55E] text-white',
		rating: '4.9',
		lessons: '36 Lessons',
		duration: '12 Weeks',
		level: 'Advanced',
		description: 'Build strategic leadership skills for operations, planning, and team management.',
	},
	{
		title: 'Full-Stack Web Development',
		image: '/images/students.png',
		badge: 'Development',
		badgeClass: 'bg-[#7C5CFF] text-white',
		rating: '4.8',
		lessons: '40 Lessons',
		duration: '16 Weeks',
		level: 'Advanced',
		description: 'Work through frontend, backend, APIs, databases, and deployment pipelines.',
	},
	{
		title: 'Digital Entrepreneurship',
		image: '/images/Certificate.png',
		badge: 'Business',
		badgeClass: 'bg-[#22C55E] text-white',
		rating: '4.8',
		lessons: '28 Lessons',
		duration: '9 Weeks',
		level: 'Advanced',
		description: 'Launch and grow an online business using product strategy and go-to-market planning.',
	},
	{
		title: 'AI & Machine Learning',
		image: '/images/about.png',
		badge: 'IT & Software',
		badgeClass: 'bg-[#1E88E5] text-white',
		rating: '4.9',
		lessons: '44 Lessons',
		duration: '14 Weeks',
		level: 'Intermediate',
		description: 'Learn model building, evaluation, and practical machine learning workflows.',
	},
	{
		title: 'UI/UX Design Fundamentals',
		image: '/images/students.png',
		badge: 'Design',
		badgeClass: 'bg-[#F5A800] text-black',
		rating: '4.7',
		lessons: '22 Lessons',
		duration: '6 Weeks',
		level: 'Beginner',
		description: 'Learn interface hierarchy, user flows, wireframing, and simple prototypes.',
	},
	{
		title: 'JavaScript Programming',
		image: '/images/about.png',
		badge: 'Development',
		badgeClass: 'bg-[#7C5CFF] text-white',
		rating: '4.8',
		lessons: '30 Lessons',
		duration: '9 Weeks',
		level: 'Intermediate',
		description: 'Build interactive websites, reusable components, and a solid JavaScript foundation.',
	},
	{
		title: 'Python for Data Science',
		image: '/images/Certificate.png',
		badge: 'IT & Software',
		badgeClass: 'bg-[#1E88E5] text-white',
		rating: '4.9',
		lessons: '34 Lessons',
		duration: '12 Weeks',
		level: 'Intermediate',
		description: 'Use Python for analysis, visualization, automation, and machine learning basics.',
	},
	{
		title: 'SEO & Content Strategy',
		image: '/images/students.png',
		badge: 'Marketing',
		badgeClass: 'bg-[#F5A800] text-black',
		rating: '4.8',
		lessons: '26 Lessons',
		duration: '8 Weeks',
		level: 'Beginner',
		description: 'Plan content, research keywords, and grow search visibility with structured tactics.',
	},
];

const levelFilters = [
	['Beginner', '16'],
	['Intermediate', '22'],
	['Advanced', '12'],
] as const;

const durationFilters = [
	['Less than 30 hours', '5'],
	['30 - 100 hours', '18'],
	['100 - 200 hours', '12'],
	['More than 200 hours', '4'],
] as const;

const ratingFilters = [
	['5', '5'],
	['4', '12'],
	['3', '18'],
	['2', '26'],
	['1', '44'],
] as const;

const sortFilters = ['Popular', 'Recent', 'Top Rated', 'A - Z', 'Z - A'] as const;

export default function StudentAllCourses() {
	return (
		<div className="min-h-screen bg-[#f4f2ed] text-[#101010]">
			<StudentDashboardHeader />

			<main className="mx-auto max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pt-6">
				<section className="relative isolate overflow-hidden rounded-[28px] border border-black/5 bg-[#101114] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
					<div className="absolute inset-0">
						<img src="/images/about.png" alt="Students learning together" className="h-full w-full object-cover opacity-25 blur-[1px] grayscale-[20%]" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,168,0,0.22),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(8,8,9,0.72),rgba(8,8,9,0.85))]" />
					</div>

					<div className="relative grid gap-8 px-5 py-8 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-10">
						<div className="max-w-2xl">
							<div className="mb-4 inline-flex items-center gap-3">
								<span className="h-1.5 w-12 rounded-full bg-[#F5A800]" />
								<span className="text-xs font-semibold uppercase tracking-[0.45em] text-white/55">Course Catalog</span>
							</div>
							<h1 className="text-[2.4rem] font-black leading-[0.96] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4rem]">
								<span className="text-white">All</span>{' '}
								<span className="text-[#F5A800]">Courses</span>
							</h1>
							<p className="mt-4 max-w-xl text-[14px] leading-6 text-white/72 sm:text-[15px]">
								Explore our expert-designed courses across multiple domains and take the next step toward your goals.
							</p>

							<div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
								{[
									['50+', 'Courses'],
									['10+', 'Categories'],
									['5000+', 'Happy Learners'],
									['4.8+', 'Average Rating'],
								].map(([value, label]) => (
									<div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
										<div className="text-xl font-extrabold tracking-[-0.04em] text-white">{value}</div>
										<div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">{label}</div>
									</div>
								))}
							</div>
						</div>

						<div className="lg:pl-6">
							<div className="rounded-[22px] border border-white/10 bg-white/8 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
								<div className="flex items-center overflow-hidden rounded-[18px] bg-white">
									<div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
										<Search size={18} className="shrink-0 text-black/35" />
										<input
											type="text"
											defaultValue="Search for courses, topics or skills..."
											className="w-full bg-transparent text-[14px] text-black/75 outline-none placeholder:text-black/35"
										/>
									</div>
									<button type="button" className="flex h-14 w-14 items-center justify-center bg-[#F5A800] text-black transition hover:bg-[#ffbe2f]">
										<Search size={18} strokeWidth={2.5} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-5 rounded-[26px] border border-black/5 bg-white px-4 py-4 shadow-[0_14px_45px_rgba(0,0,0,0.06)] sm:px-5">
					<div className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
						{categoryTabs.map(({ label, count, active, icon: Icon }) => (
							<button
								key={label}
								type="button"
								className={`flex min-w-[160px] items-center gap-3 rounded-[18px] border px-4 py-3 text-left transition ${active ? 'border-[#F5A800]/30 bg-[#F5A800] text-black shadow-[0_12px_25px_rgba(245,168,0,0.25)]' : 'border-black/5 bg-[#fcfcfa] text-[#111111] hover:border-[#F5A800]/20 hover:bg-[#fff9e9]'}`}
							>
								<div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${active ? 'bg-black/10' : 'bg-[#FFF2CC] text-[#F5A800]'}`}>
									<Icon size={18} />
								</div>
								<div className="min-w-0">
									<div className="text-sm font-bold">{label}</div>
									<div className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${active ? 'text-black/70' : 'text-black/45'}`}>{count}</div>
								</div>
							</button>
						))}
						<button type="button" className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/5 text-black/45 transition hover:border-[#F5A800]/25 hover:text-[#F5A800] md:flex">
							<ChevronRight size={16} />
						</button>
					</div>
				</section>

				<section className="mt-5 grid gap-6 lg:grid-cols-[280px_1fr]">
					<aside className="lg:sticky lg:top-24 lg:self-start">
						<div className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_14px_45px_rgba(0,0,0,0.06)]">
							<div className="flex items-center justify-between">
								<h2 className="text-[15px] font-bold text-[#111111]">Filters</h2>
								<Filter size={16} className="text-black/45" />
							</div>

							<FilterBlock title="Level">
								{levelFilters.map(([label, value], index) => (
									<CheckboxRow key={label} label={label} value={value} checked={index === 0} />
								))}
							</FilterBlock>

							<FilterBlock title="Duration">
								{durationFilters.map(([label, value]) => (
									<CheckboxRow key={label} label={label} value={value} />
								))}
							</FilterBlock>

							<FilterBlock title="Rating">
								{ratingFilters.map(([label, value], index) => (
									<RatingRow key={label} label={label} value={value} checked={index === 0} />
								))}
							</FilterBlock>

							<FilterBlock title="Sort By">
								{sortFilters.map((label, index) => (
									<RadioRow key={label} label={label} checked={index === 0} />
								))}
							</FilterBlock>

							<button type="button" className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#F5A800]/30 px-4 py-2.5 text-sm font-semibold text-[#C88900] transition hover:bg-[#FFF7DD]">
								Clear All Filters
								<ArrowRight size={16} />
							</button>
						</div>
					</aside>

					<section className="min-w-0">
						<div className="flex flex-col gap-4 rounded-[24px] border border-black/5 bg-white px-4 py-4 shadow-[0_14px_45px_rgba(0,0,0,0.06)] sm:px-5 lg:flex-row lg:items-center lg:justify-between">
							<p className="text-sm font-medium text-black/58">Showing 1 - 12 of 50 courses</p>

							<div className="flex items-center gap-2">
								<div className="flex items-center overflow-hidden rounded-full border border-black/10 bg-[#fcfcfa]">
									<button type="button" className="flex h-10 w-10 items-center justify-center bg-[#F5A800] text-black">
										<LayoutGrid size={16} />
									</button>
									<button type="button" className="flex h-10 w-10 items-center justify-center text-black/45 transition hover:text-black">
										<List size={16} />
									</button>
								</div>

								<button type="button" className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-[#fcfcfa] px-4 text-sm font-medium text-black/70 transition hover:border-[#F5A800]/25 hover:text-black">
									Sort by Popular
									<ChevronDown size={14} />
								</button>
							</div>
						</div>

						<div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{courses.map((course) => (
								<article key={course.title} className="group overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.1)]">
									<div className="relative h-40 overflow-hidden">
										<img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
										<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
										<span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold ${course.badgeClass}`}>{course.badge}</span>
										<button type="button" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40">
											<Bookmark size={15} />
										</button>
									</div>

									<div className="p-4">
										<h3 className="text-[15px] font-bold leading-6 text-[#111111]">{course.title}</h3>
										<div className="mt-2 flex items-center gap-3 text-[12px] font-semibold text-black/45">
											<span className="inline-flex items-center gap-1 text-[#F5A800]"><Star size={13} fill="currentColor" /> {course.rating}</span>
											<span>{course.duration}</span>
										</div>
										<p className="mt-2 line-clamp-2 text-[12px] leading-5 text-black/48">{course.description}</p>
										<div className="mt-3 flex items-center justify-between gap-3">
											<div className="flex items-center gap-3 text-[11px] font-semibold text-black/48">
												<span className="inline-flex items-center gap-1"><BookOpen size={12} /> {course.lessons}</span>
												<span className="inline-flex items-center gap-1"><Users size={12} /> {course.level}</span>
											</div>
											<button type="button" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A800] text-black transition hover:bg-[#ffbe2f]">
												<ArrowRight size={15} />
											</button>
										</div>
									</div>
								</article>
							))}
						</div>

						<div className="mt-6 flex items-center justify-center gap-2">
							<PaginationButton active>1</PaginationButton>
							<PaginationButton>2</PaginationButton>
							<PaginationButton>3</PaginationButton>
							<PaginationButton>4</PaginationButton>
							<button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-black/55 shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:border-[#F5A800]/25 hover:text-[#F5A800]">
								<ChevronRight size={16} />
							</button>
						</div>

						<section className="mt-6 overflow-hidden rounded-[24px] border border-[#F5A800]/25 bg-[#fff6df] shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
							<div className="grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
								<div className="flex items-center gap-4">
									<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F5A800] text-black shadow-[0_12px_24px_rgba(245,168,0,0.28)]">
										<GraduationCap size={30} />
									</div>
									<div>
										<h3 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#101010]">Still not sure which course to choose?</h3>
										<p className="mt-1 max-w-2xl text-[14px] leading-6 text-black/58">
											Our experts can help you find the perfect course that matches your goals.
										</p>
									</div>
								</div>
								<button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F5A800] px-5 text-sm font-bold text-black transition hover:bg-[#ffbe2f]">
									Get Free Guidance
									<ArrowRight size={16} />
								</button>
							</div>
						</section>
					</section>
				</section>
			</main>

			<StudentDashboardFooter />
		</div>
	);
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="mt-5 border-t border-black/5 pt-5 first:mt-6 first:border-t-0 first:pt-0">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-black/60">{title}</h3>
				<ChevronDown size={14} className="text-black/35" />
			</div>
			<div className="space-y-3">{children}</div>
		</div>
	);
}

function CheckboxRow({ label, value, checked = false }: { label: string; value: string; checked?: boolean }) {
	return (
		<label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-black/70 transition hover:text-black">
			<span className="flex items-center gap-2">
				<span className={`flex h-4 w-4 items-center justify-center rounded-[4px] border ${checked ? 'border-[#F5A800] bg-[#F5A800]' : 'border-black/18 bg-white'}`}>
					{checked ? <span className="h-1.5 w-1.5 rounded-full bg-black" /> : null}
				</span>
				<span className="text-[13px]">{label}</span>
			</span>
			<span className="text-[12px] text-black/40">{value}</span>
		</label>
	);
}

function RatingRow({ label, value, checked = false }: { label: string; value: string; checked?: boolean }) {
	return (
		<label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-black/70 transition hover:text-black">
			<span className="flex items-center gap-2">
				<span className={`flex h-4 w-4 items-center justify-center rounded-full border ${checked ? 'border-[#F5A800] bg-[#F5A800]' : 'border-black/18 bg-white'}`}>
					{checked ? <span className="h-1.5 w-1.5 rounded-full bg-black" /> : null}
				</span>
				<span className="flex items-center gap-0.5 text-[#F5A800]">
					{Array.from({ length: 5 }, (_, index) => (
						<Star key={index} size={11} fill={index < Number(label) ? 'currentColor' : 'none'} />
					))}
				</span>
			</span>
			<span className="text-[12px] text-black/40">{label} &amp; above</span>
			<span className="text-[12px] text-black/40">{value}</span>
		</label>
	);
}

function RadioRow({ label, checked = false }: { label: string; checked?: boolean }) {
	return (
		<label className="flex cursor-pointer items-center gap-3 text-[13px] text-black/70 transition hover:text-black">
			<span className={`flex h-4 w-4 items-center justify-center rounded-full border ${checked ? 'border-[#F5A800] bg-[#F5A800]' : 'border-black/18 bg-white'}`}>
				{checked ? <span className="h-1.5 w-1.5 rounded-full bg-black" /> : null}
			</span>
			<span>{label}</span>
		</label>
	);
}

function PaginationButton({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
	return (
		<button
			type="button"
			className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${active ? 'bg-[#F5A800] text-black shadow-[0_8px_18px_rgba(245,168,0,0.28)]' : 'border border-black/8 bg-white text-black/55 hover:border-[#F5A800]/25 hover:text-[#F5A800]'}`}
		>
			{children}
		</button>
	);
}