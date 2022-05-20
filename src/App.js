import './App.css';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Invites from './components/Invites';
import Learn from './components/Learn';
import Navbar from './components/Navbar';
import Whiteboard from './components/Whiteboard';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Header />
      <Learn />
      <Information />
      <Invites />
      <Whiteboard />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
