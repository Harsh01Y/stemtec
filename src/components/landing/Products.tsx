
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    title: 'AI-Powered Robotic Arm',
    description: 'High-precision robotic arm with integrated AI for complex assembly and manipulation tasks.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop',
    title: 'Autonomous Mobile Robot',
    description: 'Intelligent AMR for warehouse and logistics automation, featuring advanced navigation and fleet management.',
  },
  {
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2072&auto=format&fit=crop',
    title: 'Computer Vision System',
    description: 'A powerful vision system for quality control, object detection, and process monitoring.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Products = () => {
  return (
    <Section id="products" className="bg-card/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Core Products</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">
        Explore our flagship products, designed for performance, reliability, and intelligence.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
           <motion.div
            key={product.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full group bg-card/50 hover:bg-card/80 transition-colors duration-300">
              <div className="overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
                <Button variant="outline" className="mt-4">Learn More</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Products;
