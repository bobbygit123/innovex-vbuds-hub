import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Settings,
  BarChart3,
  Workflow,
  Shield,
  Zap,
  GitBranch,
  LineChart,
  Brain,
  Server,
} from "lucide-react";
import heroImage from "@/assets/hero-erp.jpg";

const Home = () => {
  const features = [
    {
      icon: Settings,
      title: "ERP Customization",
      description: "Tailored Odoo solutions to fit your unique business needs",
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "SQL, PostgreSQL, Oracle, and ClickHouse expertise",
    },
    {
      icon: Workflow,
      title: "Data Engineering",
      description: "Apache Airflow, Kafka, and dbt implementations",
    },
    {
      icon: GitBranch,
      title: "Custom Modules & APIs",
      description: "Build powerful integrations and extensions",
    },
    {
      icon: Server,
      title: "Database Migration",
      description: "Seamless Oracle to PostgreSQL transitions",
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Metabase, Superset, and Power BI reporting",
    },
  ];

  const transformativeFeatures = [
    {
      icon: GitBranch,
      title: "Integration Services",
      description: "Seamless Odoo integration with your existing systems",
    },
    {
      icon: Settings,
      title: "Custom Development",
      description: "Bespoke modules and workflows for your operations",
    },
    {
      icon: Zap,
      title: "ERP Implementation",
      description: "Expert deployment and optimization services",
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Intuitive, data-driven decision-making tools",
    },
  ];

  const analyticsFeatures = [
    {
      icon: Brain,
      title: "Custom Analytics Modules",
      description: "Advanced dashboards and forecasting capabilities",
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "ClickHouse and high-performance data storage",
    },
    {
      icon: Workflow,
      title: "Automated ETL Workflows",
      description: "Streamlined data pipelines and transformations",
    },
    {
      icon: Shield,
      title: "AI/ML Integration",
      description: "Machine learning models built into your Odoo system",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Businesses with ERP Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Transform your operations with Odoo Enterprise integration, advanced data analytics, and AI-driven business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ERP solutions and data services to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Implementation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Smooth Odoo Implementation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our tailored implementation process ensures seamless integration of Odoo Enterprise into your business operations. We handle everything from initial consultation to deployment and ongoing support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Comprehensive business analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Custom module development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Data migration and integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Training and documentation</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <Settings className="h-32 w-32 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Transformative ERP Features */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformative ERP Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock the full potential of your business with our comprehensive Odoo services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformativeFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics & AI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Data, Analytics & Automation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Harness the power of data with advanced analytics and AI-driven insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate About Your Success
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We specialize in helping businesses streamline their operations through expert Odoo development, seamless integrations, and cutting-edge data solutions.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
