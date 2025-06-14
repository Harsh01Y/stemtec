
import Section from '@/components/landing/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, MapPin } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the development of our next-generation AI-powered robotics platform. Strong experience in machine learning, deep learning, and Python required.'
  },
  {
    title: 'Robotics Software Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement software for our autonomous robots. Proficiency in C++, ROS, and algorithm development is essential.'
  },
  {
    title: 'Product Manager, AI Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Define and drive the product roadmap for our AI software suite. Collaborate with engineering, sales, and marketing to deliver innovative solutions.'
  }
];

const CareerPage = () => {
  return (
    <div className="pt-20">
      <Section id="career">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We are building the future of AI and Robotics, and we're looking for talented individuals to join us on our mission.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                    <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                  <Button className="mt-4">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">Don't see a role that fits? We are always looking for passionate people.</p>
            <Button variant="outline" className="mt-4">Get in touch</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CareerPage;
