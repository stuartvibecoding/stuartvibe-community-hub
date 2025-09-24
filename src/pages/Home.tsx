import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Rocket } from "lucide-react";

const Home = () => {
  const goals = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Learn Together",
      description: "Share knowledge, learn new technologies, and grow as developers in a supportive community."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Build Community",
      description: "Connect with fellow developers, form lasting friendships, and create a network of support."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovate",
      description: "Collaborate on projects, share creative ideas, and push the boundaries of what's possible."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch Projects",
      description: "Turn ideas into reality with the help of our community, from concept to deployment."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero animate-wave" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <img 
              src="/lovable-uploads/f356664d-8968-4181-a3b4-44c6faa73f15.png" 
              alt="Stuart Vibe Coding Community"
              className="mx-auto mb-8 max-w-full h-auto rounded-2xl shadow-hero"
            />
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Welcome to the most vibrant coding community in Stuart! Join us for meetups, 
              collaborative projects, and endless learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-primary" asChild>
                <a href="https://www.meetup.com/stuart-vibe-coding-community/" target="_blank" rel="noopener noreferrer">
                  Join Our Next Meetup
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Community Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Stuart Vibe Coding Community is built on the foundation of collaboration, 
              learning, and creating amazing things together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What Makes Us Different?
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                At Stuart Vibe, we believe coding should be fun, collaborative, and accessible to everyone. 
                Whether you're a seasoned developer or just starting your journey, our community welcomes 
                you with open arms.
              </p>
              <p className="mb-6">
                We meet regularly to work on projects, share knowledge, and build lasting connections. 
                Our members come from diverse backgrounds and bring unique perspectives that enrich 
                our collective learning experience.
              </p>
              <p>
                Join us and become part of a community that's passionate about code, creativity, 
                and making a positive impact through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-accent rounded-3xl p-12 text-accent-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join the Vibe?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with fellow developers and start building amazing projects today.
            </p>
            <Button size="lg" variant="secondary" className="shadow-card" asChild>
              <a href="https://www.meetup.com/stuart-vibe-coding-community/" target="_blank" rel="noopener noreferrer">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;