import React from 'react';
import { Github, Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Lead Instructor & Co-Founder',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former senior engineer at Google with 8 years of experience in full-stack development.',
      skills: ['React', 'Node.js', 'System Design'],
      socials: { github: '#', linkedin: '#', email: 'sarah@hotbean.dev' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Frontend Instructor',
      image: 'https://images.pexels.com/photos/3778896/pexels-photo-3778896.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'UI/UX specialist with extensive experience at startups and Fortune 500 companies.',
      skills: ['JavaScript', 'React', 'UI/UX Design'],
      socials: { github: '#', linkedin: '#', email: 'marcus@hotbean.dev' }
    },
    {
      name: 'Emily Park',
      role: 'Backend & DevOps Instructor',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Cloud architecture expert with certifications from AWS, Azure, and Google Cloud.',
      skills: ['Python', 'AWS', 'Docker'],
      socials: { github: '#', linkedin: '#', email: 'emily@hotbean.dev' }
    },
    {
      name: 'David Kim',
      role: 'Full-Stack Instructor',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack developer with expertise in modern JavaScript frameworks and databases.',
      skills: ['TypeScript', 'Next.js', 'PostgreSQL'],
      socials: { github: '#', linkedin: '#', email: 'david@hotbean.dev' }
    },
    {
      name: 'Jessica Wong',
      role: 'Career Development Manager',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former tech recruiter with deep connections in the industry and passion for student success.',
      skills: ['Career Coaching', 'Interview Prep', 'Industry Relations'],
      socials: { github: '#', linkedin: '#', email: 'jessica@hotbean.dev' }
    },
    {
      name: 'Alex Thompson',
      role: 'Student Success Coordinator',
      image: 'https://images.pexels.com/photos/3778252/pexels-photo-3778252.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Dedicated to ensuring every student reaches their full potential through personalized support.',
      skills: ['Mentoring', 'Project Management', 'Student Support'],
      socials: { github: '#', linkedin: '#', email: 'alex@hotbean.dev' }
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry veterans who have worked at top tech companies and are passionate about sharing their knowledge
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl">
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Tech Companies Represented</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Students Mentored</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.socials.email}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.socials.github}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn from the Best?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our instructors are not just teachers – they're mentors who will guide you through every step of your journey
          </p>
          <a
            href="/apply"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block transform hover:scale-105"
          >
            Start Learning Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;