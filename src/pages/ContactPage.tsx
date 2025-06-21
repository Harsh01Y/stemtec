import ContactForm from '@/components/landing/ContactForm';
import Section from '@/components/landing/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="md:mt-12">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Email</h3>
                  <p className="text-muted-foreground">For general inquiries</p>
                  <a href="mailto:admin@stemtec.in" className="text-primary hover:underline">admin@stemtec.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                  <p className="text-muted-foreground">Mon-Fri from 9am to 5pm</p>
                  <a href="tel:+918825022160" className="text-primary hover:underline">+91 88250 22160</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Office</h3>
                  <p className="text-muted-foreground">
                    V-Nest, Academic Block - 3,<br/>
                    Kelambakkam - Vandalur Rd,<br/>
                    Rajan Nagar, Chennai,<br/>
                    Tamil Nadu 600127
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 md:mt-12">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
