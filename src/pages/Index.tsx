'use client';

import * as React from 'react';
import Hero from '@/components/landing/Hero';
import { LogoScroller, TECH_STACK, PARTNERS } from '@/components/landing/LogoScroller';
import Services from '@/components/landing/Services';
import Products from '@/components/landing/Products';
import About from '@/components/landing/About';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Contact from '@/components/landing/Contact';

const Index = () => {
  return (
    <>
      <Hero />
      <LogoScroller title="Our Technology Backbone" logos={TECH_STACK} direction="left" />
      <LogoScroller title="Engineered with" logos={PARTNERS} direction="right" isStatic={true} />
      <Services />
      <Products />
      <About />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Index;
