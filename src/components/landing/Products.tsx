import { Link, useNavigate } from 'react-router-dom';
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const products = [
  {
    image: '/lovable-uploads/stembot.png',
    title: 'STEMBOT',
    description: 'The STEMBOT is a compact, multi-tiered mobile robotics unit designed for educational, research, and prototyping applications.',
    slug: 'stembot'
  },
  {
    image: '/lovable-uploads/outdoor-bot.png',
    title: 'OUTDOOR AUTONOMOUS BOT',
    description: 'The Outdoor Autonomous Bot is a rugged, smart mobility solution designed for field operations and research tasks.',
    slug: 'outdoor_autonomous_bot'
  },
  {
    image: '/lovable-uploads/iot-kit.png',
    title: 'IOT TRAINER KIT',
    description: 'The IoT Trainer Kit is a compact, all-in-one educational platform designed for hands-on learning and rapid prototyping in embedded systems and IoT.',
    slug: 'iot_trainer_kit'
  },
  {
    image: '/lovable-uploads/smart-dustbin.png',
    title: 'SMART AUTONOMOUS DUSTBIN',
    description: 'The Smart Autonomous Dustbin is an innovative, AI-powered waste management robot designed for intelligent indoor use.',
    slug: 'smart_dustbin'
  },
  {
    image: '/lovable-uploads/tortoise-bot.png',
    title: 'TORTISE BOT',
    description: 'The Tortoise Bot is a high-performance, AI-enabled mobile robotics platform designed for research, education, and development.',
    slug: 'tortoise_bot'
  }
];

const ProductCard = ({ 
  product, 
  index 
}: { 
  product: typeof products[0], 
  index: number
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="overflow-hidden h-full group bg-card/50 hover:bg-card/80 transition-colors duration-300">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="mt-2 text-muted-foreground">{product.description}</p>
          <div className="mt-4 flex gap-4">
            <Link to={`/products/${product.slug}`}>
              <Button variant="outline">Learn More</Button>
            </Link>
            <Button onClick={() => navigate('/contact')}>Request Demo</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Products = () => {
  const [duplicatedProducts] = useState([...products, ...products, ...products]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let startTime: number | null = null;
    const totalDuration = 40000; // 40 seconds for one complete cycle
    let pausedPosition = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (isPaused) {
        pausedPosition = scrollContainer.scrollLeft;
        lastTimestamp = timestamp;
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - (startTime + (isPaused ? timestamp - lastTimestamp : 0));
      const progress = (elapsed % totalDuration) / totalDuration;
      
      // Calculate the scroll position for left-to-right movement
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const newPosition = progress * maxScroll;
      
      // Smooth scroll to the new position
      scrollContainer.scrollLeft = newPosition;

      // Reset if we've reached the end
      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollLeft = 0;
        startTime = timestamp;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPaused]);

  return (
    <Section id="products" className="bg-card/20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Core Products</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">
        Explore our flagship products, designed for performance, reliability, and intelligence.
      </p>
      <div 
        className="mt-12 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedProducts.map((product, index) => (
            <div key={`${product.slug}-${index}`} className="w-[300px] flex-shrink-0">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Products;
