import './App.css';
import Benefits from './components/Benefits';
import Convert3DPro from './components/Convert3DPro';
import Counseling from './components/Counseling';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import FeaturedResults from './components/FeaturedResults';
import Footer from './components/Footer';
import Header from './components/Header';
import Masters from './components/Masters';
import Memberships from './components/Memberships';
import Navbar from './components/Navbar';
import ZbrushDistributor from './components/ZbrushDistributor';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Masters />
      <Courses />
      <Convert3DPro />
      <Memberships />
      <Counseling />
      <FeaturedResults />
      <Benefits />
      <ZbrushDistributor />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
