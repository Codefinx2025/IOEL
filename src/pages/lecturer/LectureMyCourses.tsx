import {
	BarChart3,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Filter,
	Grid2X2,
	List,
	MoreVertical,
	Pencil,
	Plus,
	Search,
	UsersRound,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';

type CourseStatus = 'Published' | 'Draft' | 'Archived';

interface Course {
	title: string;
	category: string;
	status: CourseStatus;
	lessons: number;
	students: string;
	price: string;
	rating: string;
	updated: string;
	thumbnail: string;
	accent: string;
}

const courses: Course[] = [
	{ title: 'Complete React Development', category: 'Web Development', status: 'Published', lessons: 25, students: '1,245', price: '$49.99', rating: '4.8', updated: '3 days ago', thumbnail: 'REACT\nDEVELOPMENT', accent: 'from-[#21115e] via-[#29116f] to-[#321082]' },
	{ title: 'Modern JavaScript Mastery', category: 'Web Development', status: 'Published', lessons: 18, students: '845', price: '$39.99', rating: '4.9', updated: '1 week ago', thumbnail: 'JAVASCRIPT\nMASTERY', accent: 'from-[#101820] via-[#172b32] to-[#253026]' },
	{ title: 'Python for Beginners', category: 'Programming', status: 'Published', lessons: 20, students: '632', price: '$34.99', rating: '4.7', updated: '2 weeks ago', thumbnail: 'PYTHON\nFOR BEGINNERS', accent: 'from-[#07365b] via-[#0d496b] to-[#132b54]' },
	{ title: 'Node.js Bootcamp', category: 'Web Development', status: 'Published', lessons: 22, students: '512', price: '$44.99', rating: '4.6', updated: '2 weeks ago', thumbnail: 'NODE.JS\nBOOTCAMP', accent: 'from-[#0c3b2d] via-[#0e5337] to-[#163f2a]' },
	{ title: 'UI/UX Design Fundamentals', category: 'Design', status: 'Draft', lessons: 15, students: '423', price: '$29.99', rating: '4.7', updated: '4 days ago', thumbnail: 'UI/UX DESIGN\nFUNDAMENTALS', accent: 'from-[#8c4705] via-[#d47716] to-[#f4a02a]' },
	{ title: 'SQL Essentials for Everyone', category: 'Database', status: 'Draft', lessons: 16, students: '311', price: '$24.99', rating: '4.5', updated: '1 week ago', thumbnail: 'SQL\nESSENTIALS', accent: 'from-[#082f56] via-[#0b426d] to-[#12365a]' },
	{ title: 'Digital Marketing Complete Guide', category: 'Marketing', status: 'Published', lessons: 19, students: '289', price: '$34.99', rating: '4.6', updated: '3 weeks ago', thumbnail: 'DIGITAL\nMARKETING', accent: 'from-[#aa245d] via-[#8e38ad] to-[#254bc0]' },
	{ title: 'Advanced PHP Development', category: 'Web Development', status: 'Archived', lessons: 21, students: '256', price: '$39.99', rating: '4.4', updated: '1 month ago', thumbnail: 'ADVANCED\nPHP DEVELOPMENT', accent: 'from-[#34434c] via-[#50616a] to-[#29383e]' },
];

const statusTabs: { label: string; status?: CourseStatus; count: string }[] = [
	{ label: 'All Courses', count: '12' },
	{ label: 'Published', status: 'Published', count: '8' },
	{ label: 'Draft', status: 'Draft', count: '3' },
	{ label: 'Archived', status: 'Archived', count: '1' },
];

function CourseThumbnail({ course }: { course: Course }) {
	return <div className={`relative flex h-[112px] items-center overflow-hidden bg-gradient-to-br ${course.accent} px-4 text-white`}>
		<div className="absolute -right-3 -top-8 h-28 w-28 rounded-full border-[14px] border-white/10" />
		<div className="absolute bottom-[-28px] left-1/2 h-20 w-36 -translate-x-1/2 rotate-[-16deg] border-8 border-white/10" />
		<div className="relative z-10 max-w-[76%]"><p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/70">IOEL COURSE</p><p className="mt-1 whitespace-pre-line text-[16px] font-black leading-[1.05] tracking-wide">{course.thumbnail}</p></div>
		<span className="absolute right-2 top-2 rounded bg-black/45 px-1.5 py-1 text-[7px] font-bold">{course.lessons} LESSONS</span>
	</div>;
}

function CourseCard({ course }: { course: Course }) {
	const statusColor = course.status === 'Published' ? 'bg-[#21a34a]' : course.status === 'Draft' ? 'bg-[#2478d2]' : 'bg-[#777f88]';
	return <article className="overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_4px_12px_rgba(16,24,40,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,24,40,0.09)]">
		<CourseThumbnail course={course} />
		<div className="px-3 py-2.5"><h2 className="truncate text-[11px] font-extrabold text-[#172033]">{course.title}</h2><p className="mt-1 text-[8px] text-[#52617a]">{course.category}</p><div className="mt-2 flex items-center justify-between text-[8px] text-[#52617a]"><span className="text-[#f5a800]">★ <span className="text-[#52617a]">{course.rating}</span></span><span>{course.students} Students</span><span className="font-bold text-[#52617a]">{course.price}</span></div><div className="mt-2 flex items-center justify-between text-[8px]"><span className="flex items-center gap-1 font-semibold text-[#52617a]"><span className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />{course.status}</span><span className="text-[#8993a4]">Updated {course.updated}</span></div></div>
		<div className="flex items-center justify-between border-t border-black/[0.07] px-3 py-2 text-[#52617a]"><button type="button" aria-label={`Edit ${course.title}`} className="hover:text-[#f5a800]"><Pencil size={12} /></button><button type="button" aria-label={`View analytics for ${course.title}`} className="hover:text-[#f5a800]"><BarChart3 size={12} /></button><button type="button" aria-label={`View students for ${course.title}`} className="hover:text-[#f5a800]"><UsersRound size={12} /></button><button type="button" aria-label={`More actions for ${course.title}`} className="hover:text-[#f5a800]"><MoreVertical size={13} /></button></div>
	</article>;
}

export default function LectureMyCourses() {
	const [activeStatus, setActiveStatus] = useState<CourseStatus | 'All'>('All');
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState('Last Updated');
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

	const filteredCourses = useMemo(() => {
		const visible = courses.filter((course) => (activeStatus === 'All' || course.status === activeStatus) && course.title.toLowerCase().includes(query.toLowerCase()));
		return [...visible].sort((a, b) => sort === 'Course Name' ? a.title.localeCompare(b.title) : b.updated.localeCompare(a.updated));
	}, [activeStatus, query, sort]);

	return <div className="min-h-screen bg-[#fbfbfa] text-[#172033]"><LectureDashboardHeader /><main className="mx-auto max-w-[1400px] px-4 pb-6 pt-5 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><h1 className="text-xl font-extrabold tracking-tight">My Courses</h1><p className="mt-1 text-[10px] text-[#52617a]">Manage, update and track the performance of your courses.</p></div><button type="button" onClick={() => { window.history.pushState({}, '', '/lecture-create-course'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="inline-flex items-center justify-center gap-1.5 self-start rounded-md bg-[#f5a800] px-4 py-2.5 text-[10px] font-bold text-black shadow-[0_5px_14px_rgba(245,168,0,0.2)]"><Plus size={13} />Create New Course</button></div>
		<section className="mt-5 overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_5px_18px_rgba(16,24,40,0.03)]"><div className="flex flex-col justify-between gap-3 border-b border-black/[0.08] px-3 pt-3 sm:flex-row sm:items-start"><div className="flex gap-5 overflow-x-auto text-[9px] font-bold">{statusTabs.map((tab) => <button key={tab.label} type="button" onClick={() => setActiveStatus(tab.status ?? 'All')} className={`whitespace-nowrap border-b-2 px-1 pb-3 ${activeStatus === (tab.status ?? 'All') ? 'border-[#f5a800] text-[#f5a800]' : 'border-transparent text-[#52617a]'}`}>{tab.label}<span className={`ml-2 rounded-full px-1.5 py-0.5 text-[8px] ${activeStatus === (tab.status ?? 'All') ? 'bg-[#fff4d8] text-[#d08d00]' : 'bg-[#f1f3f6] text-[#52617a]'}`}>{tab.count}</span></button>)}</div><div className="flex items-center gap-2 pb-2 sm:pb-3"><label className="flex items-center gap-2 text-[9px] text-[#52617a]">Sort by:<select value={sort} onChange={(event) => setSort(event.target.value)} className="appearance-none rounded border border-black/10 bg-white px-2 py-1.5 pr-6 font-semibold outline-none"><option>Last Updated</option><option>Course Name</option></select><ChevronDown size={11} className="pointer-events-none -ml-6" /></label><button type="button" className="inline-flex items-center gap-1 rounded border border-black/10 px-2.5 py-1.5 text-[9px] font-semibold text-[#52617a]"><Filter size={11} />Filter</button></div></div>
			<div className="flex flex-col gap-3 border-b border-black/[0.08] px-3 py-3 sm:flex-row sm:items-center sm:justify-between"><label className="flex h-8 max-w-[300px] flex-1 items-center gap-2 rounded-md border border-black/10 px-2.5 text-[#8993a4]"><Search size={13} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search my courses..." className="w-full bg-transparent text-[9px] text-[#172033] outline-none placeholder:text-[#8993a4]" /></label><div className="flex self-end rounded border border-black/10"><button type="button" aria-label="Grid view" onClick={() => setViewMode('grid')} className={`flex h-7 w-8 items-center justify-center ${viewMode === 'grid' ? 'bg-[#fff8e7] text-[#f5a800]' : 'text-[#52617a]'}`}><Grid2X2 size={13} /></button><button type="button" aria-label="List view" onClick={() => setViewMode('list')} className={`flex h-7 w-8 items-center justify-center ${viewMode === 'list' ? 'bg-[#fff8e7] text-[#f5a800]' : 'text-[#52617a]'}`}><List size={13} /></button></div></div>
			<div className={viewMode === 'grid' ? 'grid gap-4 p-3 sm:grid-cols-2 lg:grid-cols-4' : 'grid gap-3 p-3'}>{filteredCourses.map((course) => <CourseCard key={course.title} course={course} />)}</div>
			<div className="flex flex-col items-center justify-between gap-3 border-t border-black/[0.08] px-4 py-3 text-[8px] text-[#8993a4] sm:flex-row"><span>Showing 1 to {filteredCourses.length} of 12 courses</span><div className="flex items-center gap-2"><button type="button" aria-label="Previous page" className="flex h-7 w-7 items-center justify-center rounded border border-black/10"><ChevronLeft size={12} /></button><button type="button" className="flex h-7 w-7 items-center justify-center rounded bg-[#f5a800] font-bold text-black">1</button><button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-black/10">2</button><button type="button" aria-label="Next page" className="flex h-7 w-7 items-center justify-center rounded border border-black/10"><ChevronRight size={12} /></button></div><label className="flex items-center gap-2">Courses per page <select className="rounded border border-black/10 bg-white px-2 py-1 outline-none"><option>8</option><option>12</option></select></label></div>
		</section></main><StudentDashboardFooter /></div>;
}
