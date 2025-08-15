import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCasinos from "@/components/FeaturedCasinos";
import FreeGames from "@/components/FreeGames";
import TrustSection from "@/components/TrustSection";
import CountryGuides from "@/components/CountryGuides";
import NewsSection from "@/components/NewsSection";
import TrustBadges from "@/components/TrustBadges";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedCasinos />
        <FreeGames />
        <TrustSection />
        <CountryGuides />
        <NewsSection />
        <TrustBadges />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
