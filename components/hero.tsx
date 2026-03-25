import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Mic, TrendingUp, Users } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              Digital Marketing Specialist
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Professional Podcast Marketing & Growth Services
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Helping podcasters reach new audiences, grow downloads, and build 
              engaged communities through data-driven marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="#services">
                  <Play className="w-5 h-5 mr-2" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">1M+</p>
                <p className="text-sm text-muted-foreground">Downloads Generated</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Mic className="w-5 h-5" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Podcasts Grown</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-2 relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute top-4 left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                  <div className="absolute bottom-8 right-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
                  
                  {/* Central Icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                      <Mic className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <p className="text-xl font-semibold text-foreground">Podcast Expert</p>
                    <p className="text-muted-foreground">8+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">+250% Growth</p>
                  <p className="text-xs text-muted-foreground">Avg. Client Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
