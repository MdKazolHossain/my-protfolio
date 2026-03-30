"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    podcast: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", podcast: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kajolkk5@gmail.com",
      href: "mailto:kajolkk5@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+880 1993552414",
      href: "https://wa.me/8801993552414",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kushtia, Khulna, Bangladesh",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 Hours",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Ready to Grow Your Podcast?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s discuss how I can help take your podcast to the next level. 
            Get a free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="podcast" className="block text-sm font-medium text-foreground mb-2">
                    Podcast Name (optional)
                  </label>
                  <Input
                    id="podcast"
                    placeholder="My Awesome Podcast"
                    value={formData.podcast}
                    onChange={(e) => setFormData({ ...formData, podcast: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your podcast and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you&apos;re launching a new podcast or looking to grow an existing one, 
              I&apos;m here to help. Reach out through any of the channels below or fill out 
              the contact form.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
