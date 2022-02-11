import './App.css';
import Benefits from './components/Benefits';
import Convert3DPro from './components/Convert3DPro';
import Counseling from './components/Counseling';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import FeaturedResults from './components/FeaturedResults';
import Financing from './components/Financing';
import FloatingSidebar from './components/FloatingSidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Masters from './components/Masters';
import Memberships from './components/Memberships';
import Navbar from './components/Navbar';
import ZbrushDistributor from './components/ZbrushDistributor';

function App() {
  return (
    <main className="App">
      <Navbar />
      <FloatingSidebar />
      <Header />
      <Masters />
      <Courses />
      <Convert3DPro />
      <Memberships />
      <Counseling />
      <FeaturedResults />
      <Benefits />
      <ZbrushDistributor />
      <Financing />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
