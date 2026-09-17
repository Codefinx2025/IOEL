import { useState } from 'react';
import {
	ArrowRight,
	Check,
	ChevronDown,
	CircleHelp,
	CloudUpload,
	FileText,
	Headphones,
	Image,
	Laptop2,
	LockKeyhole,
	PlayCircle,
	Plus,
	Trash2,
} from 'lucide-react';
import LectureDashboardFooter from '../../components/layout/LectureDashboardFooter';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';

const steps = [
	{ number: '1', title: 'Basic Information', detail: 'Course details' },
	{ number: '2', title: 'Curriculum', detail: 'Add sections & lessons' },
	{ number: '3', title: 'Pricing', detail: 'Set course price' },
	{ number: '4', title: 'Preview', detail: 'Review & publish' },
];

const outcomePlaceholders = [
	'Build a strong foundation in Python programming',
	'Create real-world projects step by step',
	'Solve problems and think like a developer',
];

const requirementPlaceholders = [
	'Basic computer skills',
	'No prior programming experience needed',
];

export default function LectureCreateCourse() {
	const [showDraftMessage, setShowDraftMessage] = useState(false);

	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
			<LectureDashboardHeader />

			<main className="mx-auto max-w-[1280px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<h1 className="text-2xl font-extrabold tracking-[-0.03em] sm:text-[28px]">Create New Course</h1>
						<p className="mt-1 text-xs text-[#172033]/60">Build a course that inspires and helps learners grow.</p>
					</div>
					<div className="flex items-center gap-2">
						{showDraftMessage && <span className="text-xs font-medium text-emerald-600">Draft saved</span>}
						<button type="button" onClick={() => setShowDraftMessage(true)} className="rounded-md bg-[#f5a800] px-4 py-2 text-xs font-bold text-[#111111] shadow-[0_5px_14px_rgba(245,168,0,0.2)] transition hover:bg-[#ffb91c]">Save as Draft</button>
						<button type="button" aria-label="Close course creation" className="flex h-8 w-8 items-center justify-center rounded-md border border-[#172033]/10 bg-white text-[#172033]/65 hover:border-[#f5a800]">×</button>
					</div>
				</div>

				<div className="mt-7 grid grid-cols-2 gap-3 border-y border-[#172033]/10 py-4 sm:grid-cols-4 sm:gap-0">
					{steps.map((step, index) => (
						<div key={step.number} className="relative flex items-center gap-2 sm:px-4 first:pl-0">
							<div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${index === 0 ? 'border-[#f5a800] bg-[#fff8e7] text-[#f5a800]' : 'border-[#172033]/15 bg-white text-[#172033]/45'}`}>{step.number}</div>
							<div>
								<p className="text-[10px] font-bold text-[#172033]">{step.title}</p>
								<p className="text-[9px] text-[#172033]/45">{step.detail}</p>
							</div>
							{index < steps.length - 1 && <ArrowRight size={13} className="absolute -right-2 hidden text-[#172033]/20 sm:block" />}
						</div>
					))}
				</div>

				<div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
					<section className="rounded-lg border border-[#172033]/10 bg-white p-4 shadow-[0_5px_18px_rgba(23,32,51,0.03)] sm:p-5">
						<div className="border-b border-[#172033]/8 pb-4">
							<h2 className="text-sm font-bold">Basic Information</h2>
							<p className="mt-1 text-[10px] text-[#172033]/50">Add the essential details about your course.</p>
						</div>

						<div className="mt-4 space-y-4">
							<Field label="Course Title" required>
								<input placeholder="e.g. Complete Python Bootcamp for Beginners" className={inputClass} />
								<FieldCount count="0/100" />
							</Field>
							<Field label="Course Subtitle">
								<input placeholder="e.g. Learn Python from scratch and build real world projects" className={inputClass} />
								<FieldCount count="0/150" />
							</Field>
							<Field label="Short Description" required hint="A brief summary of what your course is about.">
								<textarea placeholder="Write a short description..." className={`${inputClass} min-h-[94px] resize-y py-3`} />
								<FieldCount count="0/250" />
							</Field>

							<div className="grid gap-4 sm:grid-cols-2">
								<SelectField label="Category" placeholder="Select a category" />
								<SelectField label="Level" placeholder="Select level" />
								<SelectField label="Language" placeholder="English" />
								<Field label="Course Tags" hint="Add relevant tags to help learners find your course.">
									<input placeholder="Add tags and press Enter" className={inputClass} />
								</Field>
							</div>

							<Field label="Course Thumbnail" required hint="Upload an eye-catching image that represents your course.">
								<label className="flex min-h-[106px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#172033]/15 bg-[#fdfdfc] text-center transition hover:border-[#f5a800] hover:bg-[#fffaf0]">
									<Image size={25} className="text-[#172033]/45" />
									<span className="mt-2 text-[10px] font-medium text-[#172033]/60">Drag &amp; drop your image here, or</span>
									<span className="mt-1 text-[10px] font-bold text-[#f5a800]">Browse files</span>
									<span className="mt-1 text-[8px] text-[#172033]/40">Recommended size: 1280x720px (16:9)</span>
									<input type="file" accept="image/*" className="hidden" />
								</label>
							</Field>

							<ListField label="What will students learn?" required items={outcomePlaceholders} addLabel="Add Learning Outcome" />
							<ListField label="Course Requirements" items={requirementPlaceholders} addLabel="Add Requirement" hint="What should students know before taking this course?" />
						</div>

						<div className="mt-5 flex items-center justify-end gap-2 border-t border-[#172033]/8 pt-4">
							<button type="button" className="rounded-md border border-[#172033]/15 px-4 py-2 text-[10px] font-semibold text-[#172033]/70">Cancel</button>
							<button type="button" className="inline-flex items-center gap-1 rounded-md bg-[#f5a800] px-4 py-2 text-[10px] font-bold text-[#111111]">Next: Curriculum <ArrowRight size={12} /></button>
						</div>
					</section>

					<aside className="space-y-4">
						<ProgressCard />
						<TipsCard />
						<PreviewCard />
						<SupportCard />
					</aside>
				</div>
			</main>

			<LectureDashboardFooter />
		</div>
	);
}

const inputClass = 'h-9 w-full rounded-md border border-[#172033]/10 bg-white px-3 text-[10px] text-[#172033] outline-none transition placeholder:text-[#172033]/35 focus:border-[#f5a800] focus:ring-2 focus:ring-[#f5a800]/10';

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
	return <label className="block"><span className="flex items-center gap-1 text-[10px] font-bold text-[#172033]">{label}{required && <span className="text-red-500">*</span>}</span>{hint && <span className="mt-1 block text-[8px] text-[#172033]/45">{hint}</span>}<div className="relative mt-2">{children}</div></label>;
}

function FieldCount({ count }: { count: string }) {
	return <span className="absolute bottom-1.5 right-2 text-[7px] text-[#172033]/40">{count}</span>;
}

function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
	return <Field label={label}><div className="relative"><select defaultValue="" className={`${inputClass} appearance-none`}><option value="" disabled>{placeholder}</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select><ChevronDown size={13} className="pointer-events-none absolute right-3 top-3 text-[#172033]/45" /></div></Field>;
}

function ListField({ label, required, hint, items, addLabel }: { label: string; required?: boolean; hint?: string; items: string[]; addLabel: string }) {
	return <Field label={label} required={required} hint={hint}><div className="space-y-1.5">{items.map((item, index) => <div key={item} className="flex items-center gap-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f7f8fa] text-[9px] text-[#172033]/45">{index + 1}</span><input defaultValue={item} className={inputClass} /><button type="button" aria-label={`Remove ${label} ${index + 1}`} className="text-[#172033]/40 hover:text-red-500"><Trash2 size={13} /></button></div>)}</div><button type="button" className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-[#f5a800]"><Plus size={12} />{addLabel}</button></Field>;
}

function ProgressCard() {
	return <Panel title="Course Progress" subtitle="Complete all steps to publish your course."><div className="mx-auto mt-2 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f2f3f5] border-r-[#f5a800] text-center"><span className="text-lg font-extrabold">25%<small className="block text-[7px] font-normal text-[#172033]/45">Complete</small></span></div><div className="mt-3 space-y-2 text-[9px]">{['Basic Information', 'Curriculum', 'Pricing', 'Preview & Publish'].map((item, index) => <div key={item} className="flex items-center gap-2"><span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${index === 0 ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-[#172033]/35'}`}>{index === 0 && <Check size={9} />}</span><span className={index === 0 ? 'font-bold' : 'text-[#172033]/70'}>{item}</span></div>)}</div></Panel>;
}

function TipsCard() {
	return <Panel title="Tips for a Great Course"><div className="mt-3 space-y-3 text-[9px] text-[#172033]/75">{[['Choose a clear and engaging title', 'Make it specific and benefit-driven.'], ['Create a compelling thumbnail', 'Use high-quality images in 16:9 ratio.'], ['Write clear learning outcomes', 'Help students understand what they’ll gain.'], ['Organize your curriculum well', 'Structure your content in logical sections.']].map(([title, detail]) => <div key={title} className="flex gap-2"><Check size={13} className="mt-0.5 shrink-0 text-emerald-500" /><div><p className="font-bold">{title}</p><p className="mt-0.5 text-[8px] text-[#172033]/50">{detail}</p></div></div>)}</div><button type="button" className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold text-[#f5a800]">View Best Practices <ArrowRight size={11} /></button></Panel>;
}

function PreviewCard() {
	return <Panel title="Course Preview"><div className="relative mt-3 flex h-24 items-center justify-center overflow-hidden rounded-md bg-[#fff9e9]"><Laptop2 size={56} className="text-[#172033]" /><span className="absolute flex h-7 w-7 items-center justify-center rounded-md bg-[#f5a800] text-white"><PlayCircle size={17} fill="currentColor" /></span></div><p className="mt-3 text-center text-[8px] text-[#172033]/50">Your course preview will appear here. Add your course details and visual elements to see a preview.</p></Panel>;
}

function SupportCard() {
	return <Panel title="Need Help?"><div className="mt-3 flex items-start gap-2"><Headphones size={20} className="text-[#f5a800]" /><p className="text-[9px] leading-4 text-[#172033]/55">Our support team is here to help you at any time.</p></div><button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-[#172033]/10 py-2 text-[9px] font-bold">Get Support <ArrowRight size={11} /></button></Panel>;
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
	return <section className="rounded-lg border border-[#172033]/10 bg-white p-4"><h2 className="text-[11px] font-bold">{title}</h2>{subtitle && <p className="mt-1 text-[8px] text-[#172033]/45">{subtitle}</p>}{children}</section>;
}
