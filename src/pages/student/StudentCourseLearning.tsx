import {
	ArrowLeft,
	ArrowRight,
	Check,
	ChevronDown,
	ChevronRight,
	Circle,
	Clock3,
	Download,
	FileText,
	Expand,
	Headphones,
	List,
	Play,
	Settings2,
	Share2,
	SquarePen,
	Tv,
} from 'lucide-react';
import type { ReactNode } from 'react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const sectionItems = [
	'1. Welcome & Setup',
	'2. Foundations of AI Agents',
	'3. Building Your First Agent',
	'4. Tools, Memory & Planning',
	'5. RAG & Knowledge Agents',
	'6. Multi-Agent Systems with LangGraph',
	'7. Real-World Agent Projects',
	'8. Deploy, Scale & Next Steps',
];

const lessonTiles = [
	{ title: '1. Introduction to AI Agents and Course Overview', duration: '18:36', active: true, image: '/images/students.png' },
	{ title: '2. Course Structure & Learning Path', duration: '06:12', image: '/images/about.png' },
	{ title: '3. Environment Setup & Tools Overview', duration: '03:44', image: '/images/Certificate.png' },
	{ title: '4. What is an AI Agent?', duration: '12:30', image: '/images/students.png' },
	{ title: '5. Types of AI Agents', duration: '14:18', image: '/images/about.png' },
];

export default function StudentCourseLearning() {
	return (
		<div className="min-h-screen bg-[#f8f8f5] text-[#151515]">
			<StudentDashboardHeader />

			<main className="mx-auto max-w-[1400px] px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-6">
				<div className="mb-4 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] font-medium text-black/45">
					<span>Home</span>
					<ChevronRight size={12} />
					<span>Courses</span>
					<ChevronRight size={12} />
					<span>AI Engineer Agentic Track: The Complete Agent & MCP Course</span>
					<ChevronRight size={12} />
					<span>Section 1: Welcome & Setup</span>
					<ChevronRight size={12} />
					<span className="text-black/70">Lecture 1</span>
				</div>

				<div className="grid gap-6 lg:grid-cols-[1.55fr_0.9fr]">
					<section className="min-w-0">
						<div className="mb-3 flex items-center gap-3">
							<h1 className="text-[33px] font-black leading-none tracking-[-0.03em] text-[#171717]">Lecture Details</h1>
							<span className="rounded-full bg-[#FFF3CF] px-3 py-1 text-[11px] font-semibold text-[#D08D00]">Section 1: Welcome & Setup</span>
						</div>

						<h2 className="text-[31px] font-extrabold leading-tight tracking-[-0.03em] text-[#141414] sm:text-[35px]">Lecture 1: Introduction to AI Agents and Course Overview</h2>
						<p className="mt-2 text-sm text-black/55">Get a high-level overview of what AI agents are, how they work, and what you will build in this course.</p>

						<div className="mt-4 overflow-hidden rounded-[10px] border border-black/10 bg-black shadow-[0_10px_26px_rgba(0,0,0,0.14)]">
							<div className="relative h-[240px] sm:h-[300px] lg:h-[360px]">
								<img src="/images/about.png" alt="Lecture video" className="h-full w-full object-cover" />
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.7)_100%)]" />
								<div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
									<div className="flex items-center gap-2 text-white sm:gap-3">
										<button type="button" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white sm:h-8 sm:w-8">
											<Play size={14} fill="currentColor" />
										</button>
										<span className="text-[11px] font-medium text-white/90 sm:text-xs">02:45 / 18:36</span>
										<div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
											<div className="h-full w-[13%] rounded-full bg-white" />
										</div>
										<button type="button" className="rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/35">CC</button>
										<button type="button" className="rounded p-1 text-white ring-1 ring-white/35"><Settings2 size={12} /></button>
										<button type="button" className="rounded p-1 text-white ring-1 ring-white/35"><Expand size={12} /></button>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-3 grid gap-2 sm:grid-cols-3">
							<button type="button" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-black/10 bg-white px-3 py-2.5 text-xs font-medium text-black/75 transition hover:bg-black/[0.02]">
								<Check size={14} /> Mark as completed
							</button>
							<button type="button" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-black/10 bg-white px-3 py-2.5 text-xs font-medium text-black/75 transition hover:bg-black/[0.02]">
								<SquarePen size={14} /> Add notes
							</button>
							<button type="button" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#F5A800]/35 bg-[#F5A800] px-3 py-2.5 text-xs font-semibold text-black transition hover:bg-[#ffbb28]">
								<Download size={14} /> Download notes (PDF)
							</button>
						</div>

						<section className="mt-4 rounded-[10px] border border-black/10 bg-white p-4 sm:p-5">
							<h3 className="text-[18px] font-bold text-[#161616]">About this lecture</h3>
							<p className="mt-2 text-sm leading-6 text-black/60">
								This lecture introduces the core concept of AI agents, how they differ from traditional automation, and the exciting projects you will build throughout this course.
							</p>

							<div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
								<InfoPill icon={<Clock3 size={14} />} label="Duration" value="18:36" />
								<InfoPill icon={<Tv size={14} />} label="Lecture" value="1 of 3" />
								<InfoPill icon={<List size={14} />} label="Section" value="1 of 8" />
								<InfoPill icon={<Circle size={14} />} label="Level" value="Intermediate" />
							</div>
						</section>

						<section className="mt-4 rounded-[10px] border border-black/10 bg-white p-4 sm:p-5">
							<h3 className="text-[18px] font-bold text-[#161616]">What you will learn in this lecture</h3>
							<ul className="mt-3 space-y-2.5 text-sm text-black/62">
								<li className="flex items-start gap-2.5"><span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F5A800]" /> Understand what AI agents are and their real-world applications</li>
								<li className="flex items-start gap-2.5"><span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F5A800]" /> Learn the key components of an AI agent system</li>
								<li className="flex items-start gap-2.5"><span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F5A800]" /> Explore the tools and technologies used in this course</li>
								<li className="flex items-start gap-2.5"><span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F5A800]" /> Overview of the complete learning path and outcomes</li>
							</ul>
						</section>

						<section className="mt-4 rounded-[10px] border border-black/10 bg-white p-4 sm:p-5">
							<h3 className="text-[18px] font-bold text-[#161616]">Resources</h3>
							<div className="mt-3 flex flex-col gap-2 rounded-[8px] border border-black/10 bg-[#fafaf7] p-3 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex items-center gap-3">
									<span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#FFF3CF] text-[#D08D00]"><FileText size={17} /></span>
									<div>
										<div className="text-sm font-semibold text-[#171717]">Lecture 1 - Slides & Notes (PDF)</div>
										<div className="text-xs text-black/52">PDF • 2.4 MB</div>
									</div>
								</div>
								<button type="button" className="rounded-[8px] border border-black/15 bg-white px-3 py-2 text-xs font-semibold text-black/72 transition hover:bg-black/[0.02]">Download</button>
							</div>
						</section>

						<div className="mt-4 grid gap-2 sm:grid-cols-2">
							<button type="button" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-black/12 bg-white px-3 py-2.5 text-xs font-semibold text-black/72 transition hover:bg-black/[0.02]">
								<ArrowLeft size={14} /> Previous Lecture
							</button>
							<button type="button" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#F5A800]/35 bg-[#F5A800] px-3 py-2.5 text-xs font-semibold text-black transition hover:bg-[#ffbe2f]">
								Next Lecture <ArrowRight size={14} />
							</button>
						</div>

						<section className="mt-4 rounded-[10px] border border-black/10 bg-white p-4 sm:p-5">
							<div className="mb-3 flex items-center justify-between gap-3">
								<h3 className="text-[18px] font-bold text-[#161616]">More lectures in this subject</h3>
								<div className="flex items-center gap-2">
									<button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-black/15 text-black/60"><ArrowLeft size={13} /></button>
									<button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-black/15 text-black/60"><ArrowRight size={13} /></button>
								</div>
							</div>

							<div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-5">
								{lessonTiles.map((lesson) => (
									<article key={lesson.title} className={`overflow-hidden rounded-[9px] border ${lesson.active ? 'border-[#F5A800]/50 bg-[#fff9e9]' : 'border-black/12 bg-white'} transition hover:border-[#F5A800]/35`}>
										<div className="relative h-20 overflow-hidden">
											<img src={lesson.image} alt={lesson.title} className="h-full w-full object-cover" />
											<div className="absolute inset-0 bg-black/35" />
											<span className="absolute inset-0 flex items-center justify-center text-white"><Play size={16} fill="currentColor" /></span>
										</div>
										<div className="p-2.5">
											<div className="line-clamp-2 text-[11px] font-semibold leading-4 text-[#161616]">{lesson.title}</div>
											<div className="mt-1.5 text-[10px] text-black/55">{lesson.duration}</div>
										</div>
									</article>
								))}
							</div>
						</section>
					</section>

					<aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
						<section className="rounded-[10px] border border-black/10 bg-white p-4">
							<div className="flex items-end justify-between gap-2">
								<div>
									<p className="text-[13px] font-semibold text-black/70">Your progress</p>
									<p className="mt-1 text-[11px] text-black/50">3 of 38 lectures completed</p>
								</div>
								<span className="text-[26px] font-extrabold text-[#F5A800]">12%</span>
							</div>
							<div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
								<div className="h-full w-[12%] rounded-full bg-[#F5A800]" />
							</div>
						</section>

						<section className="rounded-[10px] border border-black/10 bg-white p-4">
							<div className="mb-2">
								<h3 className="text-[15px] font-bold text-[#161616]">Course content</h3>
								<p className="text-[11px] text-black/48">8 sections • 38 lectures</p>
							</div>

							<div className="space-y-1.5">
								<div className="rounded-[8px] border border-black/10 bg-[#fcfcfa] p-2.5">
									<button type="button" className="flex w-full items-center justify-between text-left">
										<div>
											<div className="text-[12px] font-semibold text-[#161616]">1. Welcome & Setup</div>
											<div className="text-[10px] text-black/48">3 lectures • 28 min</div>
										</div>
										<ChevronDown size={14} className="text-black/45" />
									</button>
									<div className="mt-2 space-y-1.5 text-[11px]">
										<ContentRow label="1. Introduction to AI Agents and Course Overview" time="18:36" active />
										<ContentRow label="2. Course Structure & Learning Path" time="06:12" />
										<ContentRow label="3. Environment Setup & Tools Overview" time="03:44" />
									</div>
								</div>

								{sectionItems.slice(1).map((item) => (
									<button
										key={item}
										type="button"
										className="flex w-full items-center justify-between rounded-[8px] border border-black/10 bg-white px-2.5 py-2 text-left transition hover:bg-black/[0.02]"
									>
										<div>
											<div className="text-[12px] font-semibold text-[#161616]">{item}</div>
											<div className="text-[10px] text-black/48">5 lectures • 45 min</div>
										</div>
										<ChevronRight size={14} className="text-black/45" />
									</button>
								))}
							</div>
						</section>

						<section className="rounded-[10px] border border-black/10 bg-white p-4">
							<div className="flex items-start gap-3">
								<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3CF] text-[#D08D00]"><Headphones size={16} /></span>
								<div>
									<h3 className="text-[14px] font-bold text-[#161616]">Need help?</h3>
									<p className="mt-1 text-[11px] leading-5 text-black/55">If you have any questions or need support, feel free to reach out to our support team.</p>
									<button type="button" className="mt-3 rounded-[8px] border border-black/12 bg-white px-3 py-2 text-xs font-semibold text-black/72 transition hover:bg-black/[0.02]">Contact Support</button>
								</div>
							</div>
						</section>

						<section className="rounded-[10px] border border-black/10 bg-white p-4">
							<div className="flex items-start gap-3">
								<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3CF] text-[#D08D00]"><Share2 size={16} /></span>
								<div>
									<h3 className="text-[14px] font-bold text-[#161616]">Share this lecture</h3>
									<p className="mt-1 text-[11px] leading-5 text-black/55">Share this lecture with your friends or classmates.</p>
									<button type="button" className="mt-3 rounded-[8px] border border-black/12 bg-white px-3 py-2 text-xs font-semibold text-black/72 transition hover:bg-black/[0.02]">Share Lecture</button>
								</div>
							</div>
						</section>
					</aside>
				</div>
			</main>

			<StudentDashboardFooter />
		</div>
	);
}

function InfoPill({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
	return (
		<div className="flex items-center gap-2 rounded-[8px] border border-black/10 bg-[#fcfcfa] px-3 py-2.5">
			<span className="text-[#D08D00]">{icon}</span>
			<div>
				<div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-black/45">{label}</div>
				<div className="text-[12px] font-semibold text-[#161616]">{value}</div>
			</div>
		</div>
	);
}

function ContentRow({ label, time, active = false }: { label: string; time: string; active?: boolean }) {
	return (
		<div className={`flex items-start justify-between gap-2 rounded-[7px] px-2 py-1.5 ${active ? 'bg-[#FFF6DD]' : 'bg-white'}`}>
			<div className="flex items-start gap-1.5">
				<Play size={11} className={active ? 'mt-0.5 text-[#D08D00]' : 'mt-0.5 text-black/40'} fill={active ? 'currentColor' : 'none'} />
				<span className={`leading-4 ${active ? 'font-semibold text-[#161616]' : 'text-black/65'}`}>{label}</span>
			</div>
			<span className="shrink-0 text-[10px] text-black/45">{time}</span>
		</div>
	);
}
