
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card/20 border-t border-border mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <img src="/lovable-uploads/88b53153-b805-491e-8d72-6d3f2dd10272.png" alt="STEMTEC Logo" className="h-12 mx-auto sm:mx-0" />
            </a>
            <p className="mt-4 text-muted-foreground">
              Engineering the future of AI and Robotics.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">Career</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Language</h4>
            <Select defaultValue="en">
              <SelectTrigger className="w-full max-w-[150px] mx-auto sm:mx-0">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            &copy; {year} STEMTEC AI & Robotics. All rights reserved.
          </p>
          <div className="flex space-x-2">
            <a href="#" className="p-2 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
