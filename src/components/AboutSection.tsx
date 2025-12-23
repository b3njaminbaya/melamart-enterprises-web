import { Building2, Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Shield, value: "100%", label: "Safety Record" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-primary font-semibold text-sm mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-primary">Construction Equipment</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Melamart Enterprises Limited is a trusted provider of scaffolding and construction equipment, offering reliable, safe, and cost-effective solutions for projects of all sizes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We serve contractors, developers, and construction professionals with quality materials available for both hire and sale. Our commitment to excellence and safety has made us a preferred choice for construction sites across the region.
            </p>

            {/* Mission Statement */}
            <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-secondary">
              <p className="text-foreground font-medium italic">
                "Our mission is to provide dependable scaffolding solutions that empower builders to work safely and efficiently, completing every project on time and within budget."
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-elevated p-6 md:p-8 text-center group hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <stat.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
