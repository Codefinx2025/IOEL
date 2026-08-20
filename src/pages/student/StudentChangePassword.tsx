import { ArrowLeft, Eye, EyeOff, Lock, X } from 'lucide-react';
import { useState } from 'react';

interface StudentChangePasswordProps {
	onBackToSignIn: () => void;
	onClose: () => void;
}

export default function StudentChangePassword({ onBackToSignIn, onClose }: StudentChangePasswordProps) {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className="min-h-screen bg-[#151617] text-white">
			<div className="relative mx-auto flex min-h-screen w-full max-w-[380px] flex-col overflow-hidden rounded-[0_0_22px_22px] border border-white/5 bg-[radial-gradient(circle_at_18%_0%,rgba(255,196,60,0.06),transparent_43%),linear-gradient(180deg,#1A1B1C_0%,#171819_55%,#151617_100%)] px-6 pb-7 pt-[max(1.25rem,env(safe-area-inset-top))]">
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
						aria-label="Close change password page"
						className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
					>
						<X size={17} />
					</button>
				</div>

				<div className="mt-16 text-center">
					<h1 className="text-[42px] font-medium tracking-tight text-white">Change password</h1>
					<p className="mx-auto mt-4 max-w-[286px] text-[14px] leading-6 text-white/56">
						For your security, please enter your current password and choose a new one.
					</p>
				</div>

				<form className="mt-12" onSubmit={(event) => event.preventDefault()}>
					<div className="space-y-5">
						<label className="block">
							<span className="mb-2 block text-[17px] text-white/82">Current password</span>
							<div className="flex h-14 items-center gap-3 rounded-[14px] border border-white/12 bg-white/[0.02] px-4 transition focus-within:border-[#F5A800]/55">
								<Lock size={18} className="text-[#F5A800]" />
								<input
									type={showCurrentPassword ? 'text' : 'password'}
									placeholder="Enter your current password"
									className="w-full bg-transparent text-[15px] text-white/88 outline-none placeholder:text-white/34"
								/>
								<button
									type="button"
									onClick={() => setShowCurrentPassword((value) => !value)}
									className="text-white/45 transition hover:text-white/85"
									aria-label={showCurrentPassword ? 'Hide current password' : 'Show current password'}
								>
									{showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
						</label>

						<label className="block">
							<span className="mb-2 block text-[17px] text-white/82">New password</span>
							<div className="flex h-14 items-center gap-3 rounded-[14px] border border-white/12 bg-white/[0.02] px-4 transition focus-within:border-[#F5A800]/55">
								<Lock size={18} className="text-[#F5A800]" />
								<input
									type={showNewPassword ? 'text' : 'password'}
									placeholder="Enter your new password"
									className="w-full bg-transparent text-[15px] text-white/88 outline-none placeholder:text-white/34"
								/>
								<button
									type="button"
									onClick={() => setShowNewPassword((value) => !value)}
									className="text-white/45 transition hover:text-white/85"
									aria-label={showNewPassword ? 'Hide new password' : 'Show new password'}
								>
									{showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
						</label>

						<label className="block">
							<span className="mb-2 block text-[17px] text-white/82">Confirm new password</span>
							<div className="flex h-14 items-center gap-3 rounded-[14px] border border-white/12 bg-white/[0.02] px-4 transition focus-within:border-[#F5A800]/55">
								<Lock size={18} className="text-[#F5A800]" />
								<input
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="Confirm your new password"
									className="w-full bg-transparent text-[15px] text-white/88 outline-none placeholder:text-white/34"
								/>
								<button
									type="button"
									onClick={() => setShowConfirmPassword((value) => !value)}
									className="text-white/45 transition hover:text-white/85"
									aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
								>
									{showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
						</label>
					</div>

					<div className="mt-4 rounded-[14px] border border-white/16 bg-white/[0.02] px-4 py-3.5">
						<ul className="space-y-2 text-[12px] leading-5 text-white/55">
							<li className="flex items-start gap-2.5">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/35" />
								<span>At least 8 characters</span>
							</li>
							<li className="flex items-start gap-2.5">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/35" />
								<span>Include uppercase &amp; lowercase letters</span>
							</li>
							<li className="flex items-start gap-2.5">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/35" />
								<span>Include a number or special character</span>
							</li>
						</ul>
					</div>

					<button
						type="submit"
						className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#FFBA12] to-[#F5A800] text-[28px] font-semibold text-[#171717] shadow-[0_10px_35px_rgba(245,168,0,0.3)] transition hover:brightness-105"
					>
						Update password
					</button>
				</form>
			</div>
		</div>
	);
}
