import { 
  Globe,
  Target,
  Shield,
  Award,
  Zap,
  HeartHandshake,
  ArrowRight
} from "lucide-react";


export default function AboutSection() {
  const stats = [
   {
    Icon: Globe,
    title: 'Online Learning Platform',
    desc: 'Access world-class education from anywhere, anytime with our fully digital platform.',
  },
  {
    Icon: Target,
    title: 'Flexible Learning',
    desc: 'Learn at your own pace with self-paced courses and live interactive sessions.',
  },
  {
    Icon: Shield,
    title: 'Professional Education',
    desc: 'Industry-aligned curriculum designed by experts to meet modern career demands.',
  },
  {
    Icon: Award,
    title: 'Certificates & Diplomas',
    desc: 'Earn recognized certificates and diploma qualifications that employers value.',
  },
  {
    Icon: Zap,
    title: 'Instant Access',
    desc: 'Start learning immediately with instant enrollment and on-demand content.',
  },
  {
    Icon: HeartHandshake,
    title: 'Dedicated Support',
    desc: 'Our mentors and support team guide you throughout your learning journey.',
  },

  ];

  return (
    <section className="relative overflow-hidden">
      {/* ================================================= */}
      {/* TOP SECTION (Dark Theme) */}
      {/* ================================================= */}
      <div className="relative bg-[#141313]">
        {/* Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Blue Ambient Glow */}
        <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div>

              <div className="mb-8">
                <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
                  About IOEL E-Learning
                </span>
                <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
              </div>

              <h2 className="text-white font-black leading-tight text-4xl lg:text-[48px]">
                We're On a Mission to 
                <br />
                <span className="text-[#F5A800]">
                  Transform Learning
                </span>
              </h2>

              <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
                We deliver interactive online education with professional courses and personalized support, empowering you to master skills that truly matter.
              </p>

              {/* CTA BUTTON */}
              <button className="mt-10 inline-flex items-center gap-3 bg-[#F5A800] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-[0_10px_30px_rgba(245,168,0,0.3)] hover:shadow-[0_15px_40px_rgba(245,168,0,0.5)] group">
                Explore 200+ Courses 
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>

            </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
            

              {/* Image */}
              <img
                src="images/about.png"
                alt="About IOEL"
                className="relative z-10 w-full max-w-[520px] rounded-3xl object-cover"
              />
            </div>
          </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* CLEAN STRAIGHT ANGULAR DIVIDER */}
        {/* ================================================= */}
        <div className="absolute bottom-0 left-0 w-full h-[110px] z-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-[#f5f5f5]"
            style={{
              clipPath: "polygon(0 55%, 45% 35%, 72% 18%, 100% 78%, 100% 100%, 0 100%)",
            }}
          />

          <svg
            className="absolute inset-0 w-full h-full z-30"
            preserveAspectRatio="none"
            viewBox="0 0 1000 110"
          >
            <defs>
              <linearGradient id="leftGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="40%" stopColor="#4a4646" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#4a4646" stopOpacity="0.9" />
              </linearGradient>
              
              <linearGradient id="rightGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="40%" stopColor="#5a5a5a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#5a5a5a" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            <path d="M0 0 L215 50 L0 59 Z" fill="url(#leftGlass)" />
            <path d="M0 3 L205 49" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <path d="M720 18 L1000 18 L1000 89 Z" fill="url(#rightGlass)" />
            <path d="M725 20 L995 20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* ================================================= */}
      {/* STATS SECTION */}
      {/* ================================================= */}
      <div className="relative bg-[#f7f7f7] pt-20 pb-20 overflow-hidden">
        {/* Right Decorative Circle */}
        <div className="absolute right-[-40px] top-[68%] -translate-y-1/2 w-[190px] h-[190px] rounded-full backdrop-blur-2xl border border-white/30 bg-gradient-to-br from-[#F5A800]/20 via-white/10 to-[#F5A800]/5 shadow-[0_15px_40px_rgba(245,168,0,0.15)]">
          <div className="absolute top-6 left-8 w-10 h-10 rounded-full bg-white/30 blur-md" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-14">
          {/* Main Heading */}
          <div className="mb-8">
            <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
              WHAT WE OFFER
            </span>
            <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
                    <item.Icon size={24} className="text-[#F5A800]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#222] mt-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
    </section>
  );
}