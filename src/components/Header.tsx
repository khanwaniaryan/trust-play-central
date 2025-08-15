import { useState, useEffect } from "react";
import { Menu, X, Shield, Star, Phone, MapPin, User, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Online Casinos", href: "#casinos", hasDropdown: true },
    { name: "Free Games", href: "#games", hasDropdown: true },
    { name: "Bonuses", href: "#bonuses", hasDropdown: true },
    { name: "Games", href: "#all-games", hasDropdown: true },
    { name: "News", href: "#news", hasDropdown: false },
    { name: "Country Guides", href: "#countries", hasDropdown: true },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-moderate' 
        : 'bg-background/90 backdrop-blur-sm border-b border-border/50'
    }`}>
      {/* Top utility bar */}
      <div className="bg-surface/30 border-b border-border/30">
        <div className="container-custom py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                <div className="w-5 h-3 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-sm"></div>
                <span className="font-medium">India</span>
                <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded">Legal</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-text-muted">
                <Phone className="h-4 w-4" />
                <span>Live chat Mon–Fri 9–6 IST</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-xs font-medium">4.6 — 2.1M readers</span>
              </div>
              <div className="hidden md:flex items-center gap-1 text-text-muted">
                <Globe className="h-4 w-4" />
                <span className="text-xs">EN</span>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-text-muted hover:text-primary">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">CasinoGuide</div>
                <div className="text-xs text-text-muted leading-none">Trusted since 1995</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </a>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-xs text-text-muted">
              <span>Compare</span>
              <span className="ml-1 bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs">0</span>
            </div>
            <Button variant="outline" className="border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Free Games
            </Button>
            <Button className="btn-hero-primary relative overflow-hidden group">
              <span className="relative z-10">Claim Bonuses</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Button>
            <div className="text-xs text-text-muted">
              Affiliate links
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-surface rounded-lg transition-colors text-text-secondary hover:text-primary"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between text-text-secondary hover:text-primary hover:bg-surface/50 transition-all font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                  Free Games
                </Button>
                <Button className="btn-hero-primary">
                  Claim Bonuses
                </Button>
                <p className="text-xs text-text-muted text-center mt-2">
                  Affiliate links — we may earn commissions
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Scroll indicator */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      )}
    </header>
  );
};

export default Header;