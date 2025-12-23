import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Melamart Enterprises Limited | Scaffolding & Construction Equipment for Hire & Sale</title>
        <meta name="description" content="Melamart Enterprises Limited is a trusted provider of scaffolding and construction equipment for hire and sale in Kenya. Safe, strong, and dependable solutions for every construction site." />
        <meta name="keywords" content="scaffolding, construction equipment, scaffolding hire, scaffolding sale, construction Kenya, ladders, pipes, clamps, timber, working platforms" />
        <link rel="canonical" href="https://melamartscaffolding.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Melamart Enterprises Limited | Scaffolding & Construction Equipment" />
        <meta property="og:description" content="Reliable scaffolding and construction equipment for hire and sale. Safe, strong, dependable solutions for every construction site." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melamartscaffolding.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Melamart Enterprises Limited",
            "description": "Trusted provider of scaffolding and construction equipment for hire and sale",
            "url": "https://melamartscaffolding.com",
            "telephone": "+254700000000",
            "email": "info@melamartscaffolding.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
            "serviceType": ["Scaffolding Hire", "Scaffolding Sale", "Construction Equipment"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
