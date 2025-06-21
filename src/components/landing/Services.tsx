import Section from './Section';
import { Cpu, Cog, Wrench } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cog,
    title: 'Robotics & Automation',
    description: 'Bespoke robotic systems and automation to streamline your operations, increase productivity, and reduce costs.',
  },
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    description: 'Leverage the power of AI with our machine learning models, computer vision, and natural language processing solutions.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'We build custom-tailored AI and robotic solutions from the ground up to solve your unique business challenges.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <Section id="services" className="bg-gradient-to-b from-background via-background/95 to-background/90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          What We Do
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto text-blue-200/80">
          We deliver state-of-the-art solutions in AI and Robotics to propel your business into the future.
        </p>
      </motion.div>
      
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full bg-blue-950/20 backdrop-blur-sm border-blue-400/10 hover:border-blue-400/30 transition-all duration-300">
              <CardHeader className="items-center text-center">
                <div className="bg-blue-600/10 p-4 rounded-full mb-4 ring-1 ring-blue-400/20">
                  <service.icon className="w-10 h-10 text-blue-400" />
                </div>
                <CardTitle className="text-blue-100">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-blue-200/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
