import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      // Track subscription
      console.log('Newsletter signup:', email);
    }
  };

  const benefits = [
    "Weekly bonus alerts & exclusive offers",
    "New casino reviews first",
    "Industry news & regulatory updates",
    "Free spins & no-deposit bonuses"
  ];

  if (isSubscribed) {
    return (
      <section className="section-spacing bg-primary/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-moderate">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Welcome to the Club!</h3>
              <p className="text-text-secondary mb-6">
                You're all set! Check your inbox for a welcome email with your first exclusive bonus offers.
              </p>
              <Button 
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
                onClick={() => setIsSubscribed(false)}
              >
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-primary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-moderate">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Value Proposition */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Never Miss a Great Casino Bonus
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Join 50,000+ players who get exclusive access to the best casino bonuses and insider updates.
                  </p>
                </div>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <Mail className="h-4 w-4" />
                  <span>Weekly emails only • Unsubscribe anytime • Privacy protected</span>
                </div>
              </div>

              {/* Right: Signup Form */}
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full py-3 text-lg border-2 focus:border-primary"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 text-lg"
                    data-tracking="newsletter_signup"
                  >
                    Get Weekly Bonus Alerts
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>

                {/* Alternative Signup Options */}
                <div className="text-center">
                  <div className="text-sm text-text-muted mb-3">or continue with</div>
                  <Button 
                    variant="outline"
                    className="border-border text-text-secondary hover:bg-surface"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>
                </div>

                <p className="text-xs text-text-muted text-center">
                  By subscribing, you agree to our{" "}
                  <a href="#privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to receive promotional emails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;