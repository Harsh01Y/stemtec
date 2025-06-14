
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Products', href: '#products' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-border'
          : 'py-6 bg-gradient-to-b from-black via-blue-900/70 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          STEMTEC
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button>Get a Quote</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-[100] transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-2xl text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button size="lg" className="mt-8">
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

