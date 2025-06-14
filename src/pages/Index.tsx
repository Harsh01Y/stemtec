
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import { LogoScroller, DUMMY_CUSTOMERS, DUMMY_PARTNERS } from '@/components/landing/LogoScroller';
import Services from '@/components/landing/Services';
import Products from '@/components/landing/Products';
import About from '@/components/landing/About';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <LogoScroller title="Trusted by Industry Leaders" logos={DUMMY_CUSTOMERS} direction="left" />
        <LogoScroller title="Our Valued Partners" logos={DUMMY_PARTNERS} direction="right" />
        <Services />
        <Products />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
