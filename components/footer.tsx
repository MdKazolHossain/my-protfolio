import Link from "next/link"
import { Headphones, Mail, Linkedin, Facebook } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Podcast Growth", href: "#services" },
    { label: "Social Media", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Launch Strategy", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">PodGrowth</span>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Professional podcast marketing and growth services to help you 
              reach new audiences and build engaged communities.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/XS.imonkhan" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://www.upwork.com/services/product/marketing-an-organic-growth-podcast-promotion-service-1810966061680305010" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Upwork"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
              <a 
                href="mailto:kajolkk5@gmail.com" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="mailto:kajolkk5@gmail.com" className="hover:text-primary transition-colors">
                  kajolkk5@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801993552414" className="hover:text-primary transition-colors">
                  +880 1993552414
                </a>
              </li>
              <li>Kushtia, Khulna, Bangladesh</li>
            </ul>
          </div>
        </div>
      
        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} PodGrowth. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
