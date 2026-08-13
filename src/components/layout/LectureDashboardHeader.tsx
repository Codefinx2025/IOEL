import { Bell, ChevronDown, Menu, Search, SlidersHorizontal } from 'lucide-react';

export default function LectureDashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1d1b17]/5 bg-[#f9f8f5]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/icons/logo.png"
            alt="IOEL logo"
            className="h-20 w-20 object-contain"
          />
          <span className="text-[1.7rem] font-black tracking-[0.2em] text-[#111111]">IOEL</span>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex h-12 w-full max-w-[520px] items-center gap-3 rounded-full border border-[#111111]/10 bg-white px-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <Search size={18} className="text-[#111111]/45" />
            <input
              type="text"
              defaultValue="Search for courses, skills or anything"
              className="w-full bg-transparent text-sm text-[#111111]/75 outline-none placeholder:text-[#111111]/35"
            />
            <button type="button" className="rounded-full p-1.5 text-[#111111]/50 transition hover:bg-[#111111]/5 hover:text-[#111111]/80">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111]/75 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:border-[#f5a800]/35 hover:text-[#f5a800] lg:hidden"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111]/75 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:border-[#f5a800]/35 hover:text-[#f5a800]"
          >
            <Menu size={18} />
          </button>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/10 bg-white text-[#111111]/75 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:border-[#f5a800]/35 hover:text-[#f5a800]"
          >
            <Bell size={18} />
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f5a800] px-1 text-[9px] font-bold text-white">
              3
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-[#111111]/10 bg-white px-2 py-1.5 pr-3 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:border-[#f5a800]/35"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-[#f5a800]">
              J
            </div>
            <div className="hidden text-left leading-tight sm:block">
              <div className="text-sm font-semibold text-[#111111]">Jhony</div>
            </div>
            <ChevronDown size={15} className="text-[#111111]/45" />
          </button>
        </div>
      </div>
    </header>
  );
}
