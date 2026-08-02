import { useEffect, useRef } from 'react';
import {  Star, CheckCircle } from 'lucide-react';

export default function CertificateShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
  <section
  ref={ref}
  className="relative py-28 overflow-hidden"
  style={{ background: "linear-gradient(180deg, #141313, #141313, #141313)" }}
 >
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

  {/* LEFT — Text */}
  <div className="space-y-8 reveal order-1">

    <div className="mb-8">
      {/* Eyebrow */}
      <div className="mb-6">
        <span className="text-[#F5A800] uppercase font-semibold tracking-wider text-sm">
          PROFESSIONAL CERTIFICATION
        </span>
        <div className="w-16 h-[2px] bg-[#F5A800] mt-3"></div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl lg:text-[48px] font-black text-white leading-tight">
        Earn Your{" "}
        <span className="text-[#F5A800]">
          Certificate
        </span>
        <br />
        with Pride
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">
        Our industry-recognized certificates and diplomas are designed to open
        doors. Employers around the world trust{" "}
        <strong className="text-white">IOEL</strong> qualifications as a mark of
        real-world competence and dedication.
      </p>
    </div>

    {/* Features */}
    <div className="space-y-4">
      {[
        "Globally Recognized",
        "Verifiable digital badges & QR codes",
        "Shareable on LinkedIn and professional networks",
        "Industry-endorsed by leading employers",
        "Lifetime access to your certificate portal",
        "Boost your professional credibility instantly",
      ].map((item) => (
        <div key={item} className="flex items-center gap-3">
          <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
          <span className="text-white/70">{item}</span>
        </div>
      ))}
    </div>

 {/* Stats */}

    <div className="grid grid-cols-4 gap-4 pt-6 max-w-[350px]">
    {[
      { label: "Certificates", value: "18K+" },
      { label: "Programs", value: "200+" },
      { label: "Countries", value: "45+" },
      { label: "Satisfied", value: "98%" },
    ].map(({ label, value }) => (
      <div
        key={label}
        className="w-20 h-20 rounded-3xl border border-[#2A2A2A] bg-[#1a1a1a] flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#F5A800]"
      >
        <h3 className="text-white text-xl font-bold leading-none">
          {value}
        </h3>

        <p className="text-white/80 text-[10px] mt-1 leading-3">
          {label}
        </p>
      </div>
    ))}
      </div>
    </div>

{/* RIGHT — Certificate */}

    <div className="flex items-center justify-center reveal order-2">
      <div className="relative w-full">
        <img
          src="images/Certificate.png"
          alt="Certificate"
          className="w-full h-auto object-contain drop-shadow-2xl scale-125"
        />
      </div>
    </div>
 </div>
 </div>
</section>

  );
}