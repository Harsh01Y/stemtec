
import Section from './Section';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-muted-foreground">
          Have a project in mind or just want to learn more? We'd love to hear from you.
        </p>
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
