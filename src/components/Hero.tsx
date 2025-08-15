import { Search, Star, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const quickFilters = ["Slots", "Live", "Crypto", "India"];

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 surface-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Find Trusted Online Casinos & 
                <span className="text-gradient-primary"> The Best Bonuses</span>
                <br />
                <span className="text-text-secondary text-3xl lg:text-4xl xl:text-5xl">
                  — Reviewed by Experts
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed">
                Independent reviews, verified bonuses and safe-play guidance since 1995.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero-primary"
                data-tracking="hero_cta_primary"
              >
                Claim Latest Bonuses
              </Button>
              
              <Button 
                className="btn-hero-secondary"
                data-tracking="hero_cta_secondary"
              >
                Play Free Games
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <span className="font-semibold">4.6</span>
                <span className="text-text-secondary">— 2.1M monthly readers</span>
              </div>
              
              <div className="trust-badge">
                <Shield className="h-4 w-4" />
                Licensed casinos only
              </div>
            </div>

            {/* Search & Quick Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
                <Input
                  placeholder="Search casinos, games or providers"
                  className="pl-10 py-3 text-lg border-2 focus:border-primary"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-prominent">
              <img
                src={heroIllustration}
                alt="Trusted online casino platform illustration showing secure gaming environment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating trust elements */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-moderate">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium text-sm">SSL Secured</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-moderate">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%+</div>
                <div className="text-xs text-text-secondary">Payout Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;