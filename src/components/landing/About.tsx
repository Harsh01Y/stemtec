import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <img 
            src="/lovable-uploads/STEMTEC.png"
            alt="STEMTEC Company"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About STEMTEC</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            At STEMTEC, we are driven by a passion for innovation and a commitment to excellence. Our mission is to empower businesses with transformative AI and robotics technologies, turning complex challenges into growth opportunities.
          </p>
          <p className="mt-4 text-muted-foreground">
            Founded by a team of experts in robotics, artificial intelligence, and software engineering, we bridge the gap between industrial needs and technological possibilities. We believe in building strong partnerships with our clients to create solutions that are not only powerful but also practical and sustainable.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
