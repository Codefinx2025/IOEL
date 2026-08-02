import React from "react";
import {
  MonitorPlay,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Headphones,
  GraduationCap,
  Globe,
  Star,
} from "lucide-react";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const IoelAdvantage: React.FC = () => {

  const leftFeatures = [
    {
      icon: <MonitorPlay size={20} />,
      title: "Expert-Led Learning",
      desc: "Learn from industry experts and practitioners with real-world experience.",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Flexible & Self-Paced",
      desc: "Study anytime, anywhere with lifetime access to course materials.",
    },
    {
      icon: <Users size={20} />,
      title: "Community Support",
      desc: "Join a vibrant community of learners to collaborate, share and grow together.",
    },
  ];

  const rightFeatures = [
    {
      icon: <Award size={20} />,
      title: "Recognized Certifications",
      desc: "Earn certificates that add value to your career and showcase your skills.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Career Growth Focused",
      desc: "Courses designed to help you build in-demand skills and advance your career.",
    },
    {
      icon: <Headphones size={20} />,
      title: "Dedicated Support",
      desc: "Our support team is always here to guide you on your learning journey.",
    },
  ];

  const stats = [
    { icon: <Users size={20} />, number: "15K+", label: "Students" },
    { icon: <GraduationCap size={20} />, number: "200+", label: "Courses" },
    { icon: <TrendingUp size={20} />, number: "98%", label: "Success Rate" },
    { icon: <Globe size={20} />, number: "50+", label: "Instructors" },
  ];

  return (
    <section className="bg-[#141313] text-white py-20 sm:py-24 lg:py-28 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-yellow-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">

   {/* ==================== HEADER ==================== */}
    <div className="max-w-3xl mb-16">
      {/* Eyebrow */}
      <div className="mb-8">
        <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
          Why Students Choose IOEL
        </span>
        <div className="w-16 h-[2px] bg-[#F5A800] mt-3" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-white leading-tight max-w-2xl">
      The IOEL
      <span className="ml-4 inline-block text-[#F5A800]">
        Advantage
      </span>
    </h2>

      {/* Paragraph */}
      <p className="text-gray-400 mt-8 max-w-xl text-base leading-relaxed">
        We go beyond traditional learning to deliver an experience that
        empowers you to achieve more.
      </p>
    </div>

        {/* ==================== MAIN 3-COLUMN LAYOUT ==================== */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-0 items-center">

            {/* ---------- LEFT FEATURES ---------- */}
            <div className="space-y-4 lg:pr-3">
              {leftFeatures.map((item, index) => (
                <div key={index} className="relative group">
                <div className="flex gap-3.5 items-start bg-[#111111]/95 backdrop-blur-sm border border-[#2A2A2A] rounded-3xl px-5 py-5 hover:border-[#F5A800]/40 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg border border-[#3a2c00] bg-[#080808] flex items-center justify-center text-yellow-400 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-[14px] sm:text-[15px] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed mt-1.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                {/* Left Connector */}
                <div className="hidden lg:block absolute -right-[126px] top-1/2 -translate-y-1/2 w-[126px] h-[78px]">

                  {/* Node */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-yellow-400/25 blur-md" />
                    <div className="relative w-3 h-3 rounded-full bg-yellow-400 border border-yellow-300 shadow-[0_0_16px_rgba(250,204,21,.9)]" />
                  </div>

                  <svg
                    className="absolute left-[8px] top-0"
                    width="118"
                    height="78"
                    viewBox="0 0 118 78"
                    fill="none"
                  >
                    {index === 0 && (
                      <path
                        d="M0 39
                          H42
                          C56 39 64 34 72 26
                          C82 16 92 10 118 10"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )}

                    {index === 1 && (
                      <path
                        d="M0 39 H118"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )}

                    {index === 2 && (
                      <path
                        d="M0 39
                          H42
                          C56 39 64 44 72 52
                          C82 62 92 68 118 68"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )}
                  </svg>
                </div>
              </div>
              ))}
            </div>

            {/* ---------- CENTER HEXAGON ---------- */}
            <div className="order-first lg:order-none flex justify-center py-6 lg:py-0 lg:mx-6">
              <div className="relative">
                {/* Soft ambient radial glow behind hex */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-yellow-600/[0.05] blur-[50px] pointer-events-none" />
                {/* Main hexagon */}
               <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[385px] lg:h-[385px]">
                {/* Student image */}
                <img
                  src="images/students.png"
                  alt="IOEL Student"
                  className="relative w-full h-full object-cover"
                  style={{ clipPath: HEX_CLIP }}
                />
              </div>
              </div>
            </div>

            {/* ---------- RIGHT FEATURES ---------- */}
            <div className="space-y-4 lg:pl-3">
              {rightFeatures.map((item, index) => (
                <div key={index} className="relative group">
                 <div className="flex gap-3.5 items-start bg-[#111111]/95 backdrop-blur-sm border border-[#2A2A2A] rounded-3xl px-5 py-5 hover:border-[#F5A800]/40 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg border border-[#3a2c00] bg-[#080808] flex items-center justify-center text-yellow-400 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-[14px] sm:text-[15px] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed mt-1.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                 
                {/* Right Connector */}
                <div className="hidden lg:block absolute -left-[126px] top-1/2 -translate-y-1/2 w-[126px] h-[78px]">
                  {/* Node */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-yellow-400/25 blur-md" />
                    <div className="relative w-3 h-3 rounded-full bg-yellow-400 border border-yellow-300 shadow-[0_0_16px_rgba(250,204,21,.9)]" />
                  </div>

                  <svg
                    className="absolute left-0 top-0"
                    width="118"
                    height="78"
                    viewBox="0 0 118 78"
                    fill="none"
                  >
                    {index === 0 && (
                      <path
                        d="M118 39
                          H76
                          C62 39 54 34 46 26
                          C36 16 26 10 0 10"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )}

                    {index === 1 && (
                      <path
                      d="M118 39 H52"
                      stroke="#FACC15"
                      strokeWidth="2"
                      strokeDasharray="4 5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    )}

                    {index === 2 && (
                      <path
                        d="M118 39
                          H76
                          C62 39 54 44 46 52
                          C36 62 26 68 0 68"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )}
                  </svg>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== STATS SECTION ==================== */}
        
         <div className="relative z-30 flex justify-center translate-y-2">
            <div
              className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2
                w-[520px]
                h-[180px]
                rounded-full
                bg-yellow-400/15
                blur-[85px]
                pointer-events-none
              "
              />
            {/* Soft Glow */}
            <div className="absolute top-8 w-[600px] h-40 rounded-full bg-yellow-500/10 blur-[90px]" />

            <div
              className="
                relative
                w-full
                max-w-[540px]
                bg-[#111111]/95
                backdrop-blur-xl
                border border-[#2b2b2b]
                shadow-[0_30px_70px_rgba(0,0,0,.65)]
                overflow-hidden
                rounded-3xl 
                
              "
              
            >
              <div className="grid grid-cols-2 md:grid-cols-4">

                {stats.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      relative
                      py-6
                      px-4
                      text-center
                      ${index !== 3 ? "border-r border-[#242424]" : ""}
                      ${index >= 2 ? "border-t md:border-t-0 border-[#242424]" : ""}
                    `}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-2 text-yellow-400">
                      {item.icon}
                    </div>

                    {/* Number */}
                    <h3 className="text-[26px] lg:text-[20px] font-extrabold leading-none text-white">
                      {item.number}
                    </h3>

                    {/* Label */}
                    <p className="mt-2 text-[13px] text-gray-400">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>
            </div>

        </div>

        {/* ==================== CTA BAR ==================== */}
        <div className="mt-16 sm:mt-20 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-3.5 sm:gap-4 items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-yellow-500/30 bg-yellow-500/[0.04] flex items-center justify-center text-yellow-400 shrink-0">
              <Star size={16} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-[13px] sm:text-[15px] leading-snug">
                Join thousands of learners{" "}
                <span className="text-yellow-400">building their future with IOEL.</span>
              </h3>
              <p className="text-gray-500 text-[11px] sm:text-[13px] mt-1 hidden sm:block">
                Start your learning journey today and unlock endless possibilities.
              </p>
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-7 py-2.5 rounded-full transition-all duration-200 text-[13px] sm:text-sm whitespace-nowrap hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95">
            Explore Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoelAdvantage;