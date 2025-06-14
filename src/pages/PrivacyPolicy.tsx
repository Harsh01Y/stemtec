
import Section from '@/components/landing/Section';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-20">
      <Section id="privacy-policy">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">1. Introduction</h2>
              <p>
                Welcome to STEMTEC AI & Robotics ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@stemtec.com" className="text-primary hover:underline">privacy@stemtec.com</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicyPage;
