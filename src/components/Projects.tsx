import { ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'FinanceFlow - SaaS Dashboard',
    description: 'A comprehensive financial management platform built for SMBs. Features real-time analytics, invoice management, and automated reporting. Handles 10,000+ monthly transactions with sub-second load times.',
    image: 'https://images.pexels.com/photos/7681670/pexels-photo-7681670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://www.creative-tim.com/product/soft-ui-dashboard-react',
    category: 'SaaS Platform'
  },
  {
    title: 'LuxeCommerce - Fashion Store',
    description: 'High-end eCommerce platform for a luxury fashion brand. Integrated Stripe payments, inventory management, and personalized product recommendations. Achieved 98/100 Lighthouse score with optimized image delivery.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React.js', 'Bootstrap', 'Stripe API', 'REST APIs'],
    liveUrl: 'https://themes.getbootstrap.com/preview/?theme_id=88333',
    category: 'eCommerce'
  },
  {
    title: 'PropertyHub - Real Estate Platform',
    description: 'Modern property listing platform with advanced search filters, interactive maps, and virtual tour integration. Built responsive design that works flawlessly across all devices, serving 5,000+ daily users.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React.js', 'Google Maps API', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://preview.themeforest.net/item/homez-real-estate-react-template/full_screen_preview/45986929',
    category: 'Business Website'
  },
  {
    title: 'TechCorp - Corporate Website',
    description: 'Enterprise-level corporate website for a technology consulting firm. Delivered a fully animated, SEO-optimized site with integrated blog, case studies, and contact forms. Improved organic traffic by 150%.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://preview.themeforest.net/item/consultix-business-consulting-react-template/full_screen_preview/54068579',
    category: 'Corporate'
  },
  {
    title: 'FitTrack - Fitness App Dashboard',
    description: 'Comprehensive fitness tracking dashboard with workout planning, nutrition logging, and progress visualization. Built complex data visualizations and real-time sync across devices.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React.js', 'Chart.js', 'Tailwind CSS', 'Local Storage API'],
    liveUrl: 'https://demos.creative-tim.com/vision-ui-dashboard-react/',
    category: 'Web Application'
  },
  {
    title: 'CloudSync - Project Management Tool',
    description: 'Collaborative project management platform with Kanban boards, team chat, and file sharing. Optimized for teams of 20-200 members with role-based access control and real-time updates.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React.js', 'TypeScript', 'WebSocket', 'CSS3'],
    liveUrl: 'https://preview.themeforest.net/item/dashly-admin-dashboard-with-react/full_screen_preview/50711697',
    category: 'Dashboard'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real client work delivering measurable results. Each project showcases production-grade code, scalable architecture, and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <button className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium">
                    <Code className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
