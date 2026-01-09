import logo from "@/assets/melamart-logo-icon.png";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const branches = [
    { name: "Ruiru Branch", phone: "+254758502216", displayPhone: "+254 758 502 216" },
    { name: "Kikuyu Branch", phone: "+254758445822", displayPhone: "+254 758 445 822" },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border shadow-card">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 px-4 md:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Melamart Enterprises Limited" className="h-20 w-auto" />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-primary block leading-tight">Melamart</span>
              <span className="text-xs text-muted-foreground">Enterprises Limited</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="default" className="gap-2">
                  <Phone className="h-4 w-4" />
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
            <Button variant="secondary" size="default" onClick={scrollToContact}>
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
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
                <Button variant="secondary" className="w-full" onClick={scrollToContact}>
                  Request Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;