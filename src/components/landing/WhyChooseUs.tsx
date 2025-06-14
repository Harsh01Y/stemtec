
import Section from './Section';
import { Users, Lightbulb, Heart, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team consists of leading experts and researchers in the AI and robotics fields.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We are constantly pushing the boundaries of technology to deliver creative and effective solutions.',
  },
  {
    icon: Heart,
    title: 'Customer-Centric',
    description: 'Your success is our priority. We work closely with you to understand and meet your needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    description: 'We build robust, reliable, and secure systems that you can depend on for mission-critical operations.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <Section id="why-us" className="bg-card/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose STEMTEC?</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">
        We combine expertise, innovation, and a client-first approach to deliver unparalleled value.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full text-center bg-transparent border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
