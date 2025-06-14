
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <motion.div 
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="block">STEMTEC</span>
          <span className="block text-primary">INNOVATION IN AI & ROBOTICS</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          Pioneering the future with intelligent automation and cutting-edge robotics solutions tailored for your industry.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView()}>
            Our Services
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
