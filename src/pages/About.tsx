import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb, Award, Shield, Zap, HeadphonesIcon } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our business dealings",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in every solution we deliver",
    },
    {
      icon: Heart,
      title: "Customer-Centricity",
      description: "Your success is our success - we're committed to your goals",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to solve complex challenges",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Developers",
      description: "Our team consists of certified Odoo developers with years of hands-on experience in ERP implementations, custom development, and system integrations.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all. Every solution is customized to match your specific business processes and objectives.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at deployment. We provide continuous support, maintenance, and optimization services to ensure your success.",
    },
    {
      icon: Zap,
      title: "Proven Results",
      description: "With a track record of successful implementations across various industries, we deliver measurable results that drive business growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ERP Innovex</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A subsidiary of Innovex-om, dedicated to delivering exceptional Odoo ERP solutions and data-driven business transformations
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are passionate about helping businesses streamline their operations and unlock their full potential through innovative technology solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As the IT wing of Innovex-om, we specialize in delivering exceptional Odoo ERP solutions, advanced data analytics, and AI-powered business intelligence that automate processes and transform how organizations operate.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of experienced developers and consultants brings deep expertise in Odoo customization, system integration, and data engineering to every project.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-hover">
              <img
                src={aboutImage}
                alt="Our team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities spanning ERP development, data engineering, and business intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Odoo Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Custom module development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>System integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>API development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Data Engineering</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>ETL/ELT pipelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Database optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Data warehouse design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Real-time streaming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI & Analytics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Machine learning models</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>BI dashboard creation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Data visualization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in delivering exceptional Odoo solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6 flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
