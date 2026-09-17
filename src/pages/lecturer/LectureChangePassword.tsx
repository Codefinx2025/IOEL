import { ArrowLeft, Eye, EyeOff, Lock, X } from 'lucide-react';
import { useState } from 'react';

interface LectureChangePasswordProps {
	onBackToSignIn: () => void;
	onClose: () => void;
}

export default function LectureChangePassword({ onBackToSignIn, onClose }: LectureChangePasswordProps) {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className="min-h-screen bg-[#151617] text-white">
			<div className="relative mx-auto flex min-h-screen w-full max-w-[376px] flex-col overflow-hidden bg-[linear-gradient(180deg,#1B1C1D_0%,#171819_100%)] px-[27px] pb-[17px] pt-4">
				<div className="flex items-center justify-between">
					<button type="button" onClick={onBackToSignIn} aria-label="Back to sign in" className="flex h-8 w-8 items-center justify-center text-white/75 transition hover:text-white">
						<ArrowLeft size={20} />
					</button>
					<button type="button" onClick={onClose} aria-label="Close change password page" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/15 hover:text-white">
						<X size={17} />
					</button>
				</div>

				<div className="mt-[43px] text-center">
					<h1 className="text-[23px] font-medium tracking-tight text-white">Change password</h1>
					<p className="mx-auto mt-2 max-w-[280px] text-[12px] leading-[18px] text-white/55">
						For your security, please enter your current
						<br />
						password and choose a new one.
					</p>
				</div>

				<form className="mt-[27px]" onSubmit={(event) => event.preventDefault()}>
					<div className="space-y-[18px]">
						<PasswordField label="Current password" placeholder="Enter your current password" visible={showCurrentPassword} onToggle={() => setShowCurrentPassword((value) => !value)} />
						<PasswordField label="New password" placeholder="Enter your new password" visible={showNewPassword} onToggle={() => setShowNewPassword((value) => !value)} />
						<PasswordField label="Confirm new password" placeholder="Confirm your new password" visible={showConfirmPassword} onToggle={() => setShowConfirmPassword((value) => !value)} />
					</div>

					<div className="mt-[13px] rounded-[14px] border border-white/15 px-[14px] py-[11px]">
						<ul className="space-y-1 text-[11px] leading-[18px] text-white/60">
							<li className="flex items-start gap-2"><span className="mt-[7px] h-1 w-1 rounded-full bg-white/45" />At least 8 characters</li>
							<li className="flex items-start gap-2"><span className="mt-[7px] h-1 w-1 rounded-full bg-white/45" />Include uppercase &amp; lowercase letters</li>
							<li className="flex items-start gap-2"><span className="mt-[7px] h-1 w-1 rounded-full bg-white/45" />Include a number or special character</li>
						</ul>
					</div>

					<button type="submit" className="mt-[13px] flex h-[43px] w-full items-center justify-center rounded-full bg-gradient-to-b from-[#FFB910] to-[#F5A800] text-[14px] font-semibold text-[#171717] shadow-[0_8px_25px_rgba(245,168,0,0.25)] transition hover:brightness-105">
						Update password
					</button>
				</form>
			</div>
		</div>
	);
}

interface PasswordFieldProps {
	label: string;
	placeholder: string;
	visible: boolean;
	onToggle: () => void;
}

function PasswordField({ label, placeholder, visible, onToggle }: PasswordFieldProps) {
	return (
		<label className="block">
			<span className="mb-[6px] block text-[12px] text-white/70">{label}</span>
			<div className="flex h-[43px] items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.015] px-3 transition focus-within:border-[#F5A800]/55">
				<Lock size={17} className="text-[#F5A800]" />
				<input type={visible ? 'text' : 'password'} placeholder={placeholder} className="w-full bg-transparent text-[12px] text-white/85 outline-none placeholder:text-white/35" />
				<button type="button" onClick={onToggle} className="text-white/45 transition hover:text-white/85" aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}>
					{visible ? <EyeOff size={18} /> : <Eye size={18} />}
				</button>
			</div>
		</label>
	);
}