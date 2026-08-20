import { useState } from 'react';
import { Apple, Chrome, Eye, EyeOff, Lock, Mail, X } from 'lucide-react';

interface StudentSignInProps {
	onBackHome: () => void;
	onSignUpClick: () => void;
	onForgotPasswordClick: () => void;
}

export default function StudentSignIn({ onBackHome, onSignUpClick, onForgotPasswordClick }: StudentSignInProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(true);

	return (
		<div className="min-h-screen bg-[#050505] text-white lg:overflow-hidden">
			<div className="relative min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,168,0,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,179,0,0.08),transparent_30%)]" />

				<button
					onClick={onBackHome}
					aria-label="Close sign in page"
					className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white sm:right-6 sm:top-6 lg:right-8 lg:top-8"
				>
					<X size={20} />
				</button>

				<div className="relative z-10 mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1440px] overflow-hidden rounded-[32px] border border-white/5 bg-[#0b0b0b] shadow-[0_30px_120px_rgba(0,0,0,0.55)] lg:grid-cols-[440px_1fr]">
					<section className="flex flex-col justify-center bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#111111] px-6 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-12">
						<div className="mb-8 flex items-center gap-3 sm:mb-10">
							<div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/5 shadow-[0_0_0_1px_rgba(245,168,0,0.08)]">
								<img src="/icons/logo.png" alt="IOEL logo" className="h-full w-full object-contain p-1.5" />
							</div>
							<div>
								<div className="text-3xl font-black tracking-[0.2em] text-yellow-500">IOEL</div>
								<div className="text-[10px] font-semibold tracking-[0.35em] text-yellow-500/60">E-LEARNING</div>
							</div>
						</div>

						<div className="mb-8 space-y-3 sm:mb-10">
							<h1 className="text-3xl font-medium tracking-tight text-white sm:text-[42px] sm:leading-[1.05]">
								Welcome back
							</h1>
							<p className="text-sm text-white/55 sm:text-[15px]">Sign in to continue to your account</p>
						</div>

						<form className="space-y-4">
							<label className="block space-y-2">
								<span className="text-[11px] font-medium text-white/50">Email</span>
								<div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white/90 transition focus-within:border-yellow-500/50 focus-within:bg-white/[0.05]">
									<Mail size={18} className="text-yellow-500/90" />
									<input
										type="email"
										defaultValue="amelielaurent7622@gmail.com"
										className="w-full bg-transparent text-sm outline-none placeholder:text-white/25"
									/>
								</div>
							</label>

							<label className="block space-y-2">
								<span className="text-[11px] font-medium text-white/50">Password</span>
								<div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white/90 transition focus-within:border-yellow-500/50 focus-within:bg-white/[0.05]">
									<Lock size={18} className="text-yellow-500/90" />
									<input
										type={showPassword ? 'text' : 'password'}
										defaultValue="password123"
										className="w-full bg-transparent text-sm outline-none placeholder:text-white/25"
									/>
									<button
										type="button"
										onClick={() => setShowPassword((current) => !current)}
										className="text-white/45 transition hover:text-white"
										aria-label={showPassword ? 'Hide password' : 'Show password'}
									>
										{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
									</button>
								</div>
							</label>

							<div className="flex items-center justify-between gap-4 pt-1">
								<label className="flex cursor-pointer items-center gap-2 text-xs text-white/70 sm:text-sm">
									<input
										type="checkbox"
										checked={rememberMe}
										onChange={(event) => setRememberMe(event.target.checked)}
										className="h-4 w-4 rounded border-yellow-500/50 bg-transparent text-yellow-500 accent-yellow-500"
									/>
									Remember me
								</label>
								<button type="button" onClick={onForgotPasswordClick} className="text-xs font-medium text-yellow-500 transition hover:text-yellow-400 sm:text-sm">
									Forgot password?
								</button>
							</div>

							<button
								type="submit"
								className="mt-3 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#F5A800] to-[#FFB300] text-sm font-bold text-black shadow-[0_12px_40px_rgba(245,168,0,0.35)] transition hover:scale-[1.01] hover:shadow-[0_16px_55px_rgba(245,168,0,0.45)]"
							>
								Sign in
							</button>

							<div className="flex items-center gap-4 py-1">
								<div className="h-px flex-1 bg-white/10" />
								<span className="text-xs text-white/35">or continue with</span>
								<div className="h-px flex-1 bg-white/10" />
							</div>

							<div className="grid grid-cols-2 gap-3">
								<button
									type="button"
									className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
								>
									<Apple size={18} />
									Apple
								</button>
								<button
									type="button"
									className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
								>
									<Chrome size={18} className="text-[#fbbc05]" />
									Google
								</button>
							</div>
						</form>

						<div className="mt-10 flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
							<p>
								Don&apos;t have an account?{' '}
								<button type="button" onClick={onSignUpClick} className="font-semibold text-yellow-500 transition hover:text-yellow-400">
									Sign up
								</button>
							</p>
							<button type="button" className="font-semibold text-yellow-500 transition hover:text-yellow-400">
								Terms & Conditions
							</button>
						</div>
					</section>

					<section className="relative min-h-[520px] overflow-hidden bg-[#0a0a0a] lg:min-h-0">
						<img
							src="/images/students.png"
							alt="Students collaborating"
							className="absolute inset-0 h-full w-full object-cover object-center"
						/>
						<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.18)_100%)]" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,179,0,0.14),transparent_18%),radial-gradient(circle_at_70%_72%,rgba(255,179,0,0.08),transparent_20%)]" />

						<div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
							<div className="flex justify-end">
								<div className="rounded-full bg-black/45 px-4 py-1 text-[11px] text-white/50 backdrop-blur-md">Welcome to IOEL</div>
							</div>

							<div className="flex flex-wrap items-start justify-end gap-3 sm:gap-4">
								<div className="glass-dark max-w-[240px] rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
									<div className="flex items-start justify-between gap-4">
										<div>
											<div className="text-[11px] font-semibold text-yellow-500">Task Review With Team</div>
											<div className="mt-1 text-[11px] text-white/70">09:30am-10:00am</div>
										</div>
										<div className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
									</div>
								</div>

								<div className="glass-dark max-w-[320px] rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
									<div className="flex items-center justify-between text-[11px] text-white/50">
										<span>Sun</span>
										<span>Mon</span>
										<span>Tue</span>
										<span>Wed</span>
										<span className="text-yellow-500">Thu</span>
										<span>Fri</span>
										<span>Sat</span>
									</div>
									<div className="mt-2 grid grid-cols-7 gap-2 text-center text-sm text-white/80">
										{['22', '23', '24', '25', '26', '27', '28'].map((day, index) => (
											<div
												key={day}
												className={`flex h-8 items-center justify-center rounded-full ${index === 4 ? 'border border-yellow-500 text-yellow-500' : 'bg-white/[0.03]'}`}
											>
												{day}
											</div>
										))}
									</div>
								</div>

								<div className="glass-dark max-w-[260px] rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
									<div className="flex items-start justify-between gap-4">
										<div>
											<div className="text-[11px] text-white/45">Daily Meeting</div>
											<div className="mt-1 text-[11px] text-white/70">12:00pm-01:00pm</div>
										</div>
										<div className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
									</div>
									<div className="mt-3 flex items-center gap-2">
										<div className="flex -space-x-2">
											{['A', 'M', 'L', 'R'].map((initial, index) => (
												<div
													key={initial}
													className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2b2b2b] bg-[#171717] text-[10px] font-semibold text-white"
													style={{ zIndex: 4 - index }}
												>
													{initial}
												</div>
											))}
										</div>
										<span className="text-xs text-white/45">+3</span>
									</div>
								</div>
							</div>

							<div className="flex items-center justify-end gap-3 self-end rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3">
								{['A', 'B', 'C'].map((label, index) => (
									<div
										key={label}
										className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 ${index === 0 ? 'border-yellow-500' : 'border-white/10'}`}
									>
										<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2b2b2b] to-[#0f0f0f] text-sm font-semibold text-white/80">
											{label}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="pointer-events-none absolute bottom-5 left-5 right-5 grid gap-3 sm:left-6 sm:right-6 md:grid-cols-2">
							<div className="glass-dark rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
								<div className="flex items-center gap-2 text-[11px] text-white/50">Monthly planner</div>
								<div className="mt-2 flex items-center gap-2 text-sm text-white/80">Stay organized while learning</div>
							</div>

							<div className="glass-dark rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:justify-self-end md:max-w-[280px]">
								<div className="flex items-center gap-2 text-[11px] text-white/50">Study group</div>
								<div className="mt-2 flex items-center gap-2 text-sm text-white/80">Collaborative sessions every week</div>
							</div>
						</div>

						<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
					</section>
				</div>
			</div>
		</div>
	);
}