import { Shield, DollarSign, CheckCircle, Truck, HeadphonesIcon, Clock } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "High-Quality Materials",
      description: "All our equipment meets strict safety standards and is regularly inspected for quality assurance.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Affordable hire and sale rates without compromising on quality or safety standards.",
    },
    {
      icon: Shield,
      title: "Safety-First Equipment",
      description: "Every piece of equipment is certified and designed with worker safety as the top priority.",
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent availability and timely delivery to keep your projects running on schedule.",
    },
    {
      icon: HeadphonesIcon,
      title: "Professional Service",
      description: "Experienced team ready to advise and support you throughout your project.",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Customizable hire periods and payment plans to suit your project requirements.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4">
            Why Choose Melamart
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Built on <span className="text-secondary">Trust & Quality</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to providing the best scaffolding solutions with unmatched reliability and service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                <reason.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-secondary/10 border border-secondary/30">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Get in touch with our team for a free consultation and quote tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-secondary text-secondary-foreground font-bold hover:bg-yellow-light transition-all duration-300 shadow-lg hover:shadow-yellow"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
