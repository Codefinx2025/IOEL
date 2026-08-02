import { Play } from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Students' },
  { value: '200+', label: 'Courses' },
  { value: '98%', label: 'Success Rate' },
  { value: '50+', label: 'Instructors' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#5a5a5a]">
      {/* Keyframes */}
      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(50px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes heroZoom {
          0% {
            opacity: 0;
            transform: scale(0.3);
            filter: blur(12px);
          }
          50% {
            opacity: 0.7;
            filter: blur(4px);
          }
          75% {
            transform: scale(1.06);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        @keyframes heroZoomPop {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-3deg);
            filter: blur(14px);
          }
          50% {
            opacity: 0.6;
            filter: blur(4px);
          }
          70% {
            transform: scale(1.1) rotate(1deg);
            filter: blur(1px);
          }
          85% {
            transform: scale(0.97) rotate(-0.5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0);
          }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hero-line {
          opacity: 0;
          animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-zoom {
          opacity: 0;
          animation: heroZoom 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-zoom-pop {
          opacity: 0;
          animation: heroZoomPop 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-float {
          animation: subtleFloat 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5a5a5a]] to-[#5a5a5a]" />
        <div className="absolute top-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#5a5a5a]/10" />
        <div className="absolute top-[-180px] left-[-80px] w-[350px] h-[350px] rounded-full border border-[#F5A800]/20" />
      </div>

      {/* HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="-translate-y-6">
            <p
              className="text-white/80 font-medium mb-6 hero-line"
              style={{ animationDelay: '0ms' }}
            >
              We make learning easier
            </p>

            <h1 className="text-white font-black leading-none text-5xl lg:text-7xl">
              <span
                className="inline-block hero-zoom"
                style={{ animationDelay: '100ms' }}
              >
                Create Your
              </span>
              <br />
              <span
                className="inline-block hero-zoom"
                style={{ animationDelay: '280ms' }}
              >
                Digital Future,
              </span>
              <br />
              <span
                className="inline-block hero-zoom-pop"
                style={{ animationDelay: '460ms' }}
              >
                <span className="text-[#F5A800] inline-block hero-float">
                  Easily!
                </span>
              </span>
            </h1>

            <div
              className="flex items-center gap-4 mt-10 hero-line"
              style={{ animationDelay: '700ms' }}
            >
              <button className="w-14 h-14 rounded-full bg-[#F5A800] flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play size={18} className="text-black ml-1" />
              </button>
              <div>
                <p className="text-white text-sm">Watch how to create</p>
                <p className="text-white/60 text-sm">your learning path</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="relative h-[520px] mt-32">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              className="absolute top-0 right-24 w-[280px] rounded-lg shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              className="absolute top-20 left-0 w-[340px] rounded-lg shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="absolute top-40 left-28 w-[320px] rounded-lg shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="absolute bottom-12 right-0 w-[260px] rounded-lg shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28"
              className="absolute top-10 right-0 w-[180px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ───────── GEOMETRIC ANGULAR WAVES ───────── */}
      <div className="relative h-[195px] -mt-48 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(255,255,255,0.06)",
            clipPath: "polygon(0 80%, 22% 11%, 50% 50%, 76% 85%, 0 100%)",
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(255,255,255,0.13)",
            clipPath:
              "polygon(0 58%, 16% 10%, 52% 55%, 78% 88%, 100% 100%, 0 100%)",
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-0 bg-[#f7f7f7]"
          style={{
            clipPath:
              "polygon(0 45%, 10% 15%, 50% 58%, 80% 90%, 100% 100%, 0 100%)",
            zIndex: 3,
          }}
        />
      </div>

      {/* ───────── STATS ───────── */}
      <div className="bg-[#f7f7f7] relative z-10">
        <div className="max-w-7xl mx-auto px-8 pt-8 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative bg-[#1a1a1a] rounded-2xl p-8 text-center
                           group hover:bg-[#222] transition-all duration-300
                           hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,168,0,0.15)]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-[#F5A800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-4xl lg:text-5xl font-black text-[#F5A800] leading-none">
                  {stat.value}
                </p>
                <p className="text-white/50 mt-3 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}