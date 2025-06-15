
import React from 'react';
import Section from '@/components/landing/Section';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "The Future is Now: An Introduction to ROS 2",
    description: "Explore the next generation of the Robot Operating System (ROS) and how it's shaping the future of robotics with enhanced real-time control and security features.",
    image: "/lovable-uploads/photo-1518770660439-4636190af475.png",
    slug: "/blog/ros-2-introduction",
    date: "June 12, 2025",
  },
  {
    title: "Navigating the Unknown: A Deep Dive into SLAM",
    description: "Simultaneous Localization and Mapping (SLAM) is a cornerstone of autonomous navigation. Discover the algorithms that allow robots to build maps and track their position in real-time.",
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.png",
    slug: "/blog/slam-deep-dive",
    date: "June 10, 2025",
  },
  {
    title: "The Road to Full Autonomy: State of Autonomous Vehicles",
    description: "From ADAS to Level 5, the journey to fully autonomous vehicles is paved with innovation. We look at the current landscape, key players, and the challenges that lie ahead.",
    image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d.png",
    slug: "/blog/autonomous-vehicles-state",
    date: "June 8, 2025",
  },
  {
    title: "AI & ML: The Brains Behind Autonomous Systems",
    description: "Artificial Intelligence and Machine Learning are the driving forces of modern autonomy. Learn how these technologies empower robots and vehicles to perceive, learn, and make decisions.",
    image: "/lovable-uploads/photo-1461749280684-dccba630e2f6.png",
    slug: "/blog/ai-ml-for-autonomy",
    date: "June 5, 2025",
  },
  {
    title: "Giving Robots Sight: Computer Vision in ROS",
    description: "Computer vision is critical for robotic perception. This post covers how to integrate and utilize powerful vision libraries and techniques within the ROS ecosystem to build smarter robots.",
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.png",
    slug: "/blog/computer-vision-ros",
    date: "June 2, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="pt-24 bg-background">
      <Section>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Insights from STEMTEC
          </h1>
          <p className="text-center text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Explore the latest in AI, Robotics, and autonomous systems. News, tutorials, and deep dives from our team of experts.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
                <div className="flex-shrink-0 overflow-hidden">
                  <img className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" src={post.image} alt={`Blog post about ${post.title}`} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    <Link to={post.slug}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-base text-muted-foreground flex-grow">{post.description}</p>
                  <div className="mt-4">
                    <Link to={post.slug} className="text-sm font-semibold text-primary hover:underline">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;
