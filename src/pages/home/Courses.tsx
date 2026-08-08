import { useEffect, useRef } from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Digital Marketing Fundamentals',
    duration: '6 Weeks',
    students: '2.4K',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Beginner',
    tagColor: 'bg-green-500/20 text-green-400',
    description: 'Learn the basics of digital marketing including SEO, social media, and ads.',
    lessons: 24,
    level: 'Beginner',
  },
  {
    title: 'Web Development Essentials',
    duration: '8 Weeks',
    students: '3.1K',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Popular',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
    description: 'Master HTML, CSS, JavaScript and build modern responsive websites.',
    lessons: 32,
    level: 'Intermediate',
  },
  {
    title: 'Graphic Design Masterclass',
    duration: '5 Weeks',
    students: '1.8K',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Creative',
    tagColor: 'bg-pink-500/20 text-pink-400',
    description: 'Explore design principles, Photoshop, and branding techniques.',
    lessons: 20,
    level: 'Beginner',
  },
  {
    title: 'Data Analytics Basics',
    duration: '7 Weeks',
    students: '2.0K',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Hot',
    tagColor: 'bg-red-500/20 text-red-400',
    description: 'Understand data analysis, Excel, and visualization tools.',
    lessons: 28,
    level: 'Beginner',
  },
];

const diplomaCourses = [
  {
    title: 'Advanced Business Management',
    duration: '6 Months',
    students: '1.2K',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Executive',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
    description: 'Strategic leadership, operations, and advanced management frameworks for aspiring executives.',
    lessons: 120,
    level: 'Advanced',
  },
  {
    title: 'Full-Stack Web Development',
    duration: '9 Months',
    students: '980',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Career',
    tagColor: 'bg-blue-500/20 text-blue-400',
    description: 'End-to-end web development from frontend to backend with real-world projects.',
    lessons: 180,
    level: 'Advanced',
  },
  {
    title: 'Digital Entrepreneurship',
    duration: '8 Months',
    students: '750',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Advanced',
    tagColor: 'bg-green-500/20 text-green-400',
    description: 'Build, launch, and scale digital businesses from ideation to revenue.',
    lessons: 96,
    level: 'Intermediate',
  },
  {
    title: 'AI & Machine Learning',
    duration: '12 Months',
    students: '620',
    rating: 5.0,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Future',
    tagColor: 'bg-purple-500/20 text-purple-400',
    description: 'Deep dive into neural networks, NLP, computer vision, and deployment.',
    lessons: 200,
    level: 'Advanced',
  },
];

interface CourseCardProps {
  title: string;
  duration: string;
  students: string;
  rating: number;
  image: string;
  tag: string;
  tagColor: string;
  index: number;
  onEnrollClick: () => void;
}

function CourseCard({
  title,
  duration,
  students,
  rating,
  image,
  tag,
  tagColor,
  index,
  onEnrollClick,
}: CourseCardProps) {
  return (
    <div
      className="reveal glass rounded-3xl overflow-hidden glow-card group card-3d"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className={`absolute top-4 left-4 ${tagColor} text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
          {tag}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-yellow-500" /> {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-yellow-500" /> {students}
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{rating}</span>
          </span>
        </div>

        <button
          onClick={onEnrollClick}
          className="w-full btn-gold flex items-center justify-center gap-2 py-3 text-sm font-bold group/btn"
        >
          Enroll Now
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

interface CoursesProps {
  onEnrollClick: () => void;
}

export default function Courses({ onEnrollClick }: CoursesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" className="relative bg-[#F8F8F8] py-24">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* ═══════════ Header ═══════════ */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <div className="mb-8">
              <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
                Explore Our Courses
              </span>
              <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
            </div>

            <h2 className="text-5xl lg:text-[48px] font-black text-[#111] leading-tight max-w-2xl">
              Find the Right Course
              <br />
              for <span className="text-yellow-500">Your Future</span>
            </h2>

            <p className="text-gray-500 mt-8 max-w-xl">
              Discover expertly designed courses to upskill,
              advance your career, and achieve your goals.
            </p>
          </div>

          <button className="mt-8 lg:mt-0 border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
            View All Courses →
          </button>
        </div>

        {/* ═══════════ Categories ═══════════ */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            'All Courses',
            'Development',
            'Business',
            'Design',
            'Marketing',
            'IT & Software',
          ].map((item, i) => (
            <button
              key={item}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition ${
                i === 0
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-yellow-500'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ═══════════ Regular Courses Grid ═══════════ */}
        <div className="grid lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              title={course.title}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              image={course.image}
              tag={course.tag}
              tagColor={course.tagColor}
              index={index}
              onEnrollClick={onEnrollClick}
            />
          ))}
        </div>

       <div className="mt-24 mb-8 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-500 to-transparent" />
       </div>

        {/* ═══════════ Diploma Section ═══════════ */}
        <div>
          {/* Diploma Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10">
            <div>
              <div className="mb-4">
                <span className="text-yellow-500 uppercase font-semibold tracking-wider text-sm">
                  Premium Programs
                </span>
                <div className="w-16 h-[2px] bg-yellow-500 mt-3" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight">
                Diploma Courses
              </h3>
              <p className="text-gray-500 mt-3 max-w-lg">
                Advanced, in-depth programs designed for serious career growth and industry-recognized credentials.
              </p>
            </div>

            <button className="mt-6 lg:mt-0 border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
              View All Diplomas →
            </button>
          </div>

          {/* Diploma Cards Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {diplomaCourses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {course.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111] mb-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-yellow-500" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-500 font-semibold">{course.rating}</span>
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{course.lessons} Lessons</span>
                      <span>{course.level}</span>
                    </div>
                    <button
                      onClick={onEnrollClick}
                      className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center hover:scale-110 transition"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════ Bottom CTA ═══════════ */}
        <div className="mt-16 bg-[#111] rounded-3xl px-8 py-6 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">
              Not sure which course is right for you?
            </h4>
            <p className="text-white/60">
              Take our quick quiz and find the perfect course for your goals.
            </p>
          </div>
          <button className="mt-6 lg:mt-0 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
            Find My Course →
          </button>
        </div>

      </div>
    </section>
  );
}