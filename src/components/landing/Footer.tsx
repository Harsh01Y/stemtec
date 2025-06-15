
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
            <a href="/" className="inline-block">
              <img src="/lovable-uploads/88b53153-b805-491e-8d72-6d3f2dd10272.png" alt="STEMTEC Logo" className="h-12 mx-auto sm:mx-0" />
            </a>
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
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
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
            <h4 className="font-semibold text-foreground mb-4">{t('footer.language')}</h4>
            <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
              <SelectTrigger className="w-full max-w-[150px] mx-auto sm:mx-0">
                <SelectValue placeholder={t('footer.language')} />
              </SelectTrigger>
              <SelectContent>
                {languages.map(lang => (
                  <SelectItem key={lang.code} value={lang.code}>{lang.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            {t('footer.copyright', { year })}
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
