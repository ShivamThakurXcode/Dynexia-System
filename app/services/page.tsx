import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Globe, Phone, Shield, Cloud } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that engage and convert",
      features: ["User Research", "Wireframing", "Interactive Prototypes"],
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence",
      features: ["SEO Optimization", "Content Strategy", "Social Media"],
    },
    {
      icon: Phone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and hosting solutions",
      features: ["AWS", "Azure", "Google Cloud"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with our security solutions",
      features: ["Security Audits", "Penetration Testing", "Security Training"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">Comprehensive digital solutions tailored to your needs</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <service.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button className="mt-4 w-full" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

