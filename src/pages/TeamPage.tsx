import { Card } from '@/components/ui/card';
import Section from '@/components/landing/Section';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Balakrishnan R',
    title: 'Co-Founder',
    description: 'Leading STEMTEC with expertise in AI and robotics, driving innovation and technological advancement.',
    avatar: '/lovable-uploads/bala.jpg',
  },
  {
    name: 'Dr. Abraham Sudharson Ponraj',
    title: 'Co-Founder',
    description: 'Bringing extensive experience in robotics and AI to shape the future of automation technology.',
    avatar: '/lovable-uploads/abraham.jpg',
  }
];

const TeamPage = () => {
  return (
    <div className="pt-24 bg-background">
      <Section>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Our Founders
          </h1>
          <p className="text-center text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            The brilliant minds behind STEMTEC, leading innovation in AI and Robotics.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="flex flex-col items-center p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 h-[420px] min-w-[380px]">
                  <div className="w-36 h-36 rounded-lg overflow-hidden mb-6 ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground whitespace-nowrap">{member.name}</h3>
                  <p className="text-primary font-medium mt-2">{member.title}</p>
                  <p className="mt-4 text-base text-muted-foreground text-center max-w-sm leading-relaxed">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TeamPage;
