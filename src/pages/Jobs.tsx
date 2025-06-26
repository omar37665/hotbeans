import React from 'react';
import { MapPin, Clock, DollarSign, Users, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      level: 'Entry Level',
      description: 'Join our dynamic team building next-generation web applications with React and TypeScript.',
      requirements: [
        'Proficiency in HTML, CSS, and JavaScript',
        'Experience with React and modern JS frameworks',
        'Understanding of responsive design principles',
        'Familiarity with Git version control'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Learning Budget'],
      featured: true
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupLab',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $100,000',
      level: 'Mid Level',
      description: 'Build scalable web applications using modern technologies in a fast-paced startup environment.',
      requirements: [
        'Strong JavaScript/TypeScript skills',
        'Experience with Node.js and Express',
        'Database knowledge (PostgreSQL/MongoDB)',
        'Cloud deployment experience (AWS/Heroku)'
      ],
      benefits: ['Flexible Hours', 'Health Insurance', 'Equity', 'Professional Development']
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Innovations',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      level: 'Entry Level',
      description: 'Perfect opportunity for new graduates to grow in a supportive environment.',
      requirements: [
        'Basic HTML, CSS, JavaScript knowledge',
        'Enthusiasm for learning new technologies',
        'Good problem-solving skills',
        'Portfolio of personal projects'
      ],
      benefits: ['Mentorship Program', 'Health Insurance', 'Training Budget', 'Career Growth']
    },
    {
      title: 'React Developer',
      company: 'WebSolutions Pro',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$60 - $80/hour',
      level: 'Mid Level',
      description: 'Work on exciting client projects using the latest React ecosystem technologies.',
      requirements: [
        'Advanced React and Redux knowledge',
        'Experience with React hooks and context',
        'Testing with Jest and React Testing Library',
        'Performance optimization experience'
      ],
      benefits: ['High Hourly Rate', 'Flexible Schedule', 'Diverse Projects', 'Skill Development']
    },
    {
      title: 'Backend Developer',
      company: 'DataDriven Corp',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$75,000 - $105,000',
      level: 'Entry to Mid Level',
      description: 'Build robust APIs and microservices handling millions of requests daily.',
      requirements: [
        'Strong Python or Node.js skills',
        'Database design and optimization',
        'RESTful API development',
        'Understanding of microservices architecture'
      ],
      benefits: ['Stock Options', 'Health Benefits', 'Learning Stipend', 'Conference Travel']
    },
    {
      title: 'UI/UX Developer',
      company: 'DesignFirst Studio',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$65,000 - $90,000',
      level: 'Entry Level',
      description: 'Bridge the gap between design and development in creating beautiful user experiences.',
      requirements: [
        'Strong CSS and JavaScript skills',
        'Experience with design tools (Figma, Sketch)',
        'Understanding of user experience principles',
        'Animation and interaction design knowledge'
      ],
      benefits: ['Creative Environment', 'Design Tools Budget', 'Health Insurance', 'Flexible PTO']
    }
  ];

  const levels = ['All Levels', 'Entry Level', 'Mid Level', 'Senior Level'];
  const types = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Remote'];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Job Opportunities &
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities with our partner companies. All positions welcome Hot Bean graduates!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Active Positions</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$75k</div>
            <div className="text-gray-600">Average Salary</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">30+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                job.featured ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {job.featured && (
                <div className="absolute -top-3 left-8">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="text-lg text-blue-600 font-medium mb-4">
                        {job.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{job.level}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Link
                    to="/apply"
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block transform hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Complete our program and get direct access to these opportunities. Our career services team will help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View Courses
            </Link>
            <Link
              to="/apply"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Apply Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;