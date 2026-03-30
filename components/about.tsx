import { CheckCircle, Award, Clock, Target } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "50+", label: "Clients Served", icon: Target },
  { value: "1M+", label: "Total Reach", icon: Award },
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: CheckCircle },
]

const highlights = [
  "Specialized in podcast growth & promotion",
  "Data-driven marketing strategies",
  "Cross-platform promotion expertise",
  "Audience engagement optimization",
  "SEO & discoverability enhancement",
  "Monetization guidance",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-6 lg:p-8">
                <div className="aspect-[4/5] bg-muted rounded-xl relative overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Md Kazol Hossain - Digital Marketing Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-card/95 backdrop-blur rounded-lg p-4">
                      <p className="font-semibold text-foreground">Md Kazol Hossain</p>
                      <p className="text-sm text-muted-foreground">Podcast Growth Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">8+</span>
                <span className="text-xs">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Your Partner in Podcast Growth & Success
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m a dedicated digital marketing specialist with a passion for helping 
              podcasters reach their full potential. With over 8 years of experience in 
              the podcast industry, I&apos;ve helped creators of all sizes grow their 
              audiences and build sustainable podcast businesses.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines data-driven strategies with creative marketing 
              techniques to deliver measurable results. From brand new shows to 
              established podcasts looking to scale, I provide tailored solutions 
              that drive real growth.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
