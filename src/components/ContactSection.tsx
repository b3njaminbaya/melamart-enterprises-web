import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const locations = [
    {
      name: "Main Office - Ruiru",
      address: "Off Eastern Bypass, Ruiru, Kenya",
      phone: "+254 758 502 216",
      mapUrl: "https://maps.google.com/?q=-1.16186,36.94841",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.5!2d36.94841!3d-1.16186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDknNDIuNyJTIDM2wrA1Nic1NC4zIkU!5e0!3m2!1sen!2ske!4v1",
    },
    {
      name: "Kikuyu Branch",
      address: "Thogoto - Mutarakwa Road, Opposite Gikambura Primary School, Kikuyu",
      phone: "+254 758 445 822",
      mapUrl: "https://maps.google.com/?q=-1.284432,36.632748",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.5!2d36.632748!3d-1.284432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMDQuMCJTIDM2wrAzNyc1Ny45IkU!5e0!3m2!1sen!2ske!4v1",
    },
  ];

  const generalInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@melamartscaffolding.com",
      href: "mailto:info@melamartscaffolding.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 8:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-primary font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Contact us today for a free quote and expert advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Locations */}
            <div className="card-elevated p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Our Locations
              </h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="pb-5 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-foreground mb-3">{location.name}</h4>
                    
                    {/* Embedded Map */}
                    <div className="rounded-lg overflow-hidden mb-3 border border-border">
                      <iframe
                        src={location.embedUrl}
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map - ${location.name}`}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                          <MapPin className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors pt-2">
                          {location.address}
                        </div>
                      </a>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                          <Phone className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors pt-2">
                          {location.phone}
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Info */}
            <div className="card-elevated p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                General Inquiries
              </h3>
              <div className="space-y-4">
                {generalInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <info.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{info.label}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card-elevated p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project and equipment needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[140px] resize-none"
                  />
                </div>

                <Button type="submit" variant="secondary" size="lg" className="w-full gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
