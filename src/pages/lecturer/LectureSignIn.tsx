import StudentSignIn from '../student/StudentSignIn';

interface LectureSignInProps {
	onBackHome: () => void;
	onSignUpClick: () => void;
	onForgotPasswordClick: () => void;
}

export default function LectureSignIn({ onBackHome, onSignUpClick, onForgotPasswordClick }: LectureSignInProps) {
	return (
		<StudentSignIn
			onBackHome={onBackHome}
			onSignUpClick={onSignUpClick}
			onForgotPasswordClick={onForgotPasswordClick}
			heroImage="/images/about.png"
		/>
	);
}