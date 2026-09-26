import { FormEvent, useState } from 'react';
import {
	AlertCircle,
	ChevronDown,
	Image,
	Lightbulb,
	Plus,
	Upload,
	X,
} from 'lucide-react';

type LectureAddLessonsProps = {
	onClose: () => void;
	onAddLesson: (lesson: { title: string; type: 'Video'; duration: string }) => void;
};

const inputClass = 'h-9 w-full rounded-md border border-[#172033]/10 bg-white px-3 text-[10px] text-[#172033] outline-none transition placeholder:text-[#172033]/35 focus:border-[#f5a800] focus:ring-2 focus:ring-[#f5a800]/10';

export default function LectureAddLessons({ onClose, onAddLesson }: LectureAddLessonsProps) {
	const [title, setTitle] = useState('1.1 What is HTML?');
	const [duration, setDuration] = useState('10:45');

	const submit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onAddLesson({ title: title.trim() || 'New Lesson', type: 'Video', duration: duration || '00:00' });
		onClose();
	};

	return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/55 p-3 backdrop-blur-[2px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="add-lesson-title">
		<form onSubmit={submit} className="max-h-[calc(100vh-24px)] w-full max-w-[620px] overflow-y-auto rounded-xl border border-[#172033]/10 bg-white p-4 shadow-[0_24px_70px_rgba(23,32,51,0.24)] sm:max-h-[calc(100vh-48px)] sm:p-5">
			<div className="flex items-start justify-between border-b border-[#172033]/8 pb-3">
				<div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fff3d3] text-[#f5a800]"><Plus size={16} /></span><div><h2 id="add-lesson-title" className="text-sm font-extrabold">Add New Lesson</h2><p className="mt-0.5 text-[8px] text-[#172033]/50">Create a new lesson for your course</p></div></div>
				<button type="button" onClick={onClose} aria-label="Close add lesson dialog" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5f6f8] text-[#172033]/55 transition hover:bg-[#fff3d3] hover:text-[#172033]"><X size={13} /></button>
			</div>

			<div className="mt-4 space-y-3">
				<Field label="Lesson Title" required count="12/200"><input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={200} className={inputClass} /></Field>
				<div className="grid gap-3 sm:grid-cols-2"><SelectField label="Content Type" value="Video Lesson" options={['Video Lesson', 'PDF / Document', 'Quiz', 'Assignment']} /><SelectField label="Video Source" value="Upload Video" options={['Upload Video', 'External URL']} /></div>
				<div className="grid gap-3 sm:grid-cols-[1fr_1.15fr]">
					<div><FieldLabel label="Video File" required /><label className="flex min-h-[118px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#172033]/15 bg-[#fdfdfc] text-center transition hover:border-[#f5a800] hover:bg-[#fffaf0]"><Upload size={24} className="text-[#172033]/45" /><span className="mt-2 text-[9px] font-medium text-[#172033]/60">Drag &amp; drop your video here</span><span className="mt-0.5 text-[9px] font-bold text-[#f5a800]">or click to browse</span><span className="mt-1 text-[8px] text-[#172033]/40">MP4, WebM, MOV up to 2GB</span><input type="file" accept="video/*" className="hidden" /></label></div>
					<div><FieldLabel label="Lesson Preview (Optional)" /><p className="mb-2 text-[8px] text-[#172033]/45">Add a thumbnail image for your lesson</p><div className="flex min-h-[92px] items-center gap-3 rounded-md border border-dashed border-[#172033]/15 p-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#f7f8fa] text-[#172033]/40"><Image size={18} /></span><div><button type="button" className="rounded border border-[#172033]/10 px-3 py-2 text-[9px] font-bold">Upload Thumbnail</button><p className="mt-1 text-[8px] text-[#172033]/40">JPG, PNG up to 5MB</p></div></div></div>
				</div>
				<div className="grid gap-3 sm:grid-cols-[130px_1fr]"><Field label="Duration (Optional)"><div className="relative"><input value={duration} onChange={(event) => setDuration(event.target.value)} className={inputClass} /><AlertCircle size={11} className="absolute right-3 top-3 text-[#172033]/35" /></div></Field><Field label="Lesson Description (Optional)" count="75/600"><textarea defaultValue="In this lesson, you'll learn what HTML is and why it's the foundation of every website." maxLength={600} className={`${inputClass} h-[58px] resize-none py-2`} /></Field></div>
				<div className="flex items-start gap-2 rounded-md border border-[#f5a800]/25 bg-[#fffaf0] px-3 py-2 text-[8px] text-[#172033]/65"><Lightbulb size={13} className="mt-0.5 shrink-0 text-[#f5a800]" /><span><strong>Tip:</strong> A clear title and description help students understand what they'll learn in this lesson.</span></div>
			</div>

			<div className="mt-4 flex justify-end gap-2 border-t border-[#172033]/8 pt-3"><button type="button" onClick={onClose} className="rounded-md border border-[#172033]/10 px-4 py-2 text-[9px] font-bold text-[#172033]/70">Cancel</button><button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#f5a800] px-4 py-2 text-[9px] font-bold text-[#172033] shadow-[0_4px_12px_rgba(245,168,0,0.2)]">Add Lesson <Plus size={11} /></button></div>
		</form>
	</div>;
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) { return <span className="mb-1.5 flex items-center gap-1 text-[9px] font-bold">{label}{required && <span className="text-red-500">*</span>}</span>; }
function Field({ label, required, count, children }: { label: string; required?: boolean; count?: string; children: React.ReactNode }) { return <label className="relative block"><FieldLabel label={label} required={required} />{children}{count && <span className="absolute bottom-1.5 right-2 text-[7px] text-[#172033]/40">{count}</span>}</label>; }
function SelectField({ label, value, options }: { label: string; value: string; options: string[] }) { return <label className="relative block"><FieldLabel label={label} required /><select defaultValue={value} className={`${inputClass} appearance-none`}><option>{value}</option>{options.filter((option) => option !== value).map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={13} className="pointer-events-none absolute right-3 top-7 text-[#172033]/45" /></label>; }
