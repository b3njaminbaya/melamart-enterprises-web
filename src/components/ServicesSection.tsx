import { Layers, Scale, Wrench, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const serviceCategories = [
    {
      icon: Layers,
      title: "Scaffolding & Platforms",
      description: "Complete scaffolding systems and working platforms for safe elevated access on any construction site.",
      products: ["Scaffolding Systems", "Working Platforms", "Safety Rails"],
      color: "primary",
    },
    {
      icon: Scale,
      title: "Ladders & Access Equipment",
      description: "High-quality aluminium and steel ladders designed for durability and safety at height.",
      products: ["Aluminium Ladders", "Steel Ladders", "Extension Ladders"],
      color: "secondary",
    },
    {
      icon: Wrench,
      title: "Pipes, Clamps & Accessories",
      description: "Essential scaffolding components including black pipes, clamps, and connection accessories.",
      products: ["Black Pipes", "Clamps", "Connectors"],
      color: "primary",
    },
    {
      icon: Box,
      title: "Construction Support Materials",
      description: "Additional materials to support your construction needs including timber, wheels, and ropes.",
      products: ["Timber", "Castor Wheels", "Ropes", "Extra Scissors"],
      color: "secondary",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-primary font-semibold text-sm mb-4">
            Our Products & Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quality Equipment for{" "}
            <span className="text-primary">Every Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of scaffolding and construction equipment available for hire and sale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-elevated p-6 md:p-8 group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                category.color === "primary" 
                  ? "bg-primary/10 group-hover:bg-primary" 
                  : "bg-secondary/20 group-hover:bg-secondary"
              }`}>
                <category.icon className={`h-8 w-8 transition-colors ${
                  category.color === "primary"
                    ? "text-primary group-hover:text-primary-foreground"
                    : "text-secondary group-hover:text-secondary-foreground"
                }`} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Products List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {category.products.map((product) => (
                  <span
                    key={product}
                    className="px-3 py-1 rounded-full bg-background text-sm font-medium text-foreground border border-border"
                  >
                    {product}
                  </span>
                ))}
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-xs font-semibold">Available for Hire & Sale</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need something specific? We've got you covered.
          </p>
          <Button variant="default" size="lg">
            View Full Inventory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
