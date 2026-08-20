import { ArrowLeft, Mail, X } from 'lucide-react';

interface StudentFogotPasswordProps {
	onBackToSignIn: () => void;
	onClose: () => void;
}

export default function StudentFogotPassword({ onBackToSignIn, onClose }: StudentFogotPasswordProps) {
	return (
		<div className="min-h-screen bg-[#151617] text-white">
			<div className="relative mx-auto flex min-h-screen w-full max-w-[380px] flex-col overflow-hidden rounded-[0_0_22px_22px] border border-white/5 bg-[radial-gradient(circle_at_20%_0%,rgba(255,196,60,0.06),transparent_42%),linear-gradient(180deg,#1A1B1C_0%,#171819_55%,#151617_100%)] px-6 pb-8 pt-5">
				<div className="flex items-center justify-between">
					<button
						type="button"
						onClick={onBackToSignIn}
						aria-label="Back to sign in"
						className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-white"
					>
						<ArrowLeft size={18} />
					</button>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close forgot password page"
						className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
					>
						<X size={17} />
					</button>
				</div>

				<div className="mt-20 text-center">
					<h1 className="text-[37px] font-medium tracking-tight text-white">Forgot password?</h1>
					<p className="mx-auto mt-4 max-w-[265px] text-[14px] leading-6 text-white/58">
						No worries! Enter your email and we&apos;ll send you a link to reset your password.
					</p>
				</div>

				<form className="mt-14" onSubmit={(event) => event.preventDefault()}>
					<label className="block">
						<span className="mb-2 block text-[17px] text-white/82">Email</span>
						<div className="flex h-14 items-center gap-3 rounded-[14px] border border-white/12 bg-white/[0.02] px-4 transition focus-within:border-[#F5A800]/55">
							<Mail size={18} className="text-[#F5A800]" />
							<input
								type="email"
								placeholder="Enter your email address"
								className="w-full bg-transparent text-[15px] text-white/88 outline-none placeholder:text-white/34"
							/>
						</div>
					</label>

					<button
						type="submit"
						className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#FFBA12] to-[#F5A800] text-[24px] font-semibold text-[#171717] shadow-[0_10px_35px_rgba(245,168,0,0.3)] transition hover:brightness-105"
					>
						Send reset link
					</button>
				</form>

				<div className="mt-auto pb-3 pt-14 text-center text-[16px] text-white/58">
					Remember your password?{' '}
					<button type="button" onClick={onBackToSignIn} className="font-semibold text-[#F5A800] transition hover:text-[#ffbc28]">
						Sign in
					</button>
				</div>
			</div>
		</div>
	);
}
