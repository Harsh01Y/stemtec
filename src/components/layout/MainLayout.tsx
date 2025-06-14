
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground font-sans flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
