
import { Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/landing/Section';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Founder & CEO',
    description: 'A visionary in AI ethics and quantum computing, leading STEMTEC towards a new era of innovation.',
    avatar: '/placeholder.svg',
    avatarFallback: 'ER',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Marcus Chen',
    title: 'Chief Technology Officer',
    description: 'The architect of our core technologies, with two decades of experience in robotics and machine learning.',
    avatar: '/placeholder.svg',
    avatarFallback: 'MC',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Aria Sharma',
    title: 'Head of Robotics',
    description: 'Specializing in autonomous systems, Aria pushes the boundaries of what our robots can achieve.',
    avatar: '/placeholder.svg',
    avatarFallback: 'AS',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Leo Petrov',
    title: 'Lead AI Scientist',
    description: 'Leo’s research in neural networks is the powerhouse behind our intelligent systems.',
    avatar: '/placeholder.svg',
    avatarFallback: 'LP',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Sofia Gonzalez',
    title: 'Chief Design Officer',
    description: 'Sofia ensures our futuristic technology is accessible and intuitive, blending form with function.',
    avatar: '/placeholder.svg',
    avatarFallback: 'SG',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Ben Carter',
    title: 'VP of Engineering',
    description: 'Ben leads our engineering teams, ensuring robust and scalable execution of our ambitious projects.',
    avatar: '/placeholder.svg',
    avatarFallback: 'BC',
    linkedin: 'https://www.linkedin.com/',
  },
];

const TeamPage = () => {
  return (
    <Section id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Meet Our Innovators</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The brilliant minds engineering the future of AI and Robotics. We are a collective of scientists, engineers, and visionaries committed to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-transparent group-hover:border-primary transition-colors">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
                <p className="mt-3 text-muted-foreground text-sm flex-grow">{member.description}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`LinkedIn profile for ${member.name}`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TeamPage;
