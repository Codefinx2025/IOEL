import { useEffect, useState } from 'react';
import LectureDashboard from './pages/lecturer/LectureDashboard';
import HomePage from './pages/home/HomePage';
import StudentSignIn from './pages/student/StudentSignIn';
import StudentSignUp from './pages/student/StudentSignUp';
import StudentAllCourses from './pages/student/StudentAllCourses';
import StudentFogotPassword from './pages/student/StudentFogotPassword';
import StudentChangePassword from './pages/student/StudentChangePassword';
import StudentCourseDetails from './pages/student/StudentCourseDetails';
import StudentSavedCourses from './pages/student/StudentSavedCourses';
import StudentCourseLearning from './pages/student/StudentCourseLearning';
import StudentProfile from './pages/student/StudentProfile';
import StudentShoppingCart from './pages/student/StudentShoppingCart';
import StudentCheckout from './pages/student/StudentCheckout';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (nextPath: string) => {
    if (nextPath === window.location.pathname) return;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f4f1] text-[#111111]">
      {path === '/' || path === '' || path === '/student-course-learning' ? (
        <StudentCourseLearning />
      ) : path === '/home' ? (
        <HomePage onEnrollClick={() => navigate('/student-signup')} />
      ) : path === '/student-saved-courses' ? (
        <StudentSavedCourses />
			) : path === '/student-course-details' ? (
			<StudentCourseDetails />
      ) : path === '/student-profile' ? (
      <StudentProfile />
      ) : path === '/student-shopping-cart' ? (
        <StudentShoppingCart />
      ) : path === '/student-checkout' ? (
        <StudentCheckout />
      ) : path === '/lecturer-dashboard' ? (
        <LectureDashboard />
      ) : path === '/student-all-courses' || path === '/student-dashboard' ? (
        <StudentAllCourses />
      ) : path === '/student-signup' ? (
        <StudentSignUp onBackHome={() => navigate('/home')} onSignInClick={() => navigate('/student-signin')} />
      ) : path === '/student-signin' ? (
        <StudentSignIn
          onBackHome={() => navigate('/home')}
          onSignUpClick={() => navigate('/student-signup')}
          onForgotPasswordClick={() => navigate('/student-forgot-password')}
        />
      ) : path === '/student-forgot-password' ? (
        <StudentFogotPassword onBackToSignIn={() => navigate('/student-signin')} onClose={() => navigate('/home')} />
      ) : path === '/student-change-password' ? (
        <StudentChangePassword onBackToSignIn={() => navigate('/student-signin')} onClose={() => navigate('/home')} />
      ) : (
        <LectureDashboard />
      )}
    </div>
  );
}