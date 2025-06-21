import React from 'react';
import Section from '@/components/landing/Section';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    title: "The Future is Now: An Introduction to ROS 2",
    description: "Explore the next generation of the Robot Operating System (ROS) and how it's shaping the future of robotics with enhanced real-time control and security features.",
    image: "/lovable-uploads/blog1.png",
    slug: "ros-2-introduction",
    date: "June 12, 2025",
    content: `
      <h2>The Evolution of ROS</h2>
      <p>The Robot Operating System (ROS) has been the backbone of robotics development for over a decade. With ROS 2, we're entering a new era of possibilities in robotics development and deployment.</p>

      <h3>Key Features of ROS 2</h3>
      <ul>
        <li>Real-time control systems for critical applications</li>
        <li>Enhanced security features with DDS middleware</li>
        <li>Improved multi-robot coordination</li>
        <li>Better support for industrial applications</li>
      </ul>

      <h3>Why ROS 2 Matters</h3>
      <p>In the rapidly evolving field of robotics, ROS 2 addresses many of the limitations of its predecessor. Its modern architecture enables developers to build more robust and secure robotic systems.</p>

      <h3>Getting Started with ROS 2</h3>
      <p>Whether you're migrating from ROS 1 or starting fresh with ROS 2, the transition is well worth the effort. The improved tools and workflows significantly enhance development efficiency.</p>

      <h3>Future Prospects</h3>
      <p>As we look to the future, ROS 2 is positioned to become the standard framework for robotics development, especially in industrial and commercial applications where reliability and security are paramount.</p>
    `
  },
  {
    title: "Navigating the Unknown: A Deep Dive into SLAM",
    description: "Simultaneous Localization and Mapping (SLAM) is a cornerstone of autonomous navigation. Discover the algorithms that allow robots to build maps and track their position in real-time.",
    image: "/lovable-uploads/blog2.jpg",
    slug: "slam-deep-dive",
    date: "June 10, 2025",
    content: `
      <h2>Understanding SLAM Technology</h2>
      <p>Simultaneous Localization and Mapping (SLAM) is the technological breakthrough that enables robots to navigate unknown environments autonomously. This comprehensive guide explores the fundamentals and advanced concepts of SLAM.</p>

      <h3>Core Components of SLAM</h3>
      <ul>
        <li>Sensor fusion and data processing</li>
        <li>Real-time mapping algorithms</li>
        <li>Position estimation and tracking</li>
        <li>Loop closure detection</li>
      </ul>

      <h3>Types of SLAM Systems</h3>
      <p>From visual SLAM to LiDAR-based solutions, different approaches offer unique advantages for specific applications. We'll explore the pros and cons of each method.</p>

      <h3>Implementation Challenges</h3>
      <p>While SLAM has come a long way, implementing robust solutions still presents several challenges, including computational efficiency and environmental adaptability.</p>

      <h3>Future Developments</h3>
      <p>The future of SLAM technology looks promising with advances in AI and sensor technology, leading to more accurate and efficient mapping solutions.</p>
    `
  },
  {
    title: "The Road to Full Autonomy: State of Autonomous Vehicles",
    description: "From ADAS to Level 5, the journey to fully autonomous vehicles is paved with innovation. We look at the current landscape, key players, and the challenges that lie ahead.",
    image: "/lovable-uploads/blog3.jpg",
    slug: "autonomous-vehicles-state",
    date: "June 8, 2025",
    content: `
      <h2>The Evolution of Autonomous Vehicles</h2>
      <p>The journey toward fully autonomous vehicles represents one of the most significant technological challenges of our time. This comprehensive overview examines where we are and where we're headed.</p>

      <h3>Levels of Autonomy</h3>
      <ul>
        <li>Level 1: Driver Assistance</li>
        <li>Level 2: Partial Automation</li>
        <li>Level 3: Conditional Automation</li>
        <li>Level 4: High Automation</li>
        <li>Level 5: Full Automation</li>
      </ul>

      <h3>Current State of Technology</h3>
      <p>While we've made significant progress in autonomous vehicle technology, several challenges remain before achieving full Level 5 autonomy.</p>

      <h3>Key Players and Innovations</h3>
      <p>From traditional automakers to tech giants, numerous companies are pushing the boundaries of what's possible in autonomous driving.</p>

      <h3>Future Outlook</h3>
      <p>The path to full autonomy involves overcoming technical, regulatory, and social challenges, but the potential benefits make it a worthy pursuit.</p>
    `
  },
  {
    title: "AI & ML: The Brains Behind Autonomous Systems",
    description: "Artificial Intelligence and Machine Learning are the driving forces of modern autonomy. Learn how these technologies empower robots and vehicles to perceive, learn, and make decisions.",
    image: "/lovable-uploads/blog4.png",
    slug: "ai-ml-for-autonomy",
    date: "June 5, 2025",
    content: `
      <h2>AI and ML in Autonomous Systems</h2>
      <p>Artificial Intelligence and Machine Learning form the cognitive backbone of modern autonomous systems. This article explores how these technologies enable intelligent decision-making in robotics.</p>

      <h3>Key AI Technologies</h3>
      <ul>
        <li>Deep Learning Networks</li>
        <li>Reinforcement Learning</li>
        <li>Computer Vision</li>
        <li>Natural Language Processing</li>
      </ul>

      <h3>Real-world Applications</h3>
      <p>From autonomous navigation to human-robot interaction, AI and ML are revolutionizing how robots interact with their environment.</p>

      <h3>Implementation Challenges</h3>
      <p>Building robust AI systems for autonomous applications presents unique challenges in reliability, safety, and performance.</p>

      <h3>Future Developments</h3>
      <p>As AI technology continues to advance, we can expect even more sophisticated autonomous systems capable of handling complex tasks.</p>
    `
  },
  {
    title: "Giving Robots Sight: Computer Vision in ROS",
    description: "Computer vision is critical for robotic perception. This post covers how to integrate and utilize powerful vision libraries and techniques within the ROS ecosystem to build smarter robots.",
    image: "/lovable-uploads/blog5.png",
    slug: "computer-vision-ros",
    date: "June 2, 2025",
    content: `
      <h2>Computer Vision in Robotics</h2>
      <p>Computer vision enables robots to understand and interact with their environment through visual data. This comprehensive guide explores implementation techniques in ROS.</p>

      <h3>Essential Vision Components</h3>
      <ul>
        <li>Image Processing</li>
        <li>Object Detection</li>
        <li>Feature Extraction</li>
        <li>3D Reconstruction</li>
      </ul>

      <h3>Integration with ROS</h3>
      <p>ROS provides powerful tools and libraries for implementing computer vision solutions in robotic systems.</p>

      <h3>Common Applications</h3>
      <p>From object manipulation to visual servoing, computer vision enables various robotic applications.</p>

      <h3>Best Practices</h3>
      <p>Learn about the best practices for implementing robust computer vision solutions in your robotics projects.</p>
    `
  }
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
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-base text-muted-foreground flex-grow">{post.description}</p>
                  <div className="mt-4">
                    <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-primary hover:underline">
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
