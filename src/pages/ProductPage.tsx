import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/landing/Section';
import { products } from '@/components/landing/Products';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.slug === productId);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-background">
        <Section>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Product Not Found</h1>
            <p className="mt-4 text-muted-foreground">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')} className="mt-8">
              Go Back Home
            </Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{product.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold">Key Features</h2>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Advanced sensor integration</li>
                    <li>Real-time data processing</li>
                    <li>AI-powered decision making</li>
                    <li>Modular design architecture</li>
                    <li>Robust safety protocols</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold">Applications</h2>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Research and Development</li>
                    <li>Educational Institutions</li>
                    <li>Industrial Automation</li>
                    <li>Smart Manufacturing</li>
                  </ul>
                </div>
                
                <div className="pt-6">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="w-full md:w-auto"
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductPage; 