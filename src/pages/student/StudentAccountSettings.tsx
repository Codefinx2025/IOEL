import { Bell, Check, Eye, EyeOff, LockKeyhole, Monitor, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';
import StudentDashboardHeader from '../../components/layout/StudentDashboardHeader';

const inputClass = 'h-9 w-full rounded-md border border-black/10 bg-white px-3 text-[10px] text-[#283243] outline-none transition focus:border-[#F5A800] focus:ring-2 focus:ring-[#F5A800]/15';

const courseNotifications = ['Course Updates', 'New Courses', 'Promotions & Offers', 'Learning Reminders', 'Order & Payment Updates'];
const platformNotifications = ['Announcements', 'Messages', 'Mentions & Replies', 'Course Recommendations'];

function NotificationList({ items }: { items: string[] }) {
	return <div className="mt-4 space-y-3">{items.map((item) => <label key={item} className="flex cursor-pointer items-start gap-2"><input type="checkbox" defaultChecked className="peer sr-only" /><span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-[#F5A800] text-transparent peer-checked:bg-[#F5A800] peer-checked:text-white"><Check size={10} strokeWidth={3} /></span><span><span className="block text-[10px] font-bold text-[#283243]">{item}</span><span className="mt-0.5 block text-[9px] text-black/50">{notificationDescription(item)}</span></span></label>)}</div>;
}

function notificationDescription(item: string) {
	const descriptions: Record<string, string> = {
		'Course Updates': 'Receive emails about course updates and new content.',
		'New Courses': 'Get notified when new courses are published.',
		'Promotions & Offers': 'Receive special offers, discounts, and promotions.',
		'Learning Reminders': 'Get reminders to continue your learning journey.',
		'Order & Payment Updates': 'Receive updates about your orders and payments.',
		Announcements: 'Important announcements and platform updates.',
		Messages: 'Notify me when I receive new messages.',
		'Mentions & Replies': 'Notify me when someone mentions or replies to me.',
		'Course Recommendations': 'Personalized course recommendations.',
	};
	return descriptions[item];
}

function SettingsCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <section className={`rounded-md border border-black/[0.08] bg-white p-3 shadow-[0_4px_16px_rgba(16,24,40,0.04)] ${className}`}>{children}</section>;
}

export default function StudentAccountSettings() {
	const [showPassword, setShowPassword] = useState(false);
	const [mfaEnabled, setMfaEnabled] = useState(false);
	const passwordType = showPassword ? 'text' : 'password';

	return <div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
		<StudentDashboardHeader />
		<main className="mx-auto max-w-[1400px] px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pt-5">
			<div className="mb-4 text-[9px] text-black/45">Home <span className="px-1">›</span> Account Settings</div>
			<div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
				<div>
					<h1 className="text-lg font-extrabold text-[#172033]">Account Settings</h1>
					<div className="mt-3 flex gap-7 border-b border-black/10 text-[9px] font-semibold"><button type="button" className="border-b-2 border-[#F5A800] px-1 pb-2 text-[#172033]">Account Security</button><button type="button" className="px-1 pb-2 text-black/45">Notifications</button></div>
					<SettingsCard className="mt-3">
						<div className="flex items-center gap-2"><LockKeyhole size={13} /><div><h2 className="text-[10px] font-bold">Change Password</h2><p className="text-[8px] text-black/50">Keep your account secure by using a strong password.</p></div></div>
						<div className="mt-3 space-y-2"><label className="block text-[8px] font-bold">Current Password<div className="relative mt-1"><input type={passwordType} defaultValue="password" className={inputClass} /><button type="button" aria-label="Show password" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-black/45">{showPassword ? <EyeOff size={12} /> : <Eye size={12} />}</button></div></label><label className="block text-[8px] font-bold">New Password<div className="relative mt-1"><input type={passwordType} defaultValue="password" className={inputClass} /><Eye size={12} className="absolute right-2 top-2 text-black/45" /></div></label><label className="block text-[8px] font-bold">Confirm New Password<div className="relative mt-1"><input type={passwordType} defaultValue="password" className={inputClass} /><Eye size={12} className="absolute right-2 top-2 text-black/45" /></div></label></div>
						<div className="mt-2 rounded-md bg-[#fff8e7] px-2 py-1.5 text-[8px] text-[#a36f00]">ⓘ Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.</div><div className="mt-2 flex justify-end"><button type="button" className="rounded-md bg-[#F5A800] px-3 py-1.5 text-[9px] font-bold text-black shadow-[0_4px_12px_rgba(245,168,0,0.2)]">Update Password</button></div>
					</SettingsCard>
					<SettingsCard className="mt-3"><div className="flex items-center gap-2"><ShieldCheck size={13} /><div><h2 className="text-[10px] font-bold">Multi-factor Authentication (MFA)</h2><p className="text-[8px] text-black/50">Add an extra layer of security to your account. When enabled, you&apos;ll be asked to enter a code from your authenticator app when you log in.</p></div></div><div className="mt-3 flex items-center justify-between rounded-md border border-black/10 px-2.5 py-2"><div><p className="text-[9px] font-bold">MFA is currently {mfaEnabled ? 'enabled' : 'disabled'}</p><p className="text-[8px] text-black/50">Secure your account by enabling multi-factor authentication.</p></div><button type="button" onClick={() => setMfaEnabled(!mfaEnabled)} className="rounded border border-black/10 px-2 py-1 text-[8px] font-bold hover:border-[#F5A800]/50">{mfaEnabled ? 'Disable MFA' : 'Enable MFA'}</button></div></SettingsCard>
					<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Monitor size={13} /><div><h2 className="text-[10px] font-bold">Active Sessions</h2><p className="text-[8px] text-black/50">Manage your active sessions across different devices.</p></div></div><div className="mt-3 flex items-center justify-between rounded-md border border-black/10 px-2.5 py-2"><div><p className="text-[9px] font-bold">Current Session <span className="ml-1 text-[8px] font-normal text-[#159447]">This device</span></p><p className="text-[8px] text-black/50">Windows · Chrome · Colombo, Sri Lanka</p></div><span className="text-[8px] font-semibold text-[#159447]">Active now</span></div><p className="mt-2 text-[8px] text-black/55">You&apos;re all set! There are no other active sessions.</p></SettingsCard>
				</div>
				<div>
					<h1 className="text-lg font-extrabold text-[#172033]">Account Settings</h1>
					<div className="mt-3 flex gap-7 border-b border-black/10 text-[9px] font-semibold"><button type="button" className="px-1 pb-2 text-black/45">Account Security</button><button type="button" className="border-b-2 border-[#F5A800] px-1 pb-2 text-[#172033]">Notifications</button></div>
					<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Bell size={13} /><div><h2 className="text-[10px] font-bold">Email Notifications</h2><p className="text-[8px] text-black/50">Choose what emails you want to receive from IOEL.</p></div></div><NotificationList items={courseNotifications} /></SettingsCard>
					<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Bell size={13} /><div><h2 className="text-[10px] font-bold">Platform Notifications</h2><p className="text-[8px] text-black/50">Manage how you receive notifications on the IOEL platform.</p></div></div><NotificationList items={platformNotifications} /><div className="mt-4 flex justify-end"><button type="button" className="rounded-md bg-[#F5A800] px-3 py-1.5 text-[9px] font-bold text-black shadow-[0_4px_12px_rgba(245,168,0,0.2)]">Save Preferences</button></div></SettingsCard>
				</div>
			</div>
			<p className="mt-5 text-center text-[8px] text-black/45">Need help? Visit our <span className="text-[#d69300]">Help Center</span> or contact <span className="text-[#d69300]">support</span>.</p>
		</main>
		<StudentDashboardFooter />
	</div>;
}
