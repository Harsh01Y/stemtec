import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/lovable-uploads/main_image_stemtec.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full"
              style={{
                animation: `wave ${2 + index * 0.5}s linear infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="relative z-10 p-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span 
            className="block font-bold" 
            style={{ 
              fontFamily: "'Futurism', sans-serif",
              fontWeight: 'bold',
              background: 'linear-gradient(to bottom, #FFFFFF 0%, #A5A5A5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.15))'
            }}
          >
            STEMTEC
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(to right, #E0E0E0, #FFFFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.1em'
          }}
        >
          Build. Train. Innovate.
        </motion.p>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-200/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Redefining Industries with AI-Driven Automation and Robotic Excellence.
        </motion.p>

        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white min-w-[160px]"
            onClick={() => document.getElementById('services')?.scrollIntoView()}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
