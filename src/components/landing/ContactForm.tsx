
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.form
      className="max-w-xl mx-auto"
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
  );
};

export default ContactForm;
