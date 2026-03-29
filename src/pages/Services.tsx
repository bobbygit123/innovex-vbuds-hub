import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings,
  Database,
  GitBranch,
  Zap,
  BarChart3,
  Share2,
  Workflow,
  Shield,
  Brain,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Odoo Enterprise Implementation",
      description: "Complete end-to-end Odoo ERP implementation tailored to your business needs. From initial consultation to deployment and training, we ensure a smooth transition to streamlined operations.",
      features: [
        "Business process analysis and mapping",
        "Custom configuration and setup",
        "Data migration from legacy systems",
        "User training and documentation",
        "Post-implementation support",
      ],
    },
    {
      icon: GitBranch,
      title: "Custom Module & API Development",
      description: "Extend Odoo's capabilities with custom modules and APIs designed specifically for your unique business requirements and workflows.",
      features: [
        "Custom Odoo modules development",
        "RESTful API integration",
        "Third-party system connectors",
        "Workflow automation",
        "Custom business logic implementation",
      ],
    },
    {
      icon: Database,
      title: "Database Migration & Optimization",
      description: "Expert database services including migration from Oracle to PostgreSQL, performance tuning, and optimization for high-volume data operations.",
      features: [
        "Oracle to PostgreSQL migration",
        "Database performance tuning",
        "Query optimization",
        "Index management",
        "ClickHouse implementation for analytics",
      ],
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description: "Optimize your Odoo instance and database systems for maximum performance, ensuring fast response times even under heavy load.",
      features: [
        "System performance analysis",
        "Code optimization",
        "Server configuration tuning",
        "Load balancing setup",
        "Caching strategies implementation",
      ],
    },
    {
      icon: BarChart3,
      title: "Custom Reporting & BI Integration",
      description: "Transform your data into actionable insights with custom reporting solutions and Business Intelligence tool integrations.",
      features: [
        "Metabase dashboard creation",
        "Apache Superset implementation",
        "Power BI integration",
        "Custom report development",
        "Real-time analytics dashboards",
      ],
    },
    {
      icon: Share2,
      title: "Advanced System Integration",
      description: "Seamlessly connect Odoo with your existing software ecosystem for unified business operations.",
      features: [
        "CRM system integration",
        "E-commerce platform connectivity",
        "Payment gateway integration",
        "Shipping and logistics systems",
        "Custom API development",
      ],
    },
    {
      icon: Workflow,
      title: "Data Pipeline & ETL/ELT Setup",
      description: "Build robust data pipelines using industry-leading tools for automated data extraction, transformation, and loading.",
      features: [
        "Apache Airflow workflow orchestration",
        "Kafka real-time data streaming",
        "dbt data transformation",
        "Automated data quality checks",
        "Data warehouse setup",
      ],
    },
    {
      icon: Shield,
      title: "Security Solutions for Odoo",
      description: "Comprehensive security implementations to protect your ERP system and sensitive business data.",
      features: [
        "Security audit and assessment",
        "Role-based access control",
        "Data encryption implementation",
        "Compliance management (GDPR, etc.)",
        "Regular security updates",
      ],
    },
    {
      icon: Brain,
      title: "Analytics & AI/ML Integration",
      description: "Leverage artificial intelligence and machine learning to gain predictive insights and automate decision-making processes.",
      features: [
        "Predictive analytics models",
        "Machine learning integration",
        "Demand forecasting",
        "Customer behavior analysis",
        "Automated recommendation systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive ERP solutions, data engineering, and AI-powered analytics to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help streamline your operations and drive growth
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-primary hover:bg-white/90 h-11 px-8 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
