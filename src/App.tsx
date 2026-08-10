import { useEffect, useState } from 'react';
import HomePage from './pages/home/HomePage';
import StudentSignIn from './pages/student/StudentSignIn';
import StudentSignUp from './pages/student/StudentSignUp';
import StudentDashboard from './pages/student/StudentDashboard';

export default function App() {
  const [path, setPath] = useState(window.location.pathname === '/' ? '/student-dashboard' : window.location.pathname);

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
    <div className="min-h-screen bg-[#0A0A0A] text-white">
        {path === '/student-dashboard' ? (
          <StudentDashboard onNavigateHome={() => navigate('/')} />
        ) : path === '/student-signup' ? (
        <StudentSignUp onBackHome={() => navigate('/')} onSignInClick={() => navigate('/student-signin')} />
      ) : path === '/student-signin' ? (
        <StudentSignIn onBackHome={() => navigate('/')} onSignUpClick={() => navigate('/student-signup')} />
      ) : (
        <HomePage onEnrollClick={() => navigate('/student-signup')} />
      )}
    </div>
  );
}