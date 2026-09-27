import { useState } from 'react';
import {
	ArrowDownToLine,
	ArrowRight,
	BookOpen,
	Check,
	ChevronDown,
	HelpCircle,
	MoreHorizontal,
	ExternalLink,
	FileText,
	GripVertical,
	Headphones,
	Link,
	Plus,
	Video,
} from 'lucide-react';
import LectureDashboardFooter from '../../components/layout/LectureDashboardFooter';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';
import LectureAddLessons from './LectureAddLessons';

type Lesson = { title: string; type: string; icon: 'video' | 'pdf' | 'quiz' | 'assignment' | 'article' | 'link'; duration: string };

const initialSections = [
	{ title: 'Section 1: Getting Started', lessons: [
		{ title: 'Welcome to the Course', type: 'Video', icon: 'video', duration: '08:45' },
		{ title: 'Course Guide (PDF)', type: 'PDF', icon: 'pdf', duration: '2.4 MB' },
		{ title: 'Knowledge Check 1', type: 'Quiz', icon: 'quiz', duration: '10 Questions' },
	] as Lesson[] },
	{ title: 'Section 2: HTML Fundamentals', lessons: [
		{ title: 'HTML Introduction', type: 'Video', icon: 'video', duration: '12:30' },
		{ title: 'HTML Elements', type: 'Video', icon: 'video', duration: '18:20' },
		{ title: 'HTML Notes', type: 'PDF', icon: 'pdf', duration: '3.1 MB' },
		{ title: 'Practice Assignment', type: 'Assignment', icon: 'assignment', duration: 'Due in 7 days' },
	] as Lesson[] },
	{ title: 'Section 3: CSS Basics', lessons: [] },
];

const lessonIcons = { video: Video, pdf: FileText, quiz: HelpCircle, assignment: BookOpen, article: FileText, link: Link };

export default function LectureCourseCurriculum({ onNextPricing }: { onNextPricing?: () => void }) {
	const [sections, setSections] = useState(initialSections);
	const [openSections, setOpenSections] = useState([true, true, false]);
	const [saved, setSaved] = useState(false);
	const [showAddLesson, setShowAddLesson] = useState(false);

	const addLessonToNewSection = (lesson: { title: string; type: 'Video'; duration: string }) => {
		setSections((current) => [...current, { title: `Section ${current.length + 1}: New Section`, lessons: [{ ...lesson, icon: 'video' }] }]);
		setOpenSections((current) => [...current, true]);
	};

	const addLesson = (sectionIndex: number) => {
		setSections((current) => current.map((section, index) => index === sectionIndex
			? { ...section, lessons: [...section.lessons, { title: 'New Lesson', type: 'Video', icon: 'video', duration: '00:00' }] }
			: section));
		setOpenSections((current) => current.map((open, index) => index === sectionIndex ? true : open));
	};

	return <div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
		<LectureDashboardHeader />
		<main className="mx-auto max-w-[1280px] px-3 pb-5 pt-4 sm:px-6 lg:px-8">
			<div className="flex flex-col gap-3 border-b border-[#172033]/10 pb-3 sm:flex-row sm:items-start sm:justify-between">
				<div><h1 className="text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">Create New Course</h1><p className="mt-0.5 text-[10px] text-[#172033]/60">Build high-quality courses and help learners achieve their goals.</p></div>
				<div className="flex items-center gap-2"><span className={`text-[10px] font-semibold text-emerald-600 ${saved ? '' : 'invisible'}`}>Draft saved</span><button type="button" onClick={() => setSaved(true)} className="rounded-md border border-[#172033]/10 bg-white px-3 py-1.5 text-[9px] font-bold">Save as Draft</button><button type="button" onClick={onNextPricing} className="inline-flex items-center gap-2 rounded-md bg-[#f5a800] px-3 py-1.5 text-[9px] font-bold">Next: Pricing <ArrowRight size={11} /></button></div>
			</div>
			<div className="mt-3 grid grid-cols-2 gap-y-3 border-b border-[#172033]/10 pb-3 sm:grid-cols-4 sm:gap-0">
				{['Basic Information', 'Curriculum', 'Pricing', 'Preview'].map((title, index) => <div key={title} className="relative flex items-center gap-2 sm:px-4 first:pl-0"><div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold ${index < 2 ? 'border-[#f5a800] bg-[#fff8e7] text-[#f5a800]' : 'border-[#172033]/15 bg-white text-[#172033]/45'}`}>{index === 0 ? <Check size={12} /> : index + 1}</div><div><p className="text-[9px] font-bold">{title}</p><p className="text-[8px] text-[#172033]/45">{index === 0 ? 'Course details' : index === 1 ? 'Add sections & lessons' : index === 2 ? 'Set course price' : 'Review & publish'}</p></div>{index < 3 && <ArrowRight size={12} className="absolute -right-2 hidden text-[#f5a800] sm:block" />}</div>)}
			</div>
			<div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
				<section className="rounded-md border border-[#172033]/10 bg-white p-3 shadow-[0_5px_18px_rgba(23,32,51,0.03)] sm:p-4">
					<div className="flex items-start justify-between border-b border-[#172033]/8 pb-3"><div><h2 className="flex items-center gap-2 text-xs font-bold"><span className="text-[#f5a800]"><BookOpen size={14} /></span>Curriculum</h2><p className="mt-1 text-[8px] text-[#172033]/45">Organize your course into sections and lessons. You can add videos, documents, quizzes, assignments and more.</p></div><button type="button" onClick={() => setOpenSections(sections.map(() => true))} className="hidden items-center gap-1 text-[8px] font-semibold text-[#172033]/60 sm:flex">Expand All <ChevronDown size={11} /></button></div>
					<div className="mt-3 flex items-center justify-between"><span className="rounded bg-[#f5f6f8] px-2 py-1 text-[8px] font-bold">Course Curriculum <span className="ml-1 font-normal text-[#172033]/50">3 Sections · 11 Lessons</span></span><button type="button" onClick={() => setShowAddLesson(true)} className="inline-flex items-center gap-1 rounded bg-[#172033] px-2 py-1.5 text-[8px] font-bold text-white"><Plus size={10} /> Add Section</button></div>
					<div className="mt-3 space-y-2">{sections.map((section, sectionIndex) => <div key={section.title} className="overflow-hidden rounded border border-[#172033]/10"><button type="button" onClick={() => setOpenSections((current) => current.map((open, index) => index === sectionIndex ? !open : open))} className="flex w-full items-center justify-between bg-[#fbfcfd] px-3 py-2 text-left"><span className="flex items-center gap-2 text-[9px] font-bold"><GripVertical size={11} className="text-[#172033]/45" />{section.title}</span><span className="flex items-center gap-2 text-[8px] text-[#172033]/55">{section.lessons.length} Lessons <ChevronDown size={12} className={`transition ${openSections[sectionIndex] ? 'rotate-180' : ''}`} /></span></button>{openSections[sectionIndex] && <div className="p-1.5">{section.lessons.map((lesson) => <LessonRow key={`${section.title}-${lesson.title}`} lesson={lesson} />)}<button type="button" onClick={() => addLesson(sectionIndex)} className="mt-1 inline-flex items-center gap-1 px-2 py-1 text-[8px] font-bold text-[#f5a800]"><Plus size={10} /> Add Lesson</button></div>}</div>)}</div>
					<button type="button" onClick={() => setShowAddLesson(true)} className="mt-2 flex w-full items-center justify-center gap-1 rounded border border-dashed border-[#f5a800]/60 py-2 text-[8px] font-bold text-[#f5a800]"><Plus size={11} /> Add Section</button>
					<div className="mt-3 flex items-center justify-between border-t border-[#172033]/8 pt-3"><button type="button" className="rounded border border-[#172033]/10 px-3 py-1.5 text-[8px] font-bold">← Back: Basic Information</button><button type="button" onClick={onNextPricing} className="inline-flex items-center gap-2 rounded bg-[#f5a800] px-3 py-1.5 text-[8px] font-bold">Next: Pricing <ArrowRight size={11} /></button></div>
				</section>
				<aside className="space-y-3"><AddLessonPanel /><StoragePanel /><TipsPanel /><SupportPanel /></aside>
			</div>
		</main>
		{showAddLesson && <LectureAddLessons onClose={() => setShowAddLesson(false)} onAddLesson={addLessonToNewSection} />}
		<LectureDashboardFooter />
	</div>;
}

function LessonRow({ lesson }: { lesson: Lesson }) {
	const Icon = lessonIcons[lesson.icon];
	return <div className="flex items-center gap-2 border-b border-[#172033]/5 px-2 py-1.5 last:border-0"><GripVertical size={10} className="shrink-0 text-[#172033]/40" /><span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#eeeaff] text-[#6955d9]"><Icon size={10} /></span><span className="min-w-0 flex-1 truncate text-[8px] font-semibold">{lesson.title}</span><span className="hidden rounded px-1 text-[7px] font-bold text-[#6955d9] sm:inline-block">{lesson.type}</span><span className="w-16 text-right text-[7px] text-[#172033]/45">{lesson.duration}</span><span className="h-2 w-2 rounded-full border border-emerald-500" /><MoreHorizontal size={12} className="text-[#172033]/45" /></div>;
}

function AddLessonPanel() {
	const items = [['video', 'Video Lesson', Video], ['pdf', 'PDF / Document', FileText], ['quiz', 'Quiz', HelpCircle], ['assignment', 'Assignment', BookOpen], ['article', 'Article', FileText], ['link', 'External Link', ExternalLink], ['video', 'Live Session', Video], ['download', 'Downloadable File', ArrowDownToLine]] as const;
	return <Panel title="Add New Lesson" subtitle="Choose a content type to add to your course."><div className="mt-3 grid grid-cols-3 gap-2">{items.map(([key, label, Icon]) => <button type="button" key={`${key}-${label}`} className="flex min-h-12 flex-col items-center justify-center gap-1 rounded border border-[#172033]/8 text-center text-[7px] font-semibold hover:border-[#f5a800]"><Icon size={14} className="text-[#6955d9]" />{label}</button>)}</div></Panel>;
}

function StoragePanel() { return <Panel title="Course Storage"><div className="mt-3 flex items-center justify-between text-[8px] text-[#172033]/50"><span>2.45 GB used of 10 GB</span><span>24%</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-[#edf0f3]"><div className="h-full w-1/4 rounded-full bg-[#6955d9]" /></div></Panel>; }
function TipsPanel() { return <Panel title="Tips for a Great Curriculum"><div className="mt-3 space-y-1 text-[8px] text-[#172033]/65">{['Break your content into short, focused lessons.', 'Use videos, examples and quizzes to engage learners.', 'Provide downloadable resources and notes.', 'Test your course from a student perspective.'].map((tip) => <p key={tip} className="flex gap-1.5"><Check size={10} className="shrink-0 text-emerald-500" />{tip}</p>)}</div><button type="button" className="mt-3 inline-flex items-center gap-1 text-[8px] font-bold text-[#f5a800]">View Curriculum Best Practices <ArrowRight size={10} /></button></Panel>; }
function SupportPanel() { return <section className="rounded-lg bg-[#f1eaff] p-3"><div className="flex items-start gap-2"><Headphones size={17} className="text-[#6955d9]" /><div><h2 className="text-[9px] font-bold">Need Help?</h2><p className="mt-1 text-[8px] leading-3 text-[#172033]/55">Our support team is here to help you at any time.</p></div></div><button type="button" className="mt-3 w-full rounded bg-[#dfd1ff] py-1.5 text-[8px] font-bold">Get Support</button></section>; }
function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) { return <section className="rounded-lg border border-[#172033]/10 bg-white p-3"><h2 className="text-[10px] font-bold">{title}</h2>{subtitle && <p className="mt-0.5 text-[8px] text-[#172033]/45">{subtitle}</p>}{children}</section>; }
