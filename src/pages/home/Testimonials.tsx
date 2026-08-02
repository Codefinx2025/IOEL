import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'James Chauhan',
    role: 'Full Stack Developer',
    company: 'Infosys',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'IOEL completely transformed my career. The Data Science program was incredibly practical and relevant. Within 3 months of completing the course, I landed my dream job with a 45% salary increase. The curriculum is top-notch and the instructors are industry experts.',
    course: 'Data Science Certificate',
  },
  {
    name: 'Rahul Bansal',
    role: 'Software Developer',
    company: 'CodeCraft Labs',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The Web Development Diploma program at IOEL is exceptional. The instructors are industry veterans who bring real-world experience to every session. I built 5 production apps during the course. Highly recommended!',
    course: 'Web Development Diploma',
  },
  {
    name: 'Sneha Chauhan',
    role: 'DevOps Engineer',
    company: 'CloudFirst Inc',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "IOEL's flexible schedule was a game-changer for me as a working professional. I completed the DevOps Engineering Diploma while working full-time. The content quality is on par with top institutions.",
    course: 'DevOps Engineering Diploma',
  },
  {
    name: 'Praj Sharma',
    role: 'System Engineer',
    company: 'InfraCore Tech',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The Cloud Computing certificate helped me switch careers successfully. The hands-on projects and mentorship were phenomenal. IOEL doesn't just teach — they transform you into a professional ready for the industry.",
    course: 'Cloud Computing Certificate',
  },
  {
    name: 'Emma Thompson',
    role: 'UX Designer',
    company: 'Creative Studio',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "I took the UX Design Masterclass and I'm blown away by how much I learned. The community support and live feedback sessions made all the difference. My portfolio has never looked better!",
    course: 'UX Design Certificate',
  },
  {
    name: 'Marcus Chen',
    role: 'AI Engineer',
    company: 'FutureTech AI',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The AI & Machine Learning Diploma at IOEL is one of the most comprehensive programs I've found online. The curriculum is constantly updated with the latest industry trends and tools.",
    course: 'AI & ML Diploma',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setAutoPlay(false); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setAutoPlay(false); };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

       {/* ═══════════ Header ═══════════ */}
        <div className="mb-12 reveal">
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
              Student Reviews
            </span>

            <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-[#111] leading-tight max-w-3xl">
            What Our{' '}
            <span className="text-[#F5A800]">
              Students Say
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-8 max-w-xl text-base sm:text-lg leading-relaxed">
            Thousands of students have transformed their careers through IOEL.
            Here are their success stories and experiences.
          </p>
        </div>

        {/* Featured testimonial — large BLACK card */}
        <div className="reveal mb-8 sm:mb-12">
          <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 max-w-7xl mr-auto relative overflow-hidden bg-[#141313]">
           <Quote
            size={60}
            className="absolute top-2 sm:top-4 right-4 sm:right-6 text-white/10"
          />

            <div className="flex flex-col gap-6 sm:gap-8 items-start">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl object-cover border-2 border-white/20"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">{testimonials[current].name}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{testimonials[current].role} · {testimonials[current].company}</div>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-white/[0.08]">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-white/50 text-xs">{testimonials[current].course}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setAutoPlay(false); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-white w-8' : 'bg-white/30 w-4'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all hover:text-white text-white/60">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-white/90 transition-all p-0">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of 3 WHITE mini cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(1, 4).map(({ name, role, image, rating, text }, i) => (
            <div
              key={name}
              className="reveal rounded-2xl p-5 border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">"{text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <img src={image} alt={name} className="w-10 h-10 rounded-xl object-cover border border-gray-200" />
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{name}</div>
                  <div className="text-gray-400 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}