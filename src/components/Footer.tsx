import logo from "@/assets/melamart-logo-icon.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Scaffolding Systems",
    "Working Platforms",
    "Aluminium Ladders",
    "Steel Ladders",
    "Black Pipes & Clamps",
    "Timber & Accessories",
  ];

  return (
    <footer className="bg-white pt-16 pb-6 border-t border-border">
      <div className="container-custom px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Melamart Enterprises Limited" className="h-16 w-auto" />
              <div>
                <span className="font-heading font-bold text-lg text-primary block leading-tight">Melamart</span>
                <span className="text-xs text-muted-foreground">Enterprises Limited</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for quality scaffolding and construction equipment. Available for hire and sale.
            </p>
            <p className="text-sm font-medium text-primary">
              Scaffolding & Construction Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+254758502216" className="text-muted-foreground hover:text-primary transition-colors">
                    +254 758 502 216 (Ruiru)
                  </a>
                  <a href="tel:+254758445822" className="text-muted-foreground hover:text-primary transition-colors">
                    +254 758 445 822 (Kikuyu)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@melamartscaffolding.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  info@melamartscaffolding.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Melamart Enterprises Limited. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              <a href="https://melamartscaffolding.com" className="hover:text-primary transition-colors">
                melamartscaffolding.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
