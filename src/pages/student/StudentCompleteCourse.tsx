import {
	Award,
	BookOpen,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Clock3,
	FileCheck2,
	Grid2X2,
	List,
	Search,
	Star,
} from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const courses = [
	{ category: 'Marketing', title: 'Digital Marketing Fundamentals', description: 'Learn the core concepts of digital marketing and grow your online presence effectively.', image: '/images/students.png', instructor: 'Nimesh K.', rating: '4.8', reviews: '256', date: 'May 20, 2025' },
	{ category: 'Development', title: 'Web Development Essentials', description: 'Build a strong foundation in HTML, CSS, JavaScript and modern web development.', image: '/images/about.png', instructor: 'Anjali Perera', rating: '4.7', reviews: '198', date: 'May 18, 2025' },
	{ category: 'Data Science', title: 'Python for Data Science', description: 'Master Python libraries and techniques for data analysis and visualization.', image: '/images/Certificate.png', instructor: 'Dulanjana M.', rating: '4.9', reviews: '312', date: 'May 15, 2025' },
	{ category: 'Design', title: 'UI/UX Design From Scratch', description: 'Learn the principles of UI/UX design and create beautiful user experiences.', image: '/images/about.png', instructor: 'Sachintha Y.', rating: '4.8', reviews: '144', date: 'May 12, 2025' },
	{ category: 'Data Science', title: 'Data Analytics Basics', description: 'Understand data analysis fundamentals and make data-driven decisions.', image: '/images/students.png', instructor: 'Heshan R.', rating: '4.7', reviews: '142', date: 'May 05, 2025' },
];

const categories = [
	{ name: 'Marketing', value: '2/2', width: '100%', color: '#7c4dff' },
	{ name: 'Development', value: '3/3', width: '100%', color: '#59c94d' },
	{ name: 'Data Science', value: '2/3', width: '68%', color: '#f5a800' },
	{ name: 'Design', value: '2/2', width: '100%', color: '#f03580' },
	{ name: 'Business', value: '1/2', width: '52%', color: '#14c6d1' },
];

export default function StudentCompleteCourse() {
	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#111111]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
				<div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
					<section className="min-w-0">
						<div className="border-b border-black/10 pb-3">
							<p className="text-[10px] text-black/50">Home <span className="px-1">›</span> My Progress</p>
							<h1 className="mt-2 text-[16px] font-extrabold">Completed Courses 🎉</h1>
							<p className="mt-1 text-[10px] text-black/60">Great job! You've completed these courses. Keep learning and growing.</p>
							<nav className="mt-4 flex gap-6 text-[9px] font-semibold sm:gap-8">
								<a href="#progress" className="pb-3 text-black/55">Progress Overview</a>
								<a href="#completed" className="border-b-2 border-[#F5A800] pb-3 text-[#F5A800]">Completed Courses</a>
								<a href="#reviews" className="pb-3 text-black/55">Reviews &amp; Ratings</a>
							</nav>
						</div>

						<div className="mt-3 flex flex-wrap gap-2">
							<div className="flex h-8 min-w-[190px] flex-1 items-center gap-2 rounded-md border border-black/10 bg-white px-2.5 text-[9px] text-black/45"><Search size={12} /><span>Search completed courses...</span></div>
							<FilterSelect label="All Categories" />
							<FilterSelect label="Most Recent" />
							<button type="button" aria-label="Grid view" className="ml-auto flex h-8 w-8 items-center justify-center rounded-md bg-[#F5A800] text-black"><Grid2X2 size={14} /></button>
							<button type="button" aria-label="List view" className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white text-black/45"><List size={14} /></button>
						</div>

						<div id="completed" className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
							{courses.map((course) => <CourseCard key={course.title} course={course} />)}
						</div>
						<div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-black/45"><span>Showing 1 to 5 of 12 courses</span><button type="button" aria-label="Previous page" className="flex h-7 w-7 items-center justify-center rounded border border-black/10 bg-white"><ChevronLeft size={12} /></button><button type="button" className="flex h-7 w-7 items-center justify-center rounded bg-[#F5A800] font-bold text-black">1</button><button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-black/10 bg-white">2</button><button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-black/10 bg-white">3</button><button type="button" aria-label="Next page" className="flex h-7 w-7 items-center justify-center rounded border border-black/10 bg-white"><ChevronRight size={12} /></button></div>
					</section>

					<aside className="space-y-3 xl:pt-1">
						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><div className="flex items-center justify-between"><div><h2 className="text-[10px] font-bold">Your Learning Journey</h2><p className="mt-1 text-[8px] text-black/55">Keep it up! You're doing amazing.</p></div><button type="button" className="text-[8px] text-black/55">This Month <ChevronDown size={10} className="inline" /></button></div><div className="mt-3 h-14 overflow-hidden rounded bg-[#fffaf0]"><svg viewBox="0 0 280 70" className="h-full w-full" preserveAspectRatio="none" aria-label="Learning journey chart"><path d="M0 55 C25 35 38 32 60 48 S90 55 108 35 S135 26 152 42 S180 48 198 30 S225 25 240 37 S265 35 280 18" fill="none" stroke="#F5A800" strokeWidth="2" /></svg></div><div className="mt-2 grid grid-cols-3 gap-1.5"><JourneyStat icon={BookOpen} value="12" label="Courses Completed" /><JourneyStat icon={Clock3} value="128" label="Hours Learned" /><JourneyStat icon={FileCheck2} value="5" label="Certificates Earned" /></div><ActionButton label="View All Certificates" /></section>

						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><div className="flex items-center justify-between"><h2 className="text-[10px] font-bold">Categories Mastered</h2><button type="button" className="text-[8px] font-semibold text-black/60">View all</button></div><div className="mt-3 space-y-2.5">{categories.map((category) => <div key={category.name} className="flex items-center gap-2 text-[8px]"><span className="flex h-3.5 w-3.5 items-center justify-center rounded-full text-[7px] text-white" style={{ backgroundColor: category.color }}>✓</span><span className="w-[68px]">{category.name}</span><span className="h-1 flex-1 rounded-full bg-black/8"><span className="block h-full rounded-full" style={{ width: category.width, backgroundColor: category.color }} /></span><span className="w-5 text-right text-black/55">{category.value}</span></div>)}</div><ActionButton label="Explore More Courses" /></section>

						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Achievements</h2><div className="mt-3 grid grid-cols-4 gap-2 text-center"><Achievement icon={Award} label="Quick Learner" detail="5 Courses" color="#198ee8" /><Achievement icon={Star} label="Consistent" detail="7 Days Streak" color="#66bc31" /><Achievement icon={Award} label="Dedicated" detail="100+ Hours" color="#f5a800" /><Achievement icon={BookOpen} label="Knowledge Seeker" detail="5 Certificates" color="#8d32d8" /></div><ActionButton label="View All Achievements" /></section>
					</aside>
				</div>
			</main>
			<StudentDashboardFooter />
		</div>
	);
}

function FilterSelect({ label }: { label: string }) { return <button type="button" className="flex h-8 min-w-[104px] items-center justify-between gap-3 rounded-md border border-black/10 bg-white px-2.5 text-[9px] font-semibold">{label}<ChevronDown size={11} className="text-black/45" /></button>; }
function JourneyStat({ icon: Icon, value, label }: { icon: typeof BookOpen; value: string; label: string }) { return <div className="rounded border border-black/8 px-1.5 py-2 text-center"><Icon size={13} className="mx-auto text-[#F5A800]" /><strong className="mt-1 block text-[12px]">{value}</strong><span className="block text-[7px] leading-3 text-black/50">{label}</span></div>; }
function ActionButton({ label }: { label: string }) { return <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded bg-[#080808] py-2 text-[8px] font-semibold text-white">{label}<ChevronRight size={11} /></button>; }
function Achievement({ icon: Icon, label, detail, color }: { icon: typeof Award; label: string; detail: string; color: string }) { return <div><span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ backgroundColor: color }}><Icon size={18} /></span><p className="mt-1 text-[7px] font-bold leading-3">{label}</p><span className="text-[7px] text-black/50">{detail}</span></div>; }
function CourseCard({ course }: { course: (typeof courses)[number] }) { return <article className="overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]"><div className="relative"><img src={course.image} alt="" className="h-[82px] w-full object-cover" /><span className="absolute left-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#F5A800] text-[9px] font-bold">✓</span><span className="absolute right-2 top-2 rounded bg-[#19bc74] px-1.5 py-0.5 text-[7px] font-bold text-white">Completed</span></div><div className="p-2"><p className="text-[7px] text-black/45">{course.category}</p><h2 className="mt-1 min-h-[22px] text-[10px] font-extrabold leading-3">{course.title}</h2><p className="mt-1 min-h-[24px] text-[7px] leading-3 text-black/55">{course.description}</p><div className="mt-2 flex items-center gap-1 text-[7px] text-black/50"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-[6px] text-[#F5A800]">{course.instructor.slice(0, 1)}</span>{course.instructor}<span className="ml-auto flex items-center gap-1 text-black/60"><Star size={9} className="text-[#F5A800]" fill="currentColor" />{course.rating} <span>({course.reviews} reviews)</span></span></div><div className="mt-2 flex items-end justify-between border-t border-black/8 pt-2 text-[7px] text-black/50"><span>Completed on<br /><strong className="text-black/70">{course.date}</strong></span><button type="button" className="flex items-center gap-1 rounded border border-black/10 px-2 py-1.5 text-[7px] font-semibold text-black/70"><FileCheck2 size={10} />View Certificate</button></div></div></article>; }
