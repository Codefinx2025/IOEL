import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  PlayCircle,
  Clock3,
  FileText,
  GraduationCap,
  Laptop2,
  LayoutGrid,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  UserRound,
  Wallet,
} from 'lucide-react';
import LectureDashboardFooter from '../../components/layout/LectureDashboardFooter';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';

const featureCards = [
  {
    icon: Laptop2,
    title: 'Create Your Course',
    desc: 'Build with video, quizzes, assignments and more.',
    action: 'Get Started',
    accent: 'bg-[#f4f2ee]',
  },
  {
    icon: UploadCloud,
    title: 'Upload Content',
    desc: 'Add lessons, documents, quizzes, and other resources.',
    action: 'Upload Now',
    accent: 'bg-[#f8f3e8]',
  },
  {
    icon: UsersIcon,
    title: 'Engage Students',
    desc: 'Communicate, mentor, and support your students effectively.',
    action: 'Manage Students',
    accent: 'bg-[#f3f3f3]',
  },
  {
    icon: BarChart3,
    title: 'Track Performance',
    desc: 'Monitor progress, completion, and student performance.',
    action: 'View Reports',
    accent: 'bg-[#f7f4ef]',
  },
];

const overviewCards = [
  { label: 'Total Courses', value: '08', detail: 'Published', icon: BookOpen, tone: 'bg-[#f3f3f3]' },
  { label: 'Total Students', value: '1,240', detail: '+18% this month', icon: UserRound, tone: 'bg-[#fff3cf]' },
  { label: 'Total Enrollments', value: '2,856', detail: '+124 this month', icon: GraduationCap, tone: 'bg-[#f3f1e4]' },
  { label: 'Total Earnings', value: '$4,230', detail: '+12% this month', icon: Wallet, tone: 'bg-[#f8f7f2]' },
  { label: 'Average Rating', value: '4.8', detail: '★★★★★', icon: Star, tone: 'bg-[#fff8ea]' },
];

const courses = [
  {
    id: 'AI',
    name: 'Introduction to AI Agents',
    lessons: '12 Lessons',
    duration: '3h 45m',
    students: 342,
    rating: 4.8,
    earnings: '$1,245',
    status: 'Published',
    accent: 'bg-[#f7f3ef]',
    color: 'bg-[#f5a800]',
  },
  {
    id: 'PYTHON',
    name: 'Python for Beginners',
    lessons: '18 Lessons',
    duration: '6h 30m',
    students: 512,
    rating: 4.6,
    earnings: '$1,860',
    status: 'Published',
    accent: 'bg-[#f5f5f5]',
    color: 'bg-[#1a1a1a]',
  },
  {
    id: 'WEB',
    name: 'Web Design Masterclass',
    lessons: '20 Lessons',
    duration: '5h 15m',
    students: 206,
    rating: 4.7,
    earnings: '$980',
    status: 'Published',
    accent: 'bg-[#f7f4ee]',
    color: 'bg-[#d4d4d4]',
  },
  {
    id: 'DATA',
    name: 'Data Science Essentials',
    lessons: '16 Lessons',
    duration: '7h 10m',
    students: 0,
    rating: 0,
    earnings: '$0',
    status: 'Draft',
    accent: 'bg-[#f4f1ef]',
    color: 'bg-[#dddddd]',
  },
  {
    id: 'DIGITAL',
    name: 'Digital Marketing 101',
    lessons: '14 Lessons',
    duration: '4h 50m',
    students: 356,
    rating: 4.5,
    earnings: '$1,120',
    status: 'Published',
    accent: 'bg-[#f9f2e8]',
    color: 'bg-[#f0b62d]',
  },
];

const sideActions = [
  'Introduction to AI Agents',
  'Instructor Resources',
  'Marketing Your Course',
  'Video Requirements',
];

const statValues = [
  { label: 'Course Name', value: 'Introduction to AI Agents' },
  { label: 'Students', value: '342' },
  { label: 'Rating', value: '4.8' },
  { label: 'Earnings', value: '$1,245' },
];

export default function LectureDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f4f1] text-[#111111]">
      <LectureDashboardHeader />

      <main className="mx-auto max-w-[1280px] px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <section className="relative overflow-hidden rounded-[26px] border border-[#111111]/5 bg-[#f8f4ed] p-5 sm:p-7">
          <div className="absolute inset-y-0 right-0 hidden w-[50%] bg-[radial-gradient(circle_at_center,_rgba(245,168,0,0.12),_transparent_60%)] lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-black tracking-[-0.04em] text-[#111111] sm:text-[2.6rem]">
                Create. Inspire. Impact.
              </h1>
              <p className="mt-3 max-w-md text-sm font-medium text-[#111111]/65 sm:text-[15px]">
                Build high-quality courses and help learners achieve their goals with IOEL.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f5a800] px-5 py-3 text-sm font-bold text-[#111111] shadow-[0_12px_28px_rgba(245,168,0,0.28)] transition hover:bg-[#ffba2d]"
              >
                <Sparkles size={14} />
                Create New Course
              </button>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center">
              <div className="absolute left-8 top-5 h-14 w-14 rounded-[18px] bg-[#f0dca4] opacity-80 blur-sm" />
              <div className="absolute bottom-4 left-12 h-10 w-10 rounded-full bg-[#f3d197] opacity-75 blur-sm" />
              <div className="relative h-[220px] w-[320px] rounded-[26px] border border-[#111111]/5 bg-[#fffdf9] shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
                <div className="absolute left-6 top-8 h-28 w-32 rounded-[18px] bg-[#f5a800] opacity-20" />
                <div className="absolute right-4 top-10 h-20 w-20 rounded-[18px] bg-[#f0f0f0] p-3 shadow-[0_12px_20px_rgba(0,0,0,0.08)]">
                  <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-white">
                    <TrendingUp size={28} className="text-[#111111]/75" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-6 right-6 h-28 rounded-[18px] bg-gradient-to-br from-[#f5a800]/12 to-[#f5a800]/3 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[32, 48, 62, 40, 76, 54].map((height, idx) => (
                      <div key={idx} className="flex-1 rounded-t-xl bg-[#f5a800] opacity-90" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="absolute left-14 bottom-12 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_18px_rgba(0,0,0,0.08)]">
                  <PlayCircle size={18} className="text-[#111111]" fill="currentColor" />
                </div>
                <div className="absolute right-12 top-16 h-28 w-20 rounded-[18px] bg-[#1b1b1b] p-3">
                  <div className="flex h-full flex-col items-center justify-center rounded-[12px] border border-white/10 bg-[#fefefe]">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5a800] text-white">
                      <Laptop2 size={20} />
                    </div>
                    <div className="h-2 w-10 rounded-full bg-[#111111]/10" />
                    <div className="mt-2 h-2 w-14 rounded-full bg-[#111111]/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#111111]/5 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[1.05rem] font-bold text-[#111111]">Get Started</h2>
              <p className="mt-1 text-xs text-[#111111]/45">Everything you need to create and manage engaging courses.</p>
            </div>
            <button type="button" className="text-sm font-semibold text-[#111111]/55 hover:text-[#f5a800]">
              View All Guides →
            </button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, desc, action, accent }) => (
              <div key={title} className={`rounded-[22px] border border-[#111111]/5 ${accent} p-4 shadow-[0_8px_18px_rgba(0,0,0,0.03)]`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#111111] shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
                  <Icon size={20} className="text-[#111111]/80" />
                </div>
                <h3 className="mt-4 text-[1.05rem] font-bold text-[#111111]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#111111]/55">{desc}</p>
                <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#f5a800]">
                  {action}
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#111111]/5 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] sm:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {overviewCards.map(({ label, value, detail, icon: Icon, tone }) => (
              <div key={label} className="rounded-[20px] border border-[#111111]/5 bg-[#fbfbfa] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.02)]">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
                  <Icon size={18} className="text-[#111111]/80" />
                </div>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111111]/45">{label}</div>
                <div className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#111111]">{value}</div>
                <div className="mt-1 text-xs text-[#111111]/45">{detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
          <div className="rounded-[24px] border border-[#111111]/5 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-[1.05rem] font-bold text-[#111111]">My Courses (8)</h2>
              <button type="button" className="text-sm font-semibold text-[#111111]/55 hover:text-[#f5a800]">
                View All Courses →
              </button>
            </div>

            <div className="space-y-3">
              {courses.map((course) => (
                <div key={course.name} className="grid gap-3 rounded-[18px] border border-[#111111]/5 bg-[#fbfbfa] p-3 sm:grid-cols-[0.7fr_1.4fr_0.65fr_0.8fr_0.8fr_0.8fr] sm:items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${course.accent}`}>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-bold ${course.color} text-white`}>
                      {course.id}
                    </span>
                  </div>

                  <div>
                    <div className="text-[15px] font-bold text-[#111111]">{course.name}</div>
                    <div className="mt-1 text-xs text-[#111111]/45">
                      {course.lessons} • {course.duration}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111111]/40">Students</div>
                    <div className="mt-1 text-sm font-semibold text-[#111111]">{course.students}</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111111]/40">Rating</div>
                    <div className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#111111]">
                      <Star size={14} className="fill-[#f5a800] text-[#f5a800]" />
                      {course.rating || '—'}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111111]/40">Earnings</div>
                    <div className="mt-1 text-sm font-semibold text-[#111111]">{course.earnings}</div>
                  </div>

                  <div className="flex items-center justify-end">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        course.status === 'Published'
                          ? 'bg-[#e4f8e9] text-[#1e8f4a]'
                          : 'bg-[#f6efe6] text-[#a35d00]'
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[24px] border border-[#111111]/5 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-[1.05rem] font-bold text-[#111111]">Top Performing Course</h2>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a800]/12 text-[#f5a800]">
                <TrendingUp size={16} />
              </div>
            </div>

            <div className="rounded-[18px] border border-[#111111]/5 bg-[#fbfbfa] p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f0d7] text-[#111111]">
                  <BookOpen size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111111]">Introduction to AI Agents</div>
                  <div className="mt-1 text-xs text-[#111111]/45">Top course this month</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {statValues.map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-[#111111]/5 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111111]/40">{item.label}</span>
                    <span className="text-sm font-semibold text-[#111111]">{item.value}</span>
                  </div>
                ))}
              </div>

              <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f5a800] px-4 py-3 text-sm font-bold text-[#111111] transition hover:bg-[#ffba2d]">
                View Details
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-6 rounded-[18px] border border-[#111111]/5 bg-[#f9f7f4] p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[0.95rem] font-bold text-[#111111]">Need Help?</h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111111] shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
                  <FileText size={14} />
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#111111]/55">
                Our support team is here to help you with any questions or guidance.
              </p>

              <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#f5a800]">
                Get Support
                <ArrowRight size={14} />
              </button>

              <div className="mt-5 space-y-2">
                {sideActions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="flex w-full items-center justify-between rounded-full border border-[#111111]/5 bg-white px-3 py-2 text-left text-sm font-medium text-[#111111]/70 transition hover:border-[#f5a800]/30 hover:text-[#111111]"
                  >
                    <span>{item}</span>
                    <ArrowRight size={14} className="text-[#111111]/40" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <LectureDashboardFooter />
    </div>
  );
}

function UploadCloud({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 18a4 4 0 1 1 .93-7.87A5.5 5.5 0 0 1 18.3 11a3.5 3.5 0 1 1 .2 7H7Z" />
      <path d="M12 9v8m0-8-3 3m3-3 3 3" />
    </svg>
  );
}

function UsersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
      <circle cx="10" cy="7" r="3" />
      <path d="M20 19v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
