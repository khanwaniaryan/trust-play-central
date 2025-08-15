import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: [
        { name: "How We Review", href: "#methodology" },
        { name: "Our Team", href: "#team" },
        { name: "Editorial Policy", href: "#policy" },
        { name: "Contact Us", href: "#contact" },
        { name: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Casinos by Country",
      links: [
        { name: "India Casinos", href: "#india" },
        { name: "UK Casinos", href: "#uk" },
        { name: "US Casinos", href: "#us" },
        { name: "Canada Casinos", href: "#canada" },
        { name: "Australia Casinos", href: "#australia" }
      ]
    },
    {
      title: "Games",
      links: [
        { name: "Free Slots", href: "#slots" },
        { name: "Live Casino", href: "#live" },
        { name: "Poker Games", href: "#poker" },
        { name: "Blackjack", href: "#blackjack" },
        { name: "Roulette", href: "#roulette" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Responsible Gambling", href: "#responsible" },
        { name: "Gambling Addiction Help", href: "#help" },
        { name: "How Reviews Work", href: "#reviews" },
        { name: "Terms & Conditions", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "Facebook", icon: "📘", href: "#facebook" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "YouTube", icon: "📺", href: "#youtube" }
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                CasinoGuide
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted source for independent casino reviews, expert analysis, and safe gambling guidance since 1995.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>editorial@casinoguide.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>London, UK</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notices */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="space-y-6">
            {/* Gambling Warning */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-red-300 mb-2">
                🔞 Responsible Gambling Notice
              </h5>
              <p className="text-red-200 text-sm leading-relaxed">
                Gambling can be addictive. Please play responsibly and within your means. 
                If you feel you have a gambling problem, seek help immediately at{" "}
                <a href="https://www.gamblersanonymous.org" className="underline hover:no-underline">
                  GamblersAnonymous.org
                </a>{" "}
                or call the National Problem Gambling Helpline at 1-800-522-4700.
              </p>
            </div>

            {/* Affiliate Disclosure */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-blue-300 mb-2">
                💰 Affiliate Disclosure
              </h5>
              <p className="text-blue-200 text-sm leading-relaxed">
                CasinoGuide.com may receive compensation from casino operators when you click on our links 
                and make deposits. This helps us maintain our free service and provide independent reviews. 
                Our editorial team maintains full independence and our reviews are not influenced by commercial relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 CasinoGuide.com. All rights reserved. 
              <span className="ml-2">
                Licensed by the Malta Gaming Authority (MGA/CRP/688/2019)
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;