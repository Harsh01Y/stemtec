'use client';

import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ml', name: 'മലയാളം' },
  ];

  return (
    <footer className="bg-card/20 border-t border-border mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <img src="/lovable-uploads/88b53153-b805-491e-8d72-6d3f2dd10272.png" alt="STEMTEC Logo" className="h-12" />
              <span className="font-['Futurism'] text-2xl text-blue-400">STEMTEC</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              {t('footer.slogan')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.services')}</a></li>
              <li><a href="/#products" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.products')}</a></li>
              <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.about_us')}</a></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.blog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.team')}</Link></li>
              <li><Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.career')}</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.privacy_policy')}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.contact_us')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                V-Nest, Academic Block - 3,<br/>
                Kelambakkam - Vandalur Rd,<br/>
                Rajan Nagar, Chennai,<br/>
                Tamil Nadu 600127
              </li>
              <li><a href="tel:+918825022160" className="text-muted-foreground hover:text-primary transition-colors">+91 88250 22160</a></li>
              <li><a href="mailto:admin@stemtec.in" className="text-muted-foreground hover:text-primary transition-colors">admin@stemtec.in</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.language')}</h4>
            <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
              <SelectTrigger className="w-full max-w-[150px] mx-auto sm:mx-0">
                <SelectValue placeholder={t('footer.language')} />
              </SelectTrigger>
              <SelectContent className="max-h-20">
                {languages.map(lang => (
                  <SelectItem key={lang.code} value={lang.code}>{lang.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-center md:text-left">
            © {year} STEMTEC AI & Robotics Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-2 mt-4 sm:mt-0">
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
