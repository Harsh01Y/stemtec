import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '@/components/landing/Section';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from './BlogPage';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 bg-background">
        <Section>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="ghost" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-background">
      <Section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <h1 className="text-4xl font-bold text-foreground">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.description}</p>
            </div>

            <div 
              className="mt-12 prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t">
              <h3 className="text-2xl font-semibold mb-6">Related Posts</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link 
                      key={relatedPost.slug} 
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="mt-2 text-muted-foreground">{relatedPost.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPostPage; 