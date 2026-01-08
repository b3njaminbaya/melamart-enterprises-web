import heroImage from "@/assets/hero-construction.jpg";
import { Button } from "@/components/ui/button";
import { Phone, FileText, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeroSection = () => {
  const branches = [
    { name: "Ruiru Branch", phone: "+254758502216", displayPhone: "+254 758 502 216" },
    { name: "Kikuyu Branch", phone: "+254758445822", displayPhone: "+254 758 445 822" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction scaffolding with workers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-secondary rotate-45" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-secondary rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-secondary -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Trusted by Contractors Nationwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Reliable Scaffolding &{" "}
            <span className="text-secondary">Construction Equipment</span>{" "}
            for Hire and Sale
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="font-semibold text-secondary">Safe. Strong. Dependable</span> solutions for every construction site.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-3">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {branches.map((branch) => (
                  <DropdownMenuItem key={branch.phone} asChild>
                    <a href={`tel:${branch.phone}`} className="flex flex-col items-start cursor-pointer">
                      <span className="font-medium">{branch.name}</span>
                      <span className="text-sm text-muted-foreground">{branch.displayPhone}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto gap-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="h-5 w-5" />
              Request a Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">✓</span>
              </div>
              <span className="text-sm">Quality Materials</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">✓</span>
              </div>
              <span className="text-sm">Competitive Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">✓</span>
              </div>
              <span className="text-sm">Safety First</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;