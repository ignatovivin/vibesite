import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ModulesSection from './components/ModulesSection'
import CustomPlatformSection from './components/CustomPlatformSection'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import PartnersSection from './components/PartnersSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ModulesSection />
      <CustomPlatformSection />
      <BenefitsSection />
      <PricingSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
