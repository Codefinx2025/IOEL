import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import LearningExperience from './LearningExperience';
import Testimonials from './Testimonials';
import CertificateShowcase from './CertificateShowcase';
import Contact from './Contact';
import Footer from './Footer';

interface HomePageProps {
  onEnrollClick: () => void;
}

export default function HomePage({ onEnrollClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar onEnrollClick={onEnrollClick} />

      <Hero />
      <About />
      <Courses onEnrollClick={onEnrollClick} />
      <LearningExperience />
      <Testimonials />
      <CertificateShowcase />
      <Contact />
      <Footer />
    </div>
  );
}
