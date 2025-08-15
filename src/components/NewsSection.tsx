import { Clock, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const featuredArticle = {
    title: "The Future of Cryptocurrency in Online Gambling: What Players Need to Know",
    excerpt: "As crypto adoption grows, we analyze the benefits and risks of using digital currencies for online casino gaming, including privacy, speed, and regulatory considerations.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    readTime: "8 min read",
    date: "2 days ago",
    category: "Industry Analysis"
  };

  const newsArticles = [
    {
      title: "New Slot Game 'Mystic Fortune' Breaks Jackpot Records",
      excerpt: "The latest release from NetEnt has already paid out over $2M in its first week...",
      image: "https://images.unsplash.com/photo-1551554781-c46200ea959d?w=300&h=150&fit=crop",
      readTime: "3 min read",
      date: "1 day ago",
      category: "Game Reviews"
    },
    {
      title: "UK Gambling Commission Updates Responsible Gaming Guidelines",
      excerpt: "New measures include enhanced player protection tools and stricter advertising rules...",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=150&fit=crop",
      readTime: "5 min read", 
      date: "3 days ago",
      category: "Regulation"
    },
    {
      title: "Mobile Casino Gaming Reaches All-Time High",
      excerpt: "Latest industry data shows 78% of players now prefer mobile gaming over desktop...",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=150&fit=crop",
      readTime: "4 min read",
      date: "5 days ago", 
      category: "Industry Trends"
    },
    {
      title: "Live Dealer Evolution: The Next Generation of Online Gaming",
      excerpt: "Studios are introducing AR elements and interactive features to enhance the live experience...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=150&fit=crop",
      readTime: "6 min read",
      date: "1 week ago",
      category: "Technology"
    }
  ];

  return (
    <section className="section-spacing" id="news">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest Industry News
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Stay informed with the latest developments in the online casino industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <article className="casino-card group">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <TrendingUp className="h-4 w-4 inline mr-1" />
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* News List */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Recent Headlines</h3>
            
            {newsArticles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-smooth"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-text-muted">{article.date}</span>
                    </div>
                    
                    <h4 className="font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                See All News
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;