import {
	Award,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Download,
	ExternalLink,
	Search,
	Share2,
	X,
} from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const certificates = [
	{ title: 'Digital Marketing Fundamentals', date: 'May 20, 2025', image: '/images/students.png', recipient: 'Nimesh K.' },
	{ title: 'Web Development Essentials', date: 'May 18, 2025', image: '/images/about.png', recipient: 'Nimesh K.' },
	{ title: 'Python for Data Science', date: 'May 15, 2025', image: '/images/Certificate.png', recipient: 'Nimesh K.' },
	{ title: 'UI/UX Design From Scratch', date: 'Apr 28, 2025', image: '/images/about.png', recipient: 'Nimesh K.' },
	{ title: 'Data Analytics Basics', date: 'Apr 05, 2025', image: '/images/students.png', recipient: 'Nimesh K.' },
];

export default function StudentMyCertificates() {
	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#111111]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
				<div className="mb-4 flex items-center gap-1.5 text-[10px] text-black/50">Home <ChevronRight size={11} /> <span className="text-black/80">My Certificates</span></div>
				<div className="mb-5">
					<h1 className="text-[17px] font-extrabold">My Certificates</h1>
					<p className="mt-1 text-[9px] text-black/55">Celebrate your achievements and showcase your skills.</p>
				</div>

				<div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
					<section className="min-w-0">
						<div className="flex flex-wrap gap-2">
							<div className="flex h-7 min-w-[150px] flex-1 items-center gap-2 rounded-md border border-black/10 bg-white px-2.5 text-[8px] text-black/45"><Search size={11} /> Search certificates...</div>
							<Filter label="All Categories" />
							<Filter label="Most Recent" />
							<button type="button" aria-label="Grid view" className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F5A800] text-black">▦</button>
							<button type="button" aria-label="List view" className="flex h-7 w-7 items-center justify-center rounded-md border border-black/10 bg-white text-black/45">☷</button>
						</div>

						<div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
							{certificates.map((certificate) => <CertificateCard key={certificate.title} certificate={certificate} />)}
							<div className="flex min-h-[175px] flex-col items-center justify-center rounded-lg border border-dashed border-[#F5A800]/40 bg-[#fffdf7] p-4 text-center"><Award size={32} className="text-[#F5A800]" /><h2 className="mt-3 text-[10px] font-bold">Keep Learning, Keep Earning!</h2><p className="mt-1 text-[8px] text-black/50">Complete more courses to earn new certificates.</p><button type="button" className="mt-3 rounded bg-[#F5A800] px-3 py-2 text-[8px] font-bold">Explore Courses</button></div>
						</div>
						<div className="mt-5 flex items-center justify-center gap-2 text-[8px] text-black/45"><span>Showing 1 to 5 of 12 certificates</span><button type="button" aria-label="Previous page" className="flex h-6 w-6 items-center justify-center rounded border border-black/10 bg-white"><ChevronLeft size={11} /></button><button type="button" className="flex h-6 w-6 items-center justify-center rounded bg-[#F5A800] font-bold text-black">1</button><button type="button" className="flex h-6 w-6 items-center justify-center rounded border border-black/10 bg-white">2</button><button type="button" className="flex h-6 w-6 items-center justify-center rounded border border-black/10 bg-white">3</button><button type="button" aria-label="Next page" className="flex h-6 w-6 items-center justify-center rounded border border-black/10 bg-white"><ChevronRight size={11} /></button></div>
					</section>

					<aside className="rounded-xl border border-[#F5A800]/45 bg-[#0b0b0b] p-2.5 text-white shadow-[0_8px_28px_rgba(0,0,0,0.2)]">
						<div className="flex items-center justify-between px-1 pb-2"><h2 className="text-[11px] font-bold">Certificate Preview</h2><button type="button" aria-label="Close certificate preview" className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white/70"><X size={11} /></button></div>
						<div className="relative overflow-hidden rounded-lg border border-white/25 bg-[#111923] p-5 text-center"><div className="absolute right-[-18px] top-[-28px] h-20 w-40 rotate-45 border-b-2 border-[#F5A800]" /><p className="relative text-[8px] font-bold tracking-[0.2em]">IOEL</p><p className="mt-5 text-[17px] font-serif tracking-widest text-[#f5d88d]">CERTIFICATE</p><p className="text-[7px] tracking-[0.25em] text-white/70">OF COMPLETION</p><p className="mt-5 text-[8px] text-white/70">This certificate is proudly presented to</p><p className="mt-2 text-[13px] font-semibold text-[#f5d88d]">Emma Olivia</p><p className="mt-2 text-[8px] text-white/70">for successfully completing the course</p><p className="mt-2 text-[10px] font-bold text-white">Digital Marketing Fundamentals</p><div className="mx-auto mt-6 h-px w-32 bg-[#F5A800]/70" /><p className="mt-2 text-[7px] text-white/55">Nimesh K. &nbsp; • &nbsp; Instructor</p><div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#F5A800] text-[7px] text-[#F5A800]">IOEL</div></div>
						<span className="mt-3 inline-block rounded bg-[#20aa61] px-1.5 py-1 text-[7px] font-semibold text-white">Completed</span>
						<h3 className="mt-2 text-[12px] font-bold">Digital Marketing Fundamentals</h3>
						<p className="mt-1 text-[8px] text-white/55">✓ Completed on May 20, 2025</p>
						<p className="mt-3 text-[8px] leading-3.5 text-white/65">This course covers the essentials of digital marketing and helps you create effective online campaigns.</p>
						<div className="mt-3 grid grid-cols-3 gap-1 rounded-md border border-white/15 p-2 text-[7px] text-white/55"><span>Instructor<strong className="mt-1 block text-white">Nimesh K.</strong></span><span>Duration<strong className="mt-1 block text-white">6 Weeks</strong></span><span>Level<strong className="mt-1 block text-white">Beginner</strong></span></div>
						<p className="mt-3 text-[7px] text-white/50">Certificate ID <strong className="text-white/80">IOEL-CERT-2025-001</strong></p>
						<div className="mt-3 grid grid-cols-2 gap-2 text-[7px] text-white/50"><span>Issued On<strong className="mt-1 block text-white">May 20, 2025</strong></span><span>Valid Until<strong className="mt-1 block text-white">No Expiry</strong></span></div>
						<button type="button" className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-[#F5A800] py-2.5 text-[8px] font-bold text-black">Download Certificate <Download size={11} /></button><button type="button" className="mt-1.5 flex w-full items-center justify-center gap-2 rounded border border-[#F5A800] py-2 text-[8px] font-semibold text-white"><Share2 size={11} /> Share Certificate</button>
					</aside>
				</div>
			</main>
			<StudentDashboardFooter />
		</div>
	);
}

function Filter({ label }: { label: string }) { return <button type="button" className="flex h-7 items-center gap-3 rounded-md border border-black/10 bg-white px-2.5 text-[8px] font-semibold">{label}<ChevronDown size={10} className="text-black/45" /></button>; }

function CertificateCard({ certificate }: { certificate: (typeof certificates)[number] }) {
	return <article className="overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.035)]"><div className="relative h-[92px] overflow-hidden bg-[#111923]"><img src={certificate.image} alt="" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-3 flex flex-col items-center justify-center border border-[#F5A800]/60 text-center"><p className="text-[6px] tracking-[0.2em] text-white/70">IOEL</p><p className="mt-1 text-[11px] font-serif tracking-widest text-[#f5d88d]">CERTIFICATE</p><p className="mt-1 text-[6px] text-white/70">OF COMPLETION</p><p className="mt-2 text-[7px] text-[#f5d88d]">{certificate.recipient}</p></div></div><div className="p-2"><h2 className="truncate text-[9px] font-bold">{certificate.title}</h2><p className="mt-1 text-[7px] text-black/45">Completed on {certificate.date}</p><button type="button" className="mt-2 flex items-center gap-1 text-[7px] font-semibold text-black/65"><ExternalLink size={9} /> View Certificate</button></div></article>;
}
