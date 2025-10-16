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
      name: "Amy Stapleton",
      title: "Creative Writer",
      bio: "Collaborating with AI to craft engaging story experiences and new ways to enjoy poetry.",
      skills: ["writing", "contemplating", "prompting", "editing", "pondering"],
      projects: [
        { name: "Scriptorium", description: "Classic poems stored in beautiful boxes", link: "https://archivusscriptorium.netlify.app/" },
        { name: "Task Management App", description: "Collaborative tool built with Next.js", link: "#" }
      ],
      personalNotes: [
        { content: "Working on improving my TypeScript skills - discovered some great patterns for generic types today.", date: "2024-01-15" },
        { content: "Attended React conference virtually. Key takeaway: Server components are game-changing for performance.", date: "2024-01-10" }
      ],
      sharedInsights: [
        { title: "React Performance Tips", content: "Use React.memo() for components that render frequently with the same props. Also, consider useMemo() for expensive calculations.", date: "2024-01-12" },
        { title: "Clean Code Practices", content: "Always write self-documenting code. If you need comments to explain what your code does, consider refactoring it first.", date: "2024-01-08" }
      ],
      contact: {
        github: "talks2bots",
        linkedin: "unlisted",
        email: "amy@ibisadvisory.com"
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
      personalNotes: [
        { content: "Finally got the new monitoring stack working with Prometheus and Grafana. The alerting is so much better now.", date: "2024-01-14" },
        { content: "Learned about GitOps today - implementing ArgoCD for our deployment workflow next week.", date: "2024-01-09" }
      ],
      sharedInsights: [
        { title: "Docker Best Practices", content: "Always use multi-stage builds and .dockerignore files. Keep your images small and security-focused.", date: "2024-01-11" },
        { title: "Infrastructure as Code", content: "Terraform modules are your friend. Create reusable, versioned infrastructure components for consistency.", date: "2024-01-06" }
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
      personalNotes: [
        { content: "Discovered some amazing accessibility patterns in the new WCAG 3.0 draft. Need to incorporate these into our design system.", date: "2024-01-13" },
        { content: "Figma's new dev mode is incredible - the handoff process is so much smoother now.", date: "2024-01-07" }
      ],
      sharedInsights: [
        { title: "Inclusive Design Principles", content: "Design for edge cases first. When you design for disabilities, you create better experiences for everyone.", date: "2024-01-10" },
        { title: "Design System Success", content: "Documentation is everything. Your design system is only as good as the docs that explain how to use it.", date: "2024-01-05" }
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
      personalNotes: [
        { content: "Implemented database sharding for our main application. Performance improvement is significant - 80% faster queries!", date: "2024-01-16" },
        { content: "Deep diving into event-driven architecture. CQRS pattern is complex but powerful for our use case.", date: "2024-01-11" }
      ],
      sharedInsights: [
        { title: "Database Optimization", content: "Index your foreign keys! Also, use EXPLAIN ANALYZE to understand your query execution plans before optimizing.", date: "2024-01-13" },
        { title: "API Design Philosophy", content: "RESTful APIs should be intuitive. If you need documentation to understand the endpoint, redesign it.", date: "2024-01-08" }
      ],
      contact: {
        github: "wadnerjoseph",
        linkedin: "wadner-joseph",
        email: "wadner@example.com"
      }
    },
    trevor: {
      name: "Trevor Kim",
      title: "Car Fixer",
      bio: "I basically fix cars for a living.",
      skills: ["Losing sockets", "Cursing", "Injuring myself", "Occasionally fixing broken cars"],
      projects: [
        { name: "AI Engineering", description: "Learning what makes AI agents tick", link: "#" }
        },
      contact: {
        github: "TQCollege",
        linkedin: "trevor-q",
        email: "trevorquinlan@duck.com"
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
      personalNotes: [
        { content: "Finally got our ML pipeline working in production. Data drift monitoring is essential - learned that the hard way!", date: "2024-01-14" },
        { content: "Experimenting with GPT-4 for data analysis. The insights it provides are surprisingly accurate.", date: "2024-01-08" }
      ],
      sharedInsights: [
        { title: "ML Model Deployment", content: "Always version your models and data. MLflow has been a game-changer for our model management workflow.", date: "2024-01-11" },
        { title: "Data Quality Matters", content: "Garbage in, garbage out. Spend 80% of your time on data cleaning and validation. Your models will thank you.", date: "2024-01-06" }
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

        {/* Personal Notes */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Personal Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {member.personalNotes?.map((note: any, index: number) => (
                <div key={index} className="border-l-4 border-accent pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{new Date(note.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <p className="text-foreground">{note.content}</p>
                </div>
              )) || <p className="text-muted-foreground italic">No personal notes yet.</p>}
            </div>
          </CardContent>
        </Card>

        {/* Shared Insights */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Shared Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {member.sharedInsights?.map((insight: any, index: number) => (
                <div key={index} className="border-l-4 border-secondary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                    <span className="text-sm text-muted-foreground">{new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <p className="text-muted-foreground">{insight.content}</p>
                </div>
              )) || <p className="text-muted-foreground italic">No shared insights yet.</p>}
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