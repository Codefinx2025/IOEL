import {
	AlignCenter,
	AlignLeft,
	Bold,
	Camera,
	CalendarDays,
	CheckCircle2,
	ChevronDown,
	CircleUserRound,
	Globe2,
	Heart,
	Italic,
	Link,
	List,
	MapPin,
	Mail,
	Phone,
	Save,
	ShieldCheck,
	Trash2,
	Underline,
	UploadCloud,
	UserRound,
} from 'lucide-react';
import { useRef, useState } from 'react';
import LectureDashboardFooter from '../../components/layout/LectureDashboardFooter';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';

const inputClass = 'h-11 w-full rounded-md border border-[#dfe4eb] bg-white px-3 text-[12px] font-medium text-[#52617a] outline-none transition placeholder:text-[#52617a]/45 focus:border-[#f5a800] focus:ring-2 focus:ring-[#f5a800]/15';
const labelClass = 'mb-2 flex items-center gap-2 text-[11px] font-bold text-[#303846]';

function Field({ label, icon: Icon, children }: { label: string; icon: typeof UserRound; children: React.ReactNode }) {
	return <label className="block"><span className={labelClass}><Icon size={13} strokeWidth={2.1} />{label}</span>{children}</label>;
}

const selectClass = `${inputClass} appearance-none`;
const tagClass = 'inline-flex items-center gap-1 rounded-full bg-[#f3f6fa] px-2 py-1 text-[10px] font-semibold text-[#52617a]';

function SelectField({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
	return <label className="block"><span className="mb-2 block text-[11px] font-bold text-[#303846]">{label}</span><div className="relative"><select className={selectClass} defaultValue={value}>{children}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#303846]/70" size={14} /></div></label>;
}

function TagField({ label, tags }: { label: string; tags: string[] }) {
	return <div><span className="mb-2 block text-[11px] font-bold text-[#303846]">{label}</span><div className="flex min-h-11 flex-wrap items-center gap-1.5 rounded-md border border-[#dfe4eb] bg-white px-2 py-1.5">{tags.map((tag) => <span key={tag} className={tagClass}>{tag}<button type="button" aria-label={`Remove ${tag}`} className="text-[#52617a]/60 hover:text-red-500">×</button></span>)}<ChevronDown className="ml-auto shrink-0 text-[#303846]/70" size={14} /></div></div>;
}

function ProfessionalDetails() {
	return <div className="grid gap-7 px-6 py-6 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:gap-8">
		<div className="space-y-5">
			<h2 className="text-[13px] font-extrabold text-[#202938]">Professional Information</h2>
			<label className="block"><span className="mb-2 block text-[11px] font-bold text-[#303846]">Professional Title</span><input className={inputClass} defaultValue="Senior Full Stack Developer & Instructor" /></label>
			<SelectField label="Years of Experience" value="8+ Years"><option>8+ Years</option><option>5-7 Years</option><option>1-4 Years</option></SelectField>
			<SelectField label="Primary Teaching Category" value="Web Development"><option>Web Development</option><option>Data Science</option><option>Artificial Intelligence</option></SelectField>
			<TagField label="Other Teaching Categories" tags={['JavaScript', 'React.js', 'Node.js', 'TypeScript']} />
			<label className="block"><span className="mb-2 block text-[11px] font-bold text-[#303846]">Qualification</span><input className={inputClass} defaultValue="BSc in Computer Science" /></label>
			<TagField label="Certificates" tags={['AWS Certified Developer', 'Google IT Automation']} />
		</div>

		<div className="space-y-5 border-[#dfe4eb] lg:border-l lg:pl-7">
			<div><label className="mb-2 block text-[11px] font-bold text-[#303846]">Instructor Bio</label><div className="overflow-hidden rounded-md border border-[#dfe4eb] bg-white"><div className="flex h-9 items-center gap-4 border-b border-[#dfe4eb] px-3 text-[#303846]"><Bold size={14} /><Italic size={14} /><Underline size={14} /><List size={14} /><AlignLeft size={14} /><AlignCenter size={14} /><Link size={14} /></div><div className="relative"><textarea className="min-h-[153px] w-full resize-none px-3 py-3 text-[11px] font-medium leading-5 text-[#52617a] outline-none" defaultValue={'I\'m Isuru, a full stack developer and online instructor.\nI enjoy teaching modern web technologies and helping\nstudents build real-world projects.\n\nMy goal is to make complex topics simple and practical\nfor everyone.'} /><span className="absolute bottom-3 right-3 text-[9px] font-bold text-[#52617a]">182/500</span></div></div></div>
			<TagField label="Areas of Expertise" tags={['Full Stack Development', 'React.js', 'Node.js', 'JavaScript', 'API Development', 'Database Design']} />
		</div>
	</div>;
}

function ProfilePictureDetails() {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [photo, setPhoto] = useState('/images/students.png');

	const selectPhoto = (file?: File) => {
		if (!file || !file.type.startsWith('image/')) return;
		setPhoto(URL.createObjectURL(file));
	};

	return <>
		<div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
			<div>
				<h2 className="text-[13px] font-extrabold text-[#202938]">Current Profile Picture</h2>
				<p className="mt-2 max-w-[220px] text-[11px] leading-5 text-[#52617a]">This is how your profile picture appears to others on the platform.</p>
				<div className="relative mt-6 w-fit">
					<div className="h-44 w-44 overflow-hidden rounded-full border-[6px] border-white bg-[#edf1f5] shadow-[0_0_0_2px_#e3e8ee,0_10px_24px_rgba(16,24,40,0.12)]">{photo ? <img src={photo} alt="Current instructor profile" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-4xl font-black text-[#f5a800]">JD</div>}</div>
					<button type="button" aria-label="Change profile photo" onClick={() => fileInputRef.current?.click()} className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe4eb] bg-white text-[#52617a] shadow-[0_5px_15px_rgba(16,24,40,0.15)] transition hover:text-[#f5a800]"><Camera size={16} /></button>
				</div>
				<div className="mt-6 flex items-center gap-2 pl-5 text-[11px] font-semibold text-[#475467]"><CheckCircle2 size={14} className="fill-[#47c51b] text-white" />Profile photo up to date</div>
				<p className="mt-2 pl-10 text-[10px] text-[#52617a]">Updated on 12 May 2024</p>
			</div>

			<div className="border-[#dfe4eb] lg:border-l lg:pl-8">
				<h2 className="text-[13px] font-extrabold text-[#202938]">Upload New Photo</h2>
				<p className="mt-2 text-[11px] text-[#52617a]">Choose a new profile picture from your device.</p>
				<input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(event) => selectPhoto(event.target.files?.[0])} />
				<button type="button" onClick={() => fileInputRef.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); selectPhoto(event.dataTransfer.files[0]); }} className="mt-6 flex min-h-[204px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#c7ceda] bg-white px-5 text-center transition hover:border-[#7254e8] hover:bg-[#fbfaff]"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eaff] text-[#7254e8]"><UploadCloud size={22} /></span><span className="mt-4 text-[11px] font-bold text-[#5d6780]">Drag and drop your image here</span><span className="mt-2 text-[11px] font-semibold text-[#5d6780]">or <span className="text-[#7254e8]">browse</span> to upload</span></button>
				<div className="my-6 flex items-center gap-4 text-[11px] font-semibold text-black/45"><span className="h-px flex-1 bg-black/10" />or<span className="h-px flex-1 bg-black/10" /></div>
				<button type="button" onClick={() => setPhoto('')} className="mx-auto flex items-center gap-3 rounded-md border border-[#dfe4eb] px-5 py-2.5 text-[11px] font-bold text-[#344054] transition hover:border-red-200 hover:text-red-500"><Trash2 size={14} className="text-red-500" />Remove Current Photo</button>
			</div>
		</div>
		<div className="mx-6 mb-6 flex items-center gap-2 rounded-md bg-[#f4efff] px-4 py-3 text-[10px] font-semibold text-[#52617a] sm:mx-8"><ShieldCheck size={16} className="shrink-0 text-[#7254e8]" />Your profile picture is public and will be visible to all learners and other instructors on the platform.</div>
	</>;
}

export default function LectureProfile() {
	const [activeTab, setActiveTab] = useState<'profile' | 'professional' | 'picture'>('profile');

	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
			<LectureDashboardHeader />
			<main className="mx-auto max-w-[1180px] px-4 pb-6 pt-5 sm:px-6 lg:px-8">
				<section className="overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-[0_10px_32px_rgba(16,24,40,0.05)]">
					<div className="flex flex-col gap-4 border-b border-black/[0.08] px-6 py-6 sm:flex-row sm:items-start sm:justify-between sm:px-8">
						<div>
							<h1 className="text-xl font-extrabold tracking-tight text-[#172033]">Edit Instructor Profile</h1>
							<p className="mt-1 text-[11px] font-medium text-[#52617a]">Update your professional information and preferences</p>
						</div>
						<div className="flex gap-3">
							<button type="button" className="rounded-md border border-[#dfe4eb] px-4 py-2 text-[11px] font-bold text-[#3b4350] transition hover:bg-black/[0.03]">Cancel</button>
							<button type="submit" form="instructor-profile" className="inline-flex items-center gap-2 rounded-md bg-[#f5a800] px-4 py-2 text-[11px] font-bold text-black shadow-[0_5px_14px_rgba(245,168,0,0.25)] transition hover:bg-[#ffba18]"><Save size={13} />Save Changes</button>
						</div>
					</div>

					<div className="px-6 sm:px-8"><div className="flex flex-wrap gap-8 border-b border-black/[0.08] text-[11px] font-bold"><button type="button" onClick={() => setActiveTab('profile')} className={`border-b-2 px-1 py-4 ${activeTab === 'profile' ? 'border-[#f5a800] text-[#202938]' : 'border-transparent text-black/45'}`}>Profile Details</button><button type="button" onClick={() => setActiveTab('professional')} className={`border-b-2 px-1 py-4 ${activeTab === 'professional' ? 'border-[#f5a800] text-[#202938]' : 'border-transparent text-black/45'}`}>Professional Details</button><button type="button" onClick={() => setActiveTab('picture')} className={`border-b-2 px-1 py-4 ${activeTab === 'picture' ? 'border-[#f5a800] text-[#202938]' : 'border-transparent text-black/45'}`}>Profile Picture</button></div></div>

					{activeTab === 'picture' ? <ProfilePictureDetails /> : activeTab === 'professional' ? <>
						<ProfessionalDetails />
						<div className="mx-6 mb-6 flex items-center gap-2 rounded-md bg-[#f4efff] px-4 py-3 text-[10px] font-semibold text-[#52617a] sm:mx-8"><ShieldCheck size={16} className="shrink-0 text-[#7254e8]" />Your profile is public and will be visible to all learners and instructors on the platform.</div>
					</> : <form id="instructor-profile" className="px-6 py-6 sm:px-8" onSubmit={(event) => event.preventDefault()}>
						<h2 className="mb-5 text-[13px] font-extrabold text-[#202938]">Personal Information</h2>
						<div className="grid gap-x-7 gap-y-5 md:grid-cols-2">
							<Field label="First Name" icon={UserRound}><input className={inputClass} defaultValue="Isuru" /></Field>
							<Field label="Last Name" icon={UserRound}><input className={inputClass} defaultValue="Online" /></Field>
							<Field label="Email" icon={Mail}><input type="email" className={inputClass} defaultValue="isuru.online@example.com" /></Field>
							<Field label="Phone Number" icon={Phone}><div className="flex"><button type="button" aria-label="Select country code" className="flex h-11 items-center gap-2 rounded-l-md border border-r-0 border-[#dfe4eb] bg-white px-3 text-[12px]">🇱🇰 <ChevronDown size={12} /></button><input className={`${inputClass} rounded-l-none`} defaultValue="+94 (77) 123 4567" /></div></Field>
							<Field label="Date of Birth" icon={CalendarDays}><div className="relative"><input className={inputClass} defaultValue="12 August 1990" /><CalendarDays className="absolute right-3 top-3 text-[#303846]/70" size={14} /></div></Field>
							<Field label="Gender" icon={Heart}><div className="relative"><select className={`${inputClass} appearance-none`} defaultValue="Male"><option>Male</option><option>Female</option><option>Prefer not to say</option></select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#303846]/70" size={14} /></div></Field>
							<Field label="Country" icon={Globe2}><div className="relative"><select className={`${inputClass} appearance-none`} defaultValue="Sri Lanka"><option>Sri Lanka</option><option>United States</option><option>United Kingdom</option></select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#303846]/70" size={14} /></div></Field>
							<Field label="City" icon={MapPin}><input className={inputClass} defaultValue="Colombo" /></Field>
							<Field label="Postal Code" icon={MapPin}><input className={inputClass} defaultValue="00100" /></Field>
						</div>

						<div className="mt-5"><Field label="Address" icon={CircleUserRound}><div className="relative"><textarea className="min-h-[74px] w-full resize-none rounded-md border border-[#dfe4eb] bg-white px-3 py-3 text-[12px] font-medium leading-5 text-[#52617a] outline-none transition focus:border-[#f5a800] focus:ring-2 focus:ring-[#f5a800]/15" defaultValue={'123 Galle Road, Colombo 03,\nSri Lanka'} /><span className="absolute bottom-3 right-3 text-[9px] font-bold text-[#52617a]">34/200</span></div></Field></div>
					</form>}
				</section>
			</main>
			<LectureDashboardFooter />
		</div>
	);
}
