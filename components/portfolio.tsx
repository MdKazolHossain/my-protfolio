import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Play } from "lucide-react"
import CommonSlider from "./common-slider"

const caseStudies = [
  {
    title: "Tech Talk Daily",
    category: "Technology",
    description: "Grew from 500 to 15,000 monthly downloads in 6 months through strategic SEO and social promotion.",
    results: {
      growth: "+2,900%",
      downloads: "15K/mo",
      engagement: "+180%",
    },
    color: "bg-blue-500/10",
    accentColor: "text-blue-600",
  },
  {
    title: "Mindful Moments",
    category: "Wellness",
    description: "Launched to #12 on Apple Podcasts wellness charts within first week using comprehensive launch strategy.",
    results: {
      growth: "#12 Chart",
      downloads: "25K/mo",
      engagement: "+220%",
    },
    color: "bg-green-500/10",
    accentColor: "text-green-600",
  },
  {
    title: "Business Builders",
    category: "Business",
    description: "Increased audience engagement by 150% and secured multiple sponsorship deals through brand positioning.",
    results: {
      growth: "+150%",
      downloads: "40K/mo",
      engagement: "3 Sponsors",
    },
    color: "bg-orange-500/10",
    imgs:["/3322.jpg","/3323.jpg"],
    accentColor: "text-orange-600",
  },
  {
    title: "True Crime Files",
    category: "True Crime",
    description: "Built engaged community of 20,000+ members and grew downloads from 2K to 50K monthly.",
    results: {
      growth: "+2,400%",
      downloads: "50K/mo",
      engagement: "20K+ fans",
    },
    color: "bg-red-500/10",
    accentColor: "text-red-600",
  },
  {
    title: "Comedy Central Hour",
    category: "Comedy",
    description: "Viral social media strategy generated 500K+ views and tripled download numbers in 3 months.",
    results: {
      growth: "+200%",
      downloads: "30K/mo",
      engagement: "500K views",
    },
    color: "bg-purple-500/10",
    accentColor: "text-purple-600",
  },
  {
    title: "Science Simplified",
    category: "Education",
    description: "Cross-promotion strategy resulted in 10K new subscribers and partnership with major science network.",
    results: {
      growth: "+350%",
      downloads: "35K/mo",
      engagement: "Network Deal",
    },
    color: "bg-cyan-500/10",
    accentColor: "text-cyan-600",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Success Stories & Case Studies
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real podcasters. See how I&apos;ve helped shows grow their audiences.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Header Visual */}

{study?.imgs?.length?<CommonSlider images={study?.imgs}/>:null}

              
              {/* <img src={study.img} alt="" className="h-96 ob w-full"/> */}
              <div className={`${study.color} p-6 relative`}>
                <Badge variant="secondary" className="mb-3">
                  {study.category}
                </Badge>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center shadow-md">
                    <Play className={`w-6 h-6 ${study.accentColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{study.title}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  <div className="text-center">
                    <TrendingUp className={`w-4 h-4 mx-auto mb-1 ${study.accentColor}`} />
                    <p className="text-sm font-semibold text-foreground">{study.results.growth}</p>
                    <p className="text-xs text-muted-foreground">Growth</p>
                  </div>
                  <div className="text-center">
                    <Play className={`w-4 h-4 mx-auto mb-1 ${study.accentColor}`} />
                    <p className="text-sm font-semibold text-foreground">{study.results.downloads}</p>
                    <p className="text-xs text-muted-foreground">Downloads</p>
                  </div>
                  <div className="text-center">
                    <Users className={`w-4 h-4 mx-auto mb-1 ${study.accentColor}`} />
                    <p className="text-sm font-semibold text-foreground">{study.results.engagement}</p>
                    <p className="text-xs text-muted-foreground">Impact</p>
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
