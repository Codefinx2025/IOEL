import { Bell, Check, Eye, EyeOff, LockKeyhole, Monitor, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import LectureDashboardHeader from '../../components/layout/LectureDashboardHeader';
import StudentDashboardFooter from '../../components/layout/StudentDashboardFooter';

const inputClass = 'h-9 w-full rounded-md border border-black/10 bg-white px-3 text-[10px] text-[#283243] outline-none transition focus:border-[#F5A800] focus:ring-2 focus:ring-[#F5A800]/15';

function SettingsCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <section className={`rounded-md border border-black/[0.08] bg-white p-3 shadow-[0_4px_16px_rgba(16,24,40,0.04)] ${className}`}>{children}</section>;
}

const emailNotifications = [
	['Course Updates', 'Receive emails about course updates and new content.'],
	['New Courses', 'Get notified when new courses are published.'],
	['Promotions & Offers', 'Receive special offers, discounts, and promotions.'],
	['Learning Reminders', 'Get reminders to continue your learning journey.'],
	['Order & Payment Updates', 'Receive updates about your orders and payments.'],
];

const platformNotifications = [
	['Announcements', 'Important announcements and platform updates.'],
	['Messages', 'Notify me when I receive new messages.'],
	['Mentions & Replies', 'Notify me when someone mentions or replies to me.'],
	['Course Recommendations', 'Personalized course recommendations.'],
];

function NotificationList({ items }: { items: string[][] }) {
	return <div className="mt-4 space-y-3">{items.map(([title, description]) => <label key={title} className="flex cursor-pointer items-start gap-2"><input type="checkbox" defaultChecked className="peer sr-only" /><span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-[#F5A800] text-transparent peer-checked:bg-[#F5A800] peer-checked:text-white"><Check size={10} strokeWidth={3} /></span><span><span className="block text-[10px] font-bold text-[#283243]">{title}</span><span className="mt-0.5 block text-[9px] text-black/50">{description}</span></span></label>)}</div>;
}

export default function LectureAccountSettings() {
	const [showPassword, setShowPassword] = useState(false);
	const [mfaEnabled, setMfaEnabled] = useState(false);
	const [activeTab, setActiveTab] = useState<'security' | 'notifications'>('security');
	const passwordType = showPassword ? 'text' : 'password';

	return <div className="min-h-screen bg-[#fbfbfa] text-[#172033]">
		<LectureDashboardHeader />
		<main className="mx-auto max-w-[1180px] px-4 pb-8 pt-5 sm:px-6 lg:px-8">
			<div className="mb-4 text-[9px] text-black/45">Home <span className="px-1">›</span> Account Settings</div>
			<h1 className="text-lg font-extrabold text-[#172033]">Account Settings</h1>
			<div className="mt-3 flex gap-7 border-b border-black/10 text-[9px] font-semibold"><button type="button" onClick={() => setActiveTab('security')} className={`border-b-2 px-1 pb-2 ${activeTab === 'security' ? 'border-[#F5A800] text-[#172033]' : 'border-transparent text-black/45'}`}>Account Security</button><button type="button" onClick={() => setActiveTab('notifications')} className={`border-b-2 px-1 pb-2 ${activeTab === 'notifications' ? 'border-[#F5A800] text-[#172033]' : 'border-transparent text-black/45'}`}>Notifications</button></div>

			{activeTab === 'security' ? <>
			<SettingsCard className="mt-3">
				<div className="flex items-center gap-2"><LockKeyhole size={13} /><div><h2 className="text-[10px] font-bold">Change Password</h2><p className="text-[8px] text-black/50">Keep your account secure by using a strong password.</p></div></div>
				<div className="mt-3 space-y-2">
					{['Current Password', 'New Password', 'Confirm New Password'].map((label) => <label key={label} className="block text-[8px] font-bold">{label}<div className="relative mt-1"><input type={passwordType} defaultValue="password" className={inputClass} /><button type="button" aria-label={`${showPassword ? 'Hide' : 'Show'} ${label.toLowerCase()}`} onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-black/45">{showPassword ? <EyeOff size={12} /> : <Eye size={12} />}</button></div></label>)}
				</div>
				<div className="mt-2 rounded-md bg-[#fff8e7] px-2 py-1.5 text-[8px] text-[#a36f00]">ⓘ Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.</div><div className="mt-2 flex justify-end"><button type="button" className="rounded-md bg-[#F5A800] px-3 py-1.5 text-[9px] font-bold text-black shadow-[0_4px_12px_rgba(245,168,0,0.2)]">Update Password</button></div>
			</SettingsCard>

			<SettingsCard className="mt-3"><div className="flex items-center gap-2"><ShieldCheck size={13} /><div><h2 className="text-[10px] font-bold">Multi-factor Authentication (MFA)</h2><p className="text-[8px] text-black/50">Add an extra layer of security to your account. When enabled, you&apos;ll be asked to enter a code from your authenticator app when you log in.</p></div></div><div className="mt-3 flex items-center justify-between rounded-md border border-black/10 px-2.5 py-2"><div><p className="text-[9px] font-bold">MFA is currently {mfaEnabled ? 'enabled' : 'disabled'}</p><p className="text-[8px] text-black/50">Secure your account by enabling multi-factor authentication.</p></div><button type="button" onClick={() => setMfaEnabled(!mfaEnabled)} className="rounded border border-black/10 px-2 py-1 text-[8px] font-bold hover:border-[#F5A800]/50">{mfaEnabled ? 'Disable MFA' : 'Enable MFA'}</button></div></SettingsCard>

			<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Monitor size={13} /><div><h2 className="text-[10px] font-bold">Active Sessions</h2><p className="text-[8px] text-black/50">Manage your active sessions across different devices.</p></div></div><div className="mt-3 flex items-center justify-between rounded-md border border-black/10 px-2.5 py-2"><div><p className="text-[9px] font-bold">Current Session <span className="ml-1 text-[8px] font-normal text-[#159447]">This device</span></p><p className="text-[8px] text-black/50">Windows · Chrome · Colombo, Sri Lanka</p></div><span className="text-[8px] font-semibold text-[#159447]">Active now</span></div><p className="mt-2 text-[8px] text-black/55">You&apos;re all set! There are no other active sessions.</p></SettingsCard>
			</> : <>
				<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Bell size={13} /><div><h2 className="text-[10px] font-bold">Email Notifications</h2><p className="text-[8px] text-black/50">Choose what emails you want to receive from IOEL.</p></div></div><NotificationList items={emailNotifications} /></SettingsCard>
				<SettingsCard className="mt-3"><div className="flex items-center gap-2"><Bell size={13} /><div><h2 className="text-[10px] font-bold">Platform Notifications</h2><p className="text-[8px] text-black/50">Manage how you receive notifications on the IOEL platform.</p></div></div><NotificationList items={platformNotifications} /><div className="mt-4 flex justify-end"><button type="button" className="rounded-md bg-[#F5A800] px-3 py-1.5 text-[9px] font-bold text-black shadow-[0_4px_12px_rgba(245,168,0,0.2)]">Save Preferences</button></div></SettingsCard>
			</>}
			<p className="mt-5 text-center text-[8px] text-black/45">Need help? Visit our <span className="text-[#d69300]">Help Center</span> or contact <span className="text-[#d69300]">support</span>.</p>
		</main>
		<StudentDashboardFooter />
	</div>;
}
