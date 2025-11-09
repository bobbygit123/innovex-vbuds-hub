import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Factory,
  Landmark,
  HardHat,
  Sprout,
  Hotel,
  Network,
  TrendingUp,
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate & Asset Management",
      color: "bg-blue-500/10 text-blue-500",
      solutions: [
        "Odoo Real Estate & Asset Management",
        "Property Portfolio ERP",
        "Predictive Analytics for Valuation & Rental Yield",
        "Document Management",
        "Mobile Apps for Tenant/Landlord services",
        "Digital Marketing & Branding for Properties",
      ],
    },
    {
      icon: Network,
      name: "Conglomerates & Diversified",
      color: "bg-purple-500/10 text-purple-500",
      solutions: [
        "Unified Odoo ERP across subsidiaries",
        "Business Intelligence Dashboards & Analytics",
        "Group Mobile Apps",
        "Digital Marketing integration for multiple businesses",
      ],
    },
    {
      icon: Factory,
      name: "Manufacturing & Industrial",
      color: "bg-orange-500/10 text-orange-500",
      solutions: [
        "Odoo Manufacturing ERP & Supply Chain",
        "Quality Control Automation (AI Vision)",
        "IoT & Predictive Maintenance Solutions",
        "Production Analytics",
        "Mobile Apps for Factory Workflow",
        "Branding & Process Marketing",
      ],
    },
    {
      icon: Landmark,
      name: "Banking & Finance",
      color: "bg-green-500/10 text-green-500",
      solutions: [
        "Odoo Finance & Core Banking Integration",
        "Digital Onboarding & KYC",
        "Fraud Detection & Compliance AI",
        "Customer Service Chatbots",
        "Mobile Banking Apps",
        "Digital Campaigns for Islamic Finance Offerings",
      ],
    },
    {
      icon: HardHat,
      name: "Engineering & EPC",
      color: "bg-yellow-500/10 text-yellow-500",
      solutions: [
        "Project/Field Service Management via Odoo",
        "Resource Allocation Prediction (AI)",
        "Safety/Incident Analytics",
        "Mobile Project Apps",
        "Brand/Portfolio Website & Lead Generation",
      ],
    },
    {
      icon: Sprout,
      name: "Agriculture/Food",
      color: "bg-emerald-500/10 text-emerald-500",
      solutions: [
        "Odoo Farm Management & Inventory ERP",
        "AI-powered Animal Health Monitoring",
        "Sales/Demand Forecasting analytics",
        "Mobile Apps for Farm Operations",
        "Product Branding & Social Media Campaigns",
      ],
    },
    {
      icon: Hotel,
      name: "Hospitality",
      color: "bg-pink-500/10 text-pink-500",
      solutions: [
        "Hotel PMS & Guest Experience Solutions",
        "Dynamic Pricing & Booking Analytics",
        "Guest Mobile Apps",
        "Digital Marketing for Hotels",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Odoo ERP",
      description: "Core operations, verticals, and integrations for any industry",
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Actionable dashboards for every department",
    },
    {
      title: "AI Automation",
      description: "Predictive maintenance, process optimization, QC, compliance",
    },
    {
      title: "Custom Mobile Apps",
      description: "On-the-go management for clients, employees, and operations",
    },
    {
      title: "Branding & Digital Marketing",
      description: "Enhance market presence, automate engagement, drive growth",
    },
  ];

  const whyChooseUs = [
    "Deep industry knowledge for tailored solutions",
    "Official Odoo partnership with proven ERP deployments",
    "End-to-end digital expertise: analytics, AI, mobile and marketing",
    "Local support and strategic technology consulting",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Industry Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tailored Solutions for Every Industry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From real estate to hospitality, we deliver industry-specific ERP, analytics, and digital solutions
            powered by Odoo, AI, and mobile technology
          </p>
        </div>

        {/* Industry Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                  <industry.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{industry.name}</CardTitle>
                <CardDescription>
                  Specialized solutions designed for {industry.name.toLowerCase()} businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital transformation tools across Odoo, analytics, AI, and mobile
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>{capability.title}</span>
                  </CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <p className="text-lg text-white/90">{reason}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-primary hover:bg-white/90 h-11 px-8 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
