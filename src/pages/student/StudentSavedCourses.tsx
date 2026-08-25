import { ArrowRight, Bookmark, ChevronRight, Clock3, Star } from 'lucide-react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const savedCourses = [
	{
		title: 'Digital Marketing Fundamentals',
		image: '/images/students.png',
		tag: 'Bestseller',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.9',
		duration: '6 Weeks',
		lessons: '24 Lessons',
		level: 'Beginner',
		description: 'Learn core digital marketing strategies to grow your brand and reach more customers online.',
	},
	{
		title: 'Web Development Essentials',
		image: '/images/about.png',
		tag: 'Popular',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.8',
		duration: '8 Weeks',
		lessons: '30 Lessons',
		level: 'Beginner',
		description: 'Learn HTML, CSS, JavaScript and more to build modern, responsive websites from scratch.',
	},
	{
		title: 'Graphic Design Masterclass',
		image: '/images/Certificate.png',
		tag: 'Creative',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.7',
		duration: '5 Weeks',
		lessons: '18 Lessons',
		level: 'Beginner',
		description: 'Master design fundamentals and create professional visual assets with industry-standard tools.',
	},
	{
		title: 'Data Analytics Basics',
		image: '/images/students.png',
		tag: 'Hot',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.9',
		duration: '7 Weeks',
		lessons: '28 Lessons',
		level: 'Beginner',
		description: 'Understand data analysis, visualization and reporting to make data-driven decisions.',
	},
	{
		title: 'AI Tools for Productivity Masterclass',
		image: '/images/about.png',
		tag: 'Popular',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.8',
		duration: '6 Weeks',
		lessons: '20 Lessons',
		level: 'Beginner',
		description: 'Explore AI tools that boost productivity and streamline your daily workflows.',
	},
	{
		title: 'Python for Data Science Zero to Hero',
		image: '/images/students.png',
		tag: 'New',
		tagClass: 'bg-[#F5A800] text-black',
		rating: '4.7',
		duration: '10 Weeks',
		lessons: '40 Lessons',
		level: 'Intermediate',
		description: 'Learn Python programming and apply it to real-world data science projects.',
	},
	{
		title: 'UI/UX Design Fundamentals',
		image: '/images/Certificate.png',
		tag: 'Design',
		tagClass: 'bg-[#EA4C89] text-white',
		rating: '4.6',
		duration: '6 Weeks',
		lessons: '22 Lessons',
		level: 'Beginner',
		description: 'Learn user-centered design, prototyping, and usability techniques for modern products.',
	},
	{
		title: 'JavaScript Programming',
		image: '/images/about.png',
		tag: 'Development',
		tagClass: 'bg-[#8A48E8] text-white',
		rating: '4.8',
		duration: '7 Weeks',
		lessons: '30 Lessons',
		level: 'Beginner',
		description: 'Learn JavaScript fundamentals and build interactive web applications.',
	},
];

export default function StudentSavedCourses() {
	return (
		<div className="min-h-screen bg-[#f7f7f4] text-[#111111]">
			<StudentDashboardHeader />

			<main className="mx-auto max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pt-6">
				<div className="mb-4 flex items-center gap-2 text-xs font-medium text-black/45">
					<button type="button" className="transition hover:text-black/70">
						Home
					</button>
					<ChevronRight size={13} className="text-black/30" />
					<span className="text-black/80">Saved Courses</span>
				</div>

				<div className="mb-6">
					<h1 className="text-[31px] font-extrabold tracking-[-0.02em] text-[#141414]">Saved Courses</h1>
					<p className="mt-1 text-sm text-black/55">Your saved courses for later learning.</p>
				</div>

				<section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{savedCourses.map((course) => (
						<article
							key={course.title}
							className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
						>
							<div className="relative h-36 overflow-hidden">
								<img src={course.image} alt={course.title} className="h-full w-full object-cover" />
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.3))]" />
								<span className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${course.tagClass}`}>
									{course.tag}
								</span>
								<button
									type="button"
									aria-label={`Remove ${course.title} from saved courses`}
									className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45"
								>
									<Bookmark size={15} fill="currentColor" />
								</button>
							</div>

							<div className="p-3.5">
								<h2 className="line-clamp-2 text-[15px] font-bold leading-5 text-[#191919]">{course.title}</h2>

								<div className="mt-2.5 flex items-center gap-3 text-[12px] font-semibold text-black/55">
									<span className="inline-flex items-center gap-1 text-[#F5A800]">
										<Star size={13} fill="currentColor" />
										{course.rating}
									</span>
									<span className="inline-flex items-center gap-1">
										<Clock3 size={13} />
										{course.duration}
									</span>
								</div>

								<p className="mt-2.5 line-clamp-2 text-[12px] leading-5 text-black/60">{course.description}</p>

								<div className="mt-3.5 flex items-center justify-between">
									<div className="text-[12px] text-black/50">
										<span>{course.lessons}</span>
										<span className="mx-2">•</span>
										<span>{course.level}</span>
									</div>
									<button
										type="button"
										aria-label={`Open ${course.title}`}
										className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#F5A800] text-black transition hover:bg-[#ffbe2f]"
									>
										<ArrowRight size={15} />
									</button>
								</div>
							</div>
						</article>
					))}
				</section>
			</main>

			<StudentDashboardFooter />
		</div>
	);
}
