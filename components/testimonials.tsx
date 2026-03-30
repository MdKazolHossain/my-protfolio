import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Gafford",
    country: "United States",
    role: "Company Owner,Founder & Host, Escaping The Drift Podcast ",
    feedback: "Absolutely incredible service! My podcast went from 5k downloads to 400k+ in just 1 months. Increase podcast rank & keep it alltime top #30 in business categories. The growth strategy was perfectly tailored to my niche.",
    rating: 5,
  },
  {
    name: "Karen Feeman, Kellybelly, Inc",
    country: "Unites States",
    role: "Company Owner & Host",
    feedback: "Professional, responsive, and results-driven. The launch strategy they provided helped us hit the top #10 in our category within the first week.",
    rating: 5,
  },
  {
    name: "Veto Vergundy",
    country: "United States",
    role: "Music Consultant & Host",
    feedback: "Best investment I made for my podcast. The social media strategy alone brought in thousands of new listeners, downloads. Highly recommend!",
    rating: 5,
  },
  {
    name: "jaeden Schafer",
    country: "United States",
    role: "CEO & Co-Founder of Ai Box",
    feedback: "The data-driven approach really sets them apart. Every recommendation was backed by analytics. Saw 200% growth in 3 months.",
    rating: 5,
  },
  {
    name: "Mart Hoffman",
    country: "United States",
    role: "Host, Real Estate Investor",
    feedback: "From SEO optimization to audience engagement, every aspect was handled professionally. My podcast is now getting sponsorship offers!",
    rating: 5,
  },
  {
    name: "John Perry",
    country: "United States",
    role: "Coach & Host",
    feedback: "Communication was excellent throughout. They understood my vision and helped me build a loyal community around my show .",
    rating: 5,
  },
  {
    name: "Mykel Salomon",
    country: "United States",
    role: "The Human protocol Group Owner & Host",
    feedback: "md kazol delivered excellent Apple & Spotify promotion services and helped my podcast grow organically. He was professional, communicative, and effective in delivering results. Highly recommend his services!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            What Clients Say About My Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take my word for it. Here&apos;s what podcasters have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
