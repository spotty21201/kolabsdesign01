"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const scrollPrompts = [
  "What if FAR and KDB weren't limits, but launchpads?",
  "What if public transport behaved like a living nervous system?",
  "What if AI could read your site like a seasoned planner?",
  "What if coastal reforestation came with predictive ROI?",
  "What if your next development was regulation-proof before your first meeting?",
];

const featuredProjects = [
  {
    title: "Bandung Urban Mobility",
    description: "AI-powered transport optimization for West Java's largest city",
    tags: ["Mobility", "Urban Planning", "AI"],
    image: "/api/placeholder/400/300"
  },
  {
    title: "Jakarta Superblock Optimization",
    description: "Maximizing land value through data-driven design",
    tags: ["Real Estate", "Optimization", "Data Science"],
    image: "/api/placeholder/400/300"
  },
  {
    title: "Mangrove Futures",
    description: "Predictive climate impact modeling for coastal resilience",
    tags: ["Ecology", "Climate", "Prediction"],
    image: "/api/placeholder/400/300"
  },
  {
    title: "Industrial Estate Valuation",
    description: "AI-powered site potential assessment and valuation",
    tags: ["Industry", "Valuation", "Machine Learning"],
    image: "/api/placeholder/400/300"
  },
];

export default function Home() {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % scrollPrompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-8">
              {/* Group 1 */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  In 2025 Indonesia, consulting feels like a luxury.
                  <br />
                  <span className="text-primary">We get it.</span>
                </h1>
              </div>
              
              {/* Group 2 */}
              <div className="space-y-4 text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto">
                <p>But when budgets tighten, you can't afford the wrong decisions.</p>
                <p className="font-semibold text-foreground">We're not consultants. We're solution-makers.</p>
              </div>

              {/* Group 3 */}
              <div className="space-y-3 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                <p>From maximizing land value in a Jakarta superblock,</p>
                <p>to predicting site potential for industrial estates,</p>
                <p>from mangrove-driven climate impact proposals,</p>
                <p>to helping the largest city in West Java fix its transport crisis —</p>
                <p className="font-semibold text-foreground">
                  our work delivers results, not just reports.
                </p>
                <p className="font-semibold text-primary pt-2">Want proof? Scroll down.</p>
              </div>

              <ScrollReveal direction="up" delay={0.8}>
                <div className="pt-8">
                  <Button 
                    onClick={scrollToContent}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                  >
                    View Our Work
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Animated Scroll Prompt */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.p
            key={currentPrompt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-sm md:text-base text-muted-foreground font-medium"
          >
            {scrollPrompts[currentPrompt]}
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse into our work solving Indonesia's most pressing challenges through AI and design
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal 
                key={project.title} 
                direction="up" 
                delay={0.2 + index * 0.1}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 cursor-pointer group border-border/50 hover:border-primary/50 transform hover:-translate-y-1">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-500 group-hover:from-primary/20 group-hover:to-accent/20">
                      <motion.div 
                        className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title.split(' ')[0].charAt(0)}
                      </motion.div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="text-center mt-12">
              <Link href="/works">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}