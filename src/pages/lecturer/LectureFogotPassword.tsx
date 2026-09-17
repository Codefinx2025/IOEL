import { ArrowLeft, Mail, X } from 'lucide-react';

interface LectureFogotPasswordProps {
	onBackToSignIn: () => void;
	onClose: () => void;
	onSendResetLink: () => void;
}

export default function LectureFogotPassword({ onBackToSignIn, onClose, onSendResetLink }: LectureFogotPasswordProps) {
	return (
		<div className="min-h-screen bg-[#151617] text-white">
			<div className="relative mx-auto flex min-h-screen w-full max-w-[392px] flex-col overflow-hidden rounded-[0_0_21px_21px] border border-white/10 bg-[linear-gradient(180deg,#1B1C1D_0%,#171819_100%)] px-10 pb-5 pt-4">
				<div className="flex items-center justify-between">
					<button type="button" onClick={onBackToSignIn} aria-label="Back to sign in" className="flex h-8 w-8 items-center justify-center text-white/80 transition hover:text-white">
						<ArrowLeft size={21} />
					</button>
					<button type="button" onClick={onClose} aria-label="Close forgot password page" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/15 hover:text-white">
						<X size={17} />
					</button>
				</div>

				<div className="mt-[48px] text-center">
					<h1 className="text-[23px] font-medium tracking-tight text-white">Forgot password?</h1>
					<p className="mx-auto mt-2 max-w-[260px] text-[12px] leading-[18px] text-white/60">
						No worries! Enter your email and we&apos;ll send
						<br />
						you a link to reset your password.
					</p>
				</div>

				<form className="mt-[30px]" onSubmit={(event) => { event.preventDefault(); onSendResetLink(); }}>
					<label className="block">
						<span className="mb-[7px] block text-[12px] text-white/75">Email</span>
						<div className="flex h-[40px] items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.015] px-3 transition focus-within:border-[#F5A800]/55">
							<Mail size={18} className="text-[#F5A800]" />
							<input type="email" placeholder="Enter your email address" className="w-full bg-transparent text-[12px] text-white/85 outline-none placeholder:text-white/35" />
						</div>
					</label>

					<button type="submit" className="mt-[20px] flex h-[40px] w-full items-center justify-center rounded-full bg-gradient-to-b from-[#FFBA12] to-[#F5A800] text-[14px] font-semibold text-[#171717] shadow-[0_8px_25px_rgba(245,168,0,0.25)] transition hover:brightness-105">
						Send reset link
					</button>
				</form>

				<div className="mt-auto pb-[24px] pt-8 text-center text-[12px] text-white/60">
					Remember your password?{' '}
					<button type="button" onClick={onBackToSignIn} className="font-semibold text-[#F5A800] transition hover:text-[#ffbc28]">Sign in</button>
				</div>
			</div>
		</div>
	);
}