
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card/20 border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary">STEMTEC</h3>
            <p className="mt-2 text-muted-foreground">
              Engineering the future of AI and Robotics.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          &copy; {year} STEMTEC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
