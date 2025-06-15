
import React from 'react';
import Section from '@/components/landing/Section';

const BlogPage = () => {
  return (
    <div className="pt-24">
      <Section>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Blog</h1>
          <p className="text-center text-muted-foreground mt-4">
            Insights and news from the STEMTEC team. Coming soon!
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card p-6 rounded-lg">
                <div className="w-full h-48 bg-muted rounded-md mb-4 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-muted rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-muted rounded animate-pulse mb-1"></div>
                <div className="h-4 w-5/6 bg-muted rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;
