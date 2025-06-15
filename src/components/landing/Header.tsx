
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: t('header.services'), href: '/#services' },
    { title: t('header.products'), href: '/#products' },
    { title: t('header.about'), href: '/#about' },
    { title: t('header.team'), href: '/team' },
    { title: t('header.blog'), href: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/95 backdrop-blur-lg border-b border-gray-200'
          : 'py-6 bg-gradient-to-b from-black/40 to-transparent'
      }`}
      style={{
        boxShadow: scrolled
          ? '0 2px 12px 0 rgba(20,25,40,0.07)'
          : 'none',
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/">
          <img src="/lovable-uploads/88b53153-b805-491e-8d72-6d3f2dd10272.png" alt="STEMTEC Logo" className="h-16" />
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`hover:text-primary transition-colors font-medium tracking-wide ${scrolled ? 'text-slate-800' : 'text-white'}`}
              style={{ textShadow: !scrolled ? "0 1px 8px rgba(0,0,0,0.20)" : undefined }}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              className={
                scrolled
                  ? 'border border-slate-300 bg-white text-black hover:bg-gray-100'
                  : 'border border-white bg-transparent text-white hover:bg-white hover:text-black'
              }
            >
              {t('header.contact_us')}
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={`h-6 w-6 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-[100] transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-2xl text-white hover:text-primary transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.20)" }}
            >
              {link.title}
            </a>
          ))}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button size="lg" className="mt-8">
              {t('header.contact_us')}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
