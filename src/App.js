import './App.css';
import ContentMaster from './components/ContentMaster';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Professional from './components/Professional';
import Results from './components/Results';
import StudyMethod from './components/StudyMethod';
import Trailer from './components/Trailer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <ContentMaster />
      <Trailer />
      <StudyMethod />
      <Professional />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
