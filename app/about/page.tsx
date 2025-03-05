import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
          <p className="text-muted-foreground md:text-xl">
            We're a team of passionate individuals dedicated to creating exceptional digital experiences.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-bold">Our Team</h3>
                <p className="text-sm text-muted-foreground">Expert professionals with years of industry experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-bold">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering businesses through innovative digital solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Image
          alt="About Us"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          height={400}
          src="/placeholder.svg"
          width={600}
        />
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Our Vision",
            description: "To be the leading digital transformation partner for businesses worldwide.",
            icon: Target,
          },
          {
            title: "Our Values",
            description: "Innovation, integrity, and excellence in everything we do.",
            icon: Users,
          },
          {
            title: "Our Impact",
            description: "Helping businesses achieve their digital potential and grow.",
            icon: Rocket,
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <item.icon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

