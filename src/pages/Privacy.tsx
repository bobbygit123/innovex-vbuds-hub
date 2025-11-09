const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including name, email address, phone number, and any other information you choose to provide when contacting us or using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. Your data is never sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at sales@erp.innovex-om.com
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
