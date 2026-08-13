import { useEffect, useState } from 'react';
import LectureDashboard from './pages/lecturer/LectureDashboard';
import HomePage from './pages/home/HomePage';
import StudentSignIn from './pages/student/StudentSignIn';
import StudentSignUp from './pages/student/StudentSignUp';
import StudentAllCourses from './pages/student/StudentAllCourses';

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
      {path === '/' || path === '/lecturer-dashboard' || path === '' ? (
        <LectureDashboard />
      ) : path === '/home' ? (
        <HomePage onEnrollClick={() => navigate('/student-signup')} />
      ) : path === '/student-all-courses' || path === '/student-dashboard' ? (
        <StudentAllCourses />
      ) : path === '/student-signup' ? (
        <StudentSignUp onBackHome={() => navigate('/home')} onSignInClick={() => navigate('/student-signin')} />
      ) : path === '/student-signin' ? (
        <StudentSignIn onBackHome={() => navigate('/home')} onSignUpClick={() => navigate('/student-signup')} />
      ) : (
        <LectureDashboard />
      )}
    </div>
  );
}