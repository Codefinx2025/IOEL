export default function LogoHero() {
  return (
    <section id="home" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0D0A00, #0A0A0A)' }}>
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-yellow-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          {/* Logo with zoom animation */}
          <div className="relative mb-6 sm:mb-10 animate-zoom-in">
            {/* Glow effect */}
            <div className="absolute -inset-8 rounded-full bg-yellow-500/20 blur-3xl animate-pulse" />

            {/* Logo container */}
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-3xl p-2 glass-gold">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/logo12_27_224448png.png"
                  alt="IOEL Logo"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-wider">
            IOEL
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-bold tracking-widest text-yellow-400 mb-4">
            INSTITUTE OF E LEARNING
          </p>

          {/* Tagline */}
          <p className="text-yellow-500 font-semibold text-xs sm:text-sm tracking-wider mb-4 sm:mb-6">
            The Leading e-Learning Partner
          </p>

          {/* Description */}
          <p className="text-white/60 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
            Transforming Education Through Digital Innovation
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="btn-gold w-full sm:w-auto">Start Your Journey</button>
            <button className="btn-outline w-full sm:w-auto">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
