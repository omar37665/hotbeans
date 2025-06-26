import React from 'react';
import { Clock, Users, Award, CheckCircle, Star, BookOpen, Code, Palette, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: 'Full-Stack Web Development Bootcamp',
      icon: Globe,
      duration: '16 weeks',
      students: '1,200+',
      rating: 4.9,
      level: 'Beginner to Advanced',
      price: '$12,000',
      description: 'Complete program covering frontend, backend, databases, and deployment. Perfect for career changers.',
      features: [
        'HTML, CSS, JavaScript fundamentals',
        'React.js and modern frontend frameworks',
        'Node.js and Express backend development',
        'Database design with PostgreSQL',
        'API development and integration',
        'Cloud deployment (AWS, Heroku)',
        'Git version control and collaboration',
        'Job interview preparation'
      ],
      outcomes: [
        'Build 5+ portfolio projects',
        'Deploy applications to production',
        'Collaborate using Git and GitHub',
        'Interview with confidence'
      ],
      popular: true
    },
    {
      title: 'Frontend React Specialization',
      icon: Code,
      duration: '12 weeks',
      students: '800+',
      rating: 4.8,
      level: 'Beginner to Intermediate',
      price: '$8,000',
      description: 'Master modern frontend development with React, focusing on user interfaces and user experience.',
      features: [
        'Advanced JavaScript and ES6+',
        'React fundamentals and hooks',
        'State management with Redux',
        'Component testing with Jest',
        'CSS-in-JS and Styled Components',
        'Performance optimization',
        'Mobile-responsive design',
        'Progressive Web Apps (PWA)'
      ],
      outcomes: [
        'Create interactive web applications',
        'Master React ecosystem',
        'Build responsive designs',
        'Deploy optimized applications'
      ]
    },
    {
      title: 'Backend Node.js Track',
      icon: Server,
      duration: '10 weeks',
      students: '600+',
      rating: 4.7,
      level: 'Intermediate',
      price: '$7,000',
      description: 'Deep dive into server-side development, APIs, databases, and cloud architecture.',
      features: [
        'Node.js and Express.js mastery',
        'RESTful API design and development',
        'Database modeling and optimization',
        'Authentication and security',
        'Microservices architecture',
        'Docker containerization',
        'AWS cloud services',
        'API documentation and testing'
      ],
      outcomes: [
        'Build scalable backend systems',
        'Design secure APIs',
        'Deploy to cloud platforms',
        'Implement best practices'
      ]
    },
    {
      title: 'UI/UX Design & Development',
      icon: Palette,
      duration: '14 weeks',
      students: '500+',
      rating: 4.8,
      level: 'Beginner to Intermediate',
      price: '$9,000',
      description: 'Bridge design and development with modern tools and frameworks for creating beautiful user experiences.',
      features: [
        'Design thinking and user research',
        'Figma and design tool mastery',
        'HTML/CSS advanced techniques',
        'CSS animations and transitions',
        'JavaScript for interactions',
        'Accessibility best practices',
        'Design system creation',
        'Prototyping and user testing'
      ],
      outcomes: [
        'Create stunning user interfaces',
        'Develop design systems',
        'Build accessible applications',
        'Master design-to-code workflow'
      ]
    },
    {
      title: 'JavaScript Fundamentals',
      icon: BookOpen,
      duration: '8 weeks',
      students: '1,500+',
      rating: 4.9,
      level: 'Beginner',
      price: '$4,000',
      description: 'Solid foundation in JavaScript programming, perfect for absolute beginners or those looking to strengthen their basics.',
      features: [
        'JavaScript syntax and fundamentals',
        'DOM manipulation and events',
        'Asynchronous programming',
        'ES6+ modern features',
        'Debugging and problem-solving',
        'Basic algorithms and data structures',
        'Project-based learning',
        'Code review and best practices'
      ],
      outcomes: [
        'Write clean, efficient JavaScript',
        'Manipulate web pages dynamically',
        'Solve programming challenges',
        'Build interactive projects'
      ]
    },
    {
      title: 'Advanced JavaScript & Frameworks',
      icon: Code,
      duration: '12 weeks',
      students: '400+',
      rating: 4.8,
      level: 'Intermediate to Advanced',
      price: '$8,500',
      description: 'Advanced JavaScript concepts, multiple frameworks, and modern development practices for experienced developers.',
      features: [
        'Advanced JavaScript patterns',
        'Multiple framework comparison (React, Vue, Angular)',
        'TypeScript fundamentals',
        'Module bundlers (Webpack, Vite)',
        'Testing strategies and tools',
        'Performance optimization',
        'Modern development workflow',
        'Open source contribution'
      ],
      outcomes: [
        'Master advanced JS concepts',
        'Work with multiple frameworks',
        'Optimize application performance',
        'Contribute to open source'
      ]
    }
  ];

  const learningPaths = [
    {
      title: 'Complete Beginner',
      path: ['JavaScript Fundamentals', 'Frontend React Specialization', 'Backend Node.js Track'],
      duration: '30 weeks'
    },
    {
      title: 'Career Changer',
      path: ['Full-Stack Web Development Bootcamp'],
      duration: '16 weeks'
    },
    {
      title: 'Design Focus',
      path: ['JavaScript Fundamentals', 'UI/UX Design & Development'],
      duration: '22 weeks'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Development
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master web development with our comprehensive, project-based courses designed by industry experts
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Recommended Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{path.title}</h3>
                <div className="space-y-2 mb-4">
                  {path.path.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Total Duration: {path.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                course.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Course Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span>{course.rating} rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>

                {/* Course Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {course.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {course.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{course.features.length - 4} more topics
                      </div>
                    )}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((outcome, outcomeIndex) => (
                      <span
                        key={outcomeIndex}
                        className="bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/apply"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block transform hover:scale-105"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Hot Bean Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Small Class Sizes</h3>
              <p className="text-blue-100">Maximum 15 students per cohort for personalized attention</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Mentors</h3>
              <p className="text-blue-100">Learn from professionals currently working at top tech companies</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Job Guarantee</h3>
              <p className="text-blue-100">95% of our graduates land jobs within 6 months</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/apply"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block transform hover:scale-105"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;