import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AdvantagesSection from './Components/AdvantagesSection'; // исправлено название
import PricesSection from './Components/PricesSection'; // исправлено название
import ReviewsSection from './Components/ReviewsSection'; // исправлено название
import CompositionSection from './Components/CompositionSection';
import ContactsSection from './Components/ContactsSection'; // исправлено название
import Footer from './Components/Footer'; // исправлено название
import { Toaster } from './Components/ui/sonner'; // исправлен путь
import QuestionAndAnswer from './Components/QuestionAndAnswer';
import Moblael from './Components/Moblael';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PricesSection />
      <AdvantagesSection />
      <ReviewsSection />
       <QuestionAndAnswer/>
      <ContactsSection />
      <Footer />
      <Toaster />
      <CompositionSection />
      <Moblael/>
    </div>
  );
}
//#134980

export default App;