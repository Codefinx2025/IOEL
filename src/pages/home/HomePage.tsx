import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import LearningExperience from './LearningExperience';
import Testimonials from './Testimonials';
import CertificateShowcase from './CertificateShowcase';
import Contact from './Contact';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <Hero />
      <About />
      <Courses />
      <LearningExperience />
      <Testimonials />
      <CertificateShowcase />
      <Contact />
      <Footer />
    </div>
  );
}
