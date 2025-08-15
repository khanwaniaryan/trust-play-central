import { Search, Star, Shield, CheckCircle, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const quickFilters = ["Slots", "Live", "Crypto", "India"];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <Award className="h-4 w-4" />
                Trusted since 1995
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Find Trusted Online Casinos & 
                <span className="text-gradient-primary"> The Best Bonuses</span>
                <br />
                <span className="text-text-secondary text-3xl lg:text-4xl xl:text-5xl font-normal">
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
                className="btn-hero-primary group"
                data-tracking="hero_cta_primary"
              >
                Claim Latest Bonuses
                <TrendingUp className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                className="btn-hero-secondary"
                data-tracking="hero_cta_secondary"
              >
                Play Free Games
              </Button>
            </div>
            
            {/* Affiliate disclosure */}
            <p className="text-xs text-text-muted">
              Affiliate links — we may earn commissions. Play responsibly.
            </p>

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
              
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">10k+ verified payouts</span>
              </div>
            </div>

            {/* Search & Quick Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
                <Input
                  placeholder="Search casinos, games or providers"
                  className="pl-12 py-4 text-lg border-2 focus:border-primary rounded-xl bg-card/50 backdrop-blur-sm"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-smooth"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-prominent">
              <img
                src={heroIllustration}
                alt="Person responsibly enjoying demo casino games on laptop and phone"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating trust elements with enhanced styling */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-prominent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-full">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">SSL Secured</div>
                  <div className="text-xs text-text-muted">Bank-grade encryption</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-prominent">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%+</div>
                <div className="text-xs text-text-secondary">Average RTP</div>
                <div className="text-xs text-text-muted">Audited by eCOGRA</div>
              </div>
            </div>
            
            {/* Additional floating element */}
            <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-secondary to-secondary-hover text-secondary-foreground rounded-2xl p-3 shadow-moderate">
              <div className="text-center">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs">Live Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom social proof */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-center text-text-muted text-sm">
            2.1M monthly readers • 10k+ verified payouts checked • Audited by eCOGRA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;