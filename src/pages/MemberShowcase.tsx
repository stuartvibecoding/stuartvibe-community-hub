import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const MemberShowcase = () => {
  const { memberName } = useParams();
  
  // Mock data for members - in a real app this would come from an API or database
  const memberData: Record<string, any> = {
    amy: {
      name: "Amy Chen",
      title: "Full-Stack Developer",
      bio: "Passionate about React and Node.js. Love building beautiful user interfaces and scalable backend systems.",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
      projects: [
        { name: "E-commerce Platform", description: "Modern shopping experience with React and Stripe", link: "#" },
        { name: "Task Management App", description: "Collaborative tool built with Next.js", link: "#" }
      ],
      contact: {
        github: "amychen",
        linkedin: "amy-chen-dev",
        email: "amy@example.com"
      }
    },
    jim: {
      name: "Jim Rodriguez",
      title: "DevOps Engineer",
      bio: "Infrastructure enthusiast who loves automating everything. Specialized in cloud architecture and CI/CD pipelines.",
      skills: ["Docker", "Kubernetes", "AWS", "Python", "Terraform"],
      projects: [
        { name: "Auto-Scaling Infrastructure", description: "Kubernetes-based solution for microservices", link: "#" },
        { name: "CI/CD Pipeline", description: "Automated deployment system with monitoring", link: "#" }
      ],
      contact: {
        github: "jimrodriguez",
        linkedin: "jim-rodriguez-devops",
        email: "jim@example.com"
      }
    },
    diana: {
      name: "Diana Thompson",
      title: "UI/UX Designer & Frontend Developer",
      bio: "Creating delightful user experiences through thoughtful design and clean code. Advocate for accessibility and inclusive design.",
      skills: ["Figma", "React", "CSS/SASS", "JavaScript", "Design Systems"],
      projects: [
        { name: "Design System Library", description: "Comprehensive component library for consistency", link: "#" },
        { name: "Accessibility Toolkit", description: "Tools and guidelines for accessible web development", link: "#" }
      ],
      contact: {
        github: "dianathompson",
        linkedin: "diana-thompson-ux",
        email: "diana@example.com"
      }
    },
    wadner: {
      name: "Wadner Joseph",
      title: "Backend Developer",
      bio: "Database wizard and API architect. Passionate about building robust, scalable systems that can handle millions of users.",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Microservices"],
      projects: [
        { name: "Real-time Chat API", description: "High-performance messaging system with WebSockets", link: "#" },
        { name: "Analytics Dashboard", description: "Data visualization platform with real-time updates", link: "#" }
      ],
      contact: {
        github: "wadnerjoseph",
        linkedin: "wadner-joseph",
        email: "wadner@example.com"
      }
    },
    trevor: {
      name: "Trevor Kim",
      title: "Mobile App Developer",
      bio: "Cross-platform mobile development specialist. Love creating smooth, native-feeling experiences with React Native and Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      projects: [
        { name: "Fitness Tracking App", description: "Cross-platform health and wellness application", link: "#" },
        { name: "Local Business Directory", description: "Community-focused mobile app with maps integration", link: "#" }
      ],
      contact: {
        github: "trevorkim",
        linkedin: "trevor-kim-mobile",
        email: "trevor@example.com"
      }
    },
    greg: {
      name: "Greg Wilson",
      title: "Data Scientist & ML Engineer",
      bio: "Turning data into insights and building intelligent systems. Passionate about machine learning and its real-world applications.",
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Jupyter"],
      projects: [
        { name: "Predictive Analytics Platform", description: "ML-powered forecasting system for businesses", link: "#" },
        { name: "Natural Language Processor", description: "Custom NLP model for sentiment analysis", link: "#" }
      ],
      contact: {
        github: "gregwilson",
        linkedin: "greg-wilson-data",
        email: "greg@example.com"
      }
    }
  };

  const member = memberData[memberName?.toLowerCase() || ""];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <p className="text-muted-foreground">The member you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center text-accent-foreground text-4xl font-bold">
            {member.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">{member.name}</h1>
          <p className="text-xl text-primary font-medium mb-4">{member.title}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{member.bio}</p>
        </div>

        {/* Skills */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill: string, index: number) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Featured Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {member.projects.map((project: any, index: number) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberShowcase;