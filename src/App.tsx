import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import SocialProof from './components/SocialProof';
import LeadForm from './components/LeadForm';
import UpgradeOffer from './components/UpgradeOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemAwareness />
      <SocialProof />
      <LeadForm />
      <UpgradeOffer />
      <Footer />
    </div>
  );
}

export default App;