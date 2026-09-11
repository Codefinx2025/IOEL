import {
	ChevronDown,
	ChevronRight,
	MoreVertical,
	PenLine,
	Search,
	Star,
} from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const reviews = [
	{
		name: 'Nimesh K.',
		initials: 'NK',
		color: '#e9f4ff',
		course: 'Digital Marketing Fundamentals',
		image: '/images/students.png',
		rating: '5.0',
		date: 'May 20, 2025',
		text: 'Excellent course! The content is very well structured and easy to follow. The real-world examples helped me understand the concepts better.',
	},
	{
		name: 'Anjali Perera',
		initials: 'AP',
		color: '#fff1df',
		course: 'Web Development Essentials',
		image: '/images/about.png',
		rating: '4.8',
		date: 'May 18, 2025',
		text: 'Great explanations and practical demos. Would have liked a little more coverage on the react section, but the end result was very useful.',
	},
	{
		name: 'Dulanjana M.',
		initials: 'DM',
		color: '#e8f8eb',
		course: 'Data Analytics Basics',
		image: '/images/Certificate.png',
		rating: '5.0',
		date: 'May 15, 2025',
		text: 'Very informative and beginner friendly. The projects helped me a lot to apply what I learned.',
	},
];

const topCourses = [
	{ title: 'Digital Marketing Fundamentals', rating: '4.9', reviews: '256', image: '/images/students.png' },
	{ title: 'Python for Data Science', rating: '4.8', reviews: '198', image: '/images/about.png' },
	{ title: 'UI/UX Design From Scratch', rating: '4.8', reviews: '144', image: '/images/Certificate.png' },
];

const ratingRows = [
	{ label: '5 Stars', value: '78%', count: '(156)', width: '78%' },
	{ label: '4 Stars', value: '15%', count: '(30)', width: '15%' },
	{ label: '3 Stars', value: '6%', count: '(12)', width: '6%' },
	{ label: '2 Stars', value: '1%', count: '(2)', width: '1%' },
	{ label: '1 Star', value: '0%', count: '(0)', width: '0%' },
];

export default function StudentReviews() {
	return (
		<div className="min-h-screen bg-[#fbfbfa] text-[#111111]">
			<StudentDashboardHeader />
			<main className="mx-auto max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
				<div className="border-b border-black/10 pb-3">
					<p className="text-[10px] text-black/50">Home <span className="px-1">›</span> My Progress</p>
					<h1 className="mt-2 text-[16px] font-extrabold">Reviews &amp; Ratings</h1>
					<nav className="mt-4 flex gap-6 text-[9px] font-semibold sm:gap-8">
						<a href="#progress" className="pb-3 text-black/55">Progress Overview</a>
						<a href="#completed" className="pb-3 text-black/55">Completed Courses</a>
						<a href="#reviews" className="border-b-2 border-[#F5A800] pb-3 text-[#F5A800]">Reviews &amp; Ratings</a>
					</nav>
				</div>

				<div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_250px]">
					<div className="min-w-0">
						<section className="grid gap-2.5 sm:grid-cols-[0.8fr_1.25fr_1.25fr]">
							<div className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]">
								<h2 className="text-[9px] font-bold">Overall Rating <PenLine size={9} className="ml-1 inline text-[#F5A800]" /></h2>
								<div className="mt-2 text-[22px] font-extrabold leading-none">4.7</div>
								<Stars value={5} />
								<p className="mt-1 text-[8px] text-black/45">Out of 5</p>
								<p className="mt-1 text-[7px] text-black/45">Based on 120 reviews</p>
							</div>

							<div className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]">
								<h2 className="text-[9px] font-bold">Rating Distribution</h2>
								<div className="mt-3 space-y-2">{ratingRows.map((row) => <div key={row.label} className="flex items-center gap-2 text-[7px] text-black/55"><span className="w-8">{row.label}</span><span className="h-1.5 flex-1 rounded-full bg-black/8"><span className="block h-full rounded-full bg-[#F5A800]" style={{ width: row.width }} /></span><span className="w-7 text-right">{row.value}</span><span className="w-5 text-right text-black/35">{row.count}</span></div>)}</div>
							</div>

							<div className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]">
								<h2 className="text-[9px] font-bold">What learners love</h2>
								<div className="mt-3 space-y-2.5 text-[7px]">{[['Well structured content', '92%'], ['Easy to understand', '89%'], ['Practical examples', '85%'], ['Engaging instructor', '81%']].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-2"><span><span className="mr-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#e6f8e9] text-[#20aa61]">✓</span>{label}</span><strong>{value}</strong></div>)}</div>
							</div>
						</section>

						<div className="mt-3 flex flex-wrap gap-2">
							<div className="flex h-7 min-w-[150px] flex-1 items-center gap-2 rounded-md border border-black/10 bg-white px-2.5 text-[8px] text-black/40"><Search size={11} />Search reviews...</div>
							<Filter label="All Ratings" />
							<Filter label="All Courses" />
							<Filter label="Most Recent" />
						</div>

						<section id="reviews" className="mt-2 overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.025)]">
							{reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
							<button type="button" className="mx-auto mb-2 flex items-center gap-1 rounded border border-black/10 px-3 py-1.5 text-[8px] font-semibold text-black/65">Load More Reviews <ChevronDown size={11} /></button>
						</section>
					</div>

					<aside className="space-y-3">
						<section className="relative overflow-hidden rounded-lg bg-[#ffe09a] p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-extrabold">Share Your Experience</h2><p className="mt-2 max-w-[185px] text-[8px] leading-3 text-black/55">Your review can help others find the right course and make better learning choices.</p><div className="mt-3 flex items-center gap-1 text-[#2d78e6]"><span className="rounded bg-white px-2 py-1 text-[11px]">😊</span><span className="rounded bg-[#478fea] px-2 py-1 text-white">•••</span><Stars value={5} /></div><button type="button" className="mt-3 inline-flex items-center gap-1 rounded bg-white px-2 py-1.5 text-[8px] font-bold"><PenLine size={10} /> Write a Review</button><Star size={42} className="absolute bottom-1 right-3 text-[#F5A800]" fill="currentColor" /></section>
						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Top Reviewed Courses</h2><div className="mt-3 space-y-2">{topCourses.map((course, index) => <div key={course.title} className="flex items-center gap-2"><span className="text-[8px] font-bold text-black/45">0{index + 1}</span><img src={course.image} alt="" className="h-8 w-10 rounded object-cover" /><div className="min-w-0 flex-1"><p className="truncate text-[8px] font-bold">{course.title}</p><p className="mt-0.5 flex items-center gap-1 text-[7px] text-black/45"><Star size={8} className="text-[#F5A800]" fill="currentColor" />{course.rating} ({course.reviews} reviews)</p></div></div>)}</div><button type="button" className="mt-3 flex w-full items-center justify-center gap-1 border-t border-black/8 pt-2 text-[8px] font-semibold">View All Courses <ChevronRight size={10} /></button></section>
						<section className="rounded-lg border border-black/8 bg-white p-3 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"><h2 className="text-[10px] font-bold">Review Guidelines</h2><ul className="mt-2 space-y-2 text-[8px] text-black/55"><li>✓ Be honest and respectful</li><li>✓ Focus on your learning experience</li><li>✓ Avoid sharing personal information</li><li>✓ Reviews are checked before publishing</li></ul></section>
					</aside>
				</div>
			</main>
			<StudentDashboardFooter />
		</div>
	);
}

function Stars({ value }: { value: number }) {
	return <span className="mt-2 flex items-center gap-0.5 text-[#F5A800]">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={10} fill={index < value ? 'currentColor' : 'none'} />)}</span>;
}

function Filter({ label }: { label: string }) {
	return <button type="button" className="flex h-7 items-center gap-3 rounded-md border border-black/10 bg-white px-2.5 text-[8px] font-semibold">{label}<ChevronDown size={10} className="text-black/45" /></button>;
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
	return <article className="flex gap-2 border-b border-black/8 p-2.5 last:border-0"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-[#2587bf]" style={{ backgroundColor: review.color }}>{review.initials}</div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><p className="text-[8px] font-bold">{review.name}</p><span className="mt-0.5 inline-block rounded bg-[#e8f8eb] px-1.5 py-0.5 text-[6px] font-semibold text-[#20aa61]">Verified Learner</span></div><button type="button" aria-label={`More options for ${review.name}`} className="text-black/45"><MoreVertical size={13} /></button></div><div className="mt-1 flex items-center gap-1"><Stars value={5} /><span className="text-[8px] font-bold">{review.rating}</span></div><p className="mt-0.5 text-[7px] text-black/45">Reviewed on {review.date}</p><p className="mt-2 text-[8px] leading-3.5 text-black/70">{review.text}</p></div><img src={review.image} alt="" className="h-12 w-[66px] shrink-0 rounded object-cover sm:h-14 sm:w-[82px]" /></article>;
}
