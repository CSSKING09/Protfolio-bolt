import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Available for Freelance Projects</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Transforming Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              High-Performance Websites
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="font-semibold text-gray-900">Muhammad Raffay</span>, a frontend and full-stack developer specializing in building modern, scalable web applications that drive real business results. From SaaS platforms to eCommerce solutions, I deliver production-ready code that exceeds expectations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
            >
              View My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all border-2 border-gray-900 hover:scale-105"
            >
              <Code2 className="w-5 h-5" />
              Hire Me
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '35+' },
              { label: 'Response Time', value: '<24h' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
