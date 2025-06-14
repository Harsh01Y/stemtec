
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-muted-foreground">
          Have a project in mind or just want to learn more? We'd love to hear from you.
        </p>
      </div>
      <motion.form
        className="mt-12 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-6">
          <Input type="text" placeholder="Your Name" className="h-12 bg-input"/>
          <Input type="email" placeholder="Your Email" className="h-12 bg-input"/>
          <Textarea placeholder="Your Message" rows={6} className="bg-input"/>
          <Button type="submit" size="lg" className="w-full">Send Message</Button>
        </div>
      </motion.form>
    </Section>
  );
};

export default Contact;
