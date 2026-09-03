import {
	Bold,
	Camera,
	CalendarDays,
	CheckCircle2,
	ChevronDown,
	Globe2,
	Heart,
	Instagram,
	Italic,
	Link,
	Linkedin,
	MapPin,
	Mail,
	Phone,
	Plus,
	Save,
	ShieldCheck,
	Trash2,
	Underline,
	UploadCloud,
	UserRound,
} from 'lucide-react';
import { useRef, useState } from 'react';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const inputClass = 'h-11 w-full rounded-md border border-black/10 bg-white px-3 text-[12px] text-[#263246] outline-none transition placeholder:text-black/35 focus:border-[#F5A800] focus:ring-2 focus:ring-[#F5A800]/15';
const labelClass = 'mb-2 flex items-center gap-2 text-[11px] font-bold text-[#303846]';
const socialLinks: Array<{ name: string; url: string; icon: typeof Link }> = [
	{ name: 'LinkedIn', url: 'https://linkedin.com/in/emmaoliviya', icon: Linkedin },
	{ name: 'GitHub', url: 'https://github.com/emmaoliviya', icon: Link },
	{ name: 'Portfolio', url: 'https://emmaoliviya.dev', icon: Instagram },
];
						<div className="mt-5"><h2 className="mb-2 text-[11px] font-bold text-[#303846]">Social Links</h2><div className="space-y-2">{socialLinks.map(({ name, url, icon: Icon }) => <div key={name} className="flex items-center overflow-hidden rounded-md border border-black/10"><div className="flex w-32 shrink-0 items-center gap-3 border-r border-black/10 px-3 py-2 text-[11px] font-bold"><Icon size={14} />{name}</div><input className="min-w-0 flex-1 px-3 py-2 text-[11px] outline-none" defaultValue={url} /><button type="button" className="px-4 text-black/45 hover:text-red-500"><Trash2 size={14} /></button></div>)}</div><button type="button" className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-black/10 text-[11px] font-semibold text-black/55 transition hover:border-[#F5A800]/40 hover:text-[#b47700]"><Plus size={14} />Add More Link</button></div>

function Field({ label, icon: Icon, children }: { label: string; icon: typeof UserRound; children: React.ReactNode }) {
	return <label className="block"><span className={labelClass}><Icon size={13} strokeWidth={2.2} />{label}</span>{children}</label>;
}

function ProfilePicturePanel() {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [photo, setPhoto] = useState('/images/students.png');

	const selectPhoto = (file?: File) => {
		if (!file || !file.type.startsWith('image/')) return;
		setPhoto(URL.createObjectURL(file));
	};

	return (
		<div className="px-6 py-9 sm:px-8">
			<div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
				<div>
					<h2 className="text-[13px] font-extrabold text-[#202938]">Current Profile Picture</h2>
					<p className="mt-2 max-w-[220px] text-[12px] leading-5 text-black/55">This is how your profile picture appears to others on the platform.</p>
					<div className="relative mt-7 w-fit">
						<div className="h-48 w-48 overflow-hidden rounded-full border-[7px] border-white bg-[#f1f3f5] shadow-[0_0_0_2px_#e8ebef,0_10px_24px_rgba(16,24,40,0.12)]"><img src={photo} alt="Current profile" className="h-full w-full object-cover" /></div>
						<button type="button" aria-label="Change profile photo" onClick={() => fileInputRef.current?.click()} className="absolute bottom-1 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#344054] shadow-[0_5px_15px_rgba(16,24,40,0.15)] transition hover:text-[#F5A800]"><Camera size={17} /></button>
					</div>
					<div className="mt-7 flex items-center gap-2 pl-7 text-[12px] font-semibold text-[#475467]"><CheckCircle2 size={15} className="fill-[#47c51b] text-white" />Profile photo up to date</div>
				</div>

				<div className="border-black/[0.08] lg:border-l lg:pl-8">
					<h2 className="text-[13px] font-extrabold text-[#202938]">Upload New Photo</h2>
					<p className="mt-2 text-[12px] text-black/55">Choose a new profile picture from your device.</p>
					<input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(event) => selectPhoto(event.target.files?.[0])} />
					<button type="button" onClick={() => fileInputRef.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); selectPhoto(event.dataTransfer.files[0]); }} className="mt-7 flex min-h-[238px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#c7ceda] bg-white px-5 text-center transition hover:border-[#7c5cff] hover:bg-[#fbfaff]">
						<span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1eaff] text-[#7254e8]"><UploadCloud size={24} /></span>
						<span className="mt-5 text-[13px] font-bold text-[#5d6780]">Drag and drop your image here</span>
						<span className="mt-2 text-[12px] font-semibold text-[#5d6780]">or <span className="text-[#7254e8]">browse</span> to upload</span>
					</button>
					<div className="my-7 flex items-center gap-4 text-[12px] font-semibold text-black/45"><span className="h-px flex-1 bg-black/10" />or<span className="h-px flex-1 bg-black/10" /></div>
					<button type="button" onClick={() => setPhoto('')} className="mx-auto flex items-center gap-3 rounded-md border border-black/10 px-6 py-2.5 text-[11px] font-bold text-[#344054] transition hover:border-red-200 hover:text-red-500"><Trash2 size={15} className="text-red-500" />Remove Current Photo</button>
				</div>
			</div>
			<div className="mt-7 flex items-center gap-3 rounded-xl bg-[#f7f3ff] px-5 py-4 text-[11px] text-[#5d6780]"><ShieldCheck size={18} className="shrink-0 text-[#7254e8]" />Your profile picture is public and will be visible to other learners and instructors on the platform.</div>
		</div>
	);
}

export default function StudentProfile() {
	const [activeTab, setActiveTab] = useState<'details' | 'picture'>('details');

	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1180px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
				<section className="overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-[0_10px_32px_rgba(16,24,40,0.06)]">
					<div className="flex flex-col gap-4 border-b border-black/[0.08] px-6 py-6 sm:flex-row sm:items-start sm:justify-between sm:px-8">
						<div><h1 className="text-xl font-extrabold tracking-tight text-[#172033]">Edit Student Profile</h1><p className="mt-1 text-[11px] text-black/50">Update your personal information and preferences</p></div>
						<div className="flex gap-3"><button type="button" className="rounded-md border border-black/10 px-4 py-2 text-[11px] font-bold text-[#3b4350] transition hover:bg-black/[0.03]">Cancel</button><button type="button" className="inline-flex items-center gap-2 rounded-md bg-[#F5A800] px-4 py-2 text-[11px] font-bold text-black shadow-[0_5px_14px_rgba(245,168,0,0.25)] transition hover:bg-[#ffba18]"><Save size={13} />Save Changes</button></div>
					</div>
					<div className="px-6 sm:px-8"><div className="flex gap-8 border-b border-black/[0.08] text-[11px] font-bold"><button type="button" onClick={() => setActiveTab('details')} className={`border-b-2 px-1 py-4 ${activeTab === 'details' ? 'border-[#F5A800] text-[#202938]' : 'border-transparent text-black/45'}`}>Profile Details</button><button type="button" onClick={() => setActiveTab('picture')} className={`border-b-2 px-1 py-4 ${activeTab === 'picture' ? 'border-[#F5A800] text-[#202938]' : 'border-transparent text-black/45'}`}>Profile Picture</button></div></div>

					{activeTab === 'details' ? <form className="px-6 py-6 sm:px-8" onSubmit={(event) => event.preventDefault()}>
						<h2 className="mb-5 text-[13px] font-extrabold text-[#202938]">Personal Information</h2>
						<div className="grid gap-x-7 gap-y-5 md:grid-cols-2">
							<Field label="First Name" icon={UserRound}><input className={inputClass} defaultValue="Emma" /></Field>
							<Field label="Last Name" icon={UserRound}><input className={inputClass} defaultValue="Olivia" /></Field>
							<Field label="Email" icon={Mail}><input type="email" className={inputClass} defaultValue="ammaoliviya@gmail.com" /></Field>
							<Field label="Phone Number" icon={Phone}><div className="flex"><button type="button" className="flex h-11 items-center gap-2 rounded-l-md border border-r-0 border-black/10 bg-white px-3 text-[12px]">🇺🇸 <ChevronDown size={12} /></button><input className={`${inputClass} rounded-l-none`} defaultValue="+1 (555) 123-4567" /></div></Field>
							<Field label="Date of Birth" icon={CalendarDays}><div className="relative"><input className={inputClass} defaultValue="15 May 1998" /><CalendarDays className="absolute right-3 top-3 text-black/55" size={14} /></div></Field>
							<Field label="Gender" icon={Heart}><div className="relative"><select className={`${inputClass} appearance-none`} defaultValue="Female"><option>Female</option><option>Male</option><option>Prefer not to say</option></select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-black/55" size={14} /></div></Field>
							<Field label="Country" icon={Globe2}><div className="relative"><select className={`${inputClass} appearance-none`} defaultValue="United States"><option>United States</option><option>Sri Lanka</option><option>United Kingdom</option></select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-black/55" size={14} /></div></Field>
							<Field label="City" icon={MapPin}><input className={inputClass} defaultValue="New York" /></Field>
							<Field label="Postal Code" icon={MapPin}><input className={inputClass} defaultValue="10001" /></Field>
							<Field label="NIC" icon={UserRound}><input className={inputClass} defaultValue="987654321V" /></Field>
						</div>

						<div className="mt-5"><Field label="Address" icon={MapPin}><textarea className="min-h-[60px] w-full resize-y rounded-md border border-black/10 bg-white px-3 py-3 text-[12px] text-[#263246] outline-none focus:border-[#F5A800] focus:ring-2 focus:ring-[#F5A800]/15" defaultValue="123 Learning Street, Brooklyn, New York, USA" /></Field></div>
						<div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_0.9fr]">
							<div><label className="mb-2 block text-[11px] font-bold text-[#303846]">About Me</label><div className="overflow-hidden rounded-md border border-black/10"><div className="flex items-center gap-5 border-b border-black/10 bg-[#fcfcfc] px-3 py-2 text-black/70"><Bold size={14} /><Italic size={14} /><Underline size={14} /><span className="h-4 w-px bg-black/10" /><Link size={14} /></div><textarea className="min-h-[100px] w-full resize-y px-3 py-3 text-[12px] leading-5 text-[#263246] outline-none" defaultValue={'Passionate learner and tech enthusiast. I love exploring new technologies and improving my skills every day.\nCurrently focusing on Data Science and AI.'} /></div></div>
							<div className="rounded-md border border-[#F5A800]/35 bg-[#fffdf5] p-4"><div className="flex items-center gap-2 text-[12px] font-extrabold text-[#222b38]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5A800] text-black">i</span>Tip to Stand Out</div><ul className="mt-3 space-y-3 text-[11px] text-black/60"><li className="flex gap-2"><span className="text-[#F5A800]">◉</span>Complete your profile for better course recommendations</li><li className="flex gap-2"><span className="text-[#F5A800]">◉</span>Add a professional profile picture</li><li className="flex gap-2"><span className="text-[#F5A800]">◉</span>Write a short and engaging About Me</li><li className="flex gap-2"><span className="text-[#F5A800]">◉</span>Add relevant social links and portfolio</li></ul></div>
						</div>

						<div className="mt-5">
							<h2 className="mb-2 text-[11px] font-bold text-[#303846]">Social Links</h2>
							<div className="space-y-2">
								{socialLinks.map(({ name, url, icon: Icon }) => (
									<div key={name} className="flex items-center overflow-hidden rounded-md border border-black/10 bg-white">
										<div className="flex w-32 shrink-0 items-center gap-3 border-r border-black/10 px-3 py-2.5 text-[11px] font-bold text-[#273142]"><Icon size={14} />{name}</div>
										<input aria-label={`${name} URL`} className="min-w-0 flex-1 px-3 py-2.5 text-[11px] text-[#344054] outline-none" defaultValue={url} />
										<button type="button" aria-label={`Remove ${name} link`} className="px-4 text-black/45 transition hover:text-red-500"><Trash2 size={14} /></button>
									</div>
								))}
							</div>
							<button type="button" className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-black/10 text-[11px] font-semibold text-black/55 transition hover:border-[#F5A800]/40 hover:text-[#b47700]"><Plus size={14} />Add More Link</button>
						</div>

					</form> : <ProfilePicturePanel />}
				</section>
			</main>
		</div>
	);
}
