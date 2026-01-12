import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-gray-300">
            Ready to start your project? Get in touch and let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://wa.me/923145001142"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300 mb-3">
                  Get instant responses. I'm usually online and ready to discuss your project.
                </p>
                <div className="flex items-center gap-2 text-green-400 font-medium group-hover:gap-3 transition-all">
                  Message me on WhatsApp
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>

          <a
            href="mailto:cssking09@gmail.com"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300 mb-3">
                  Prefer email? Send me your project details and I'll respond within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                  Send an email
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24h</div>
              <div className="text-gray-300">Fast Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-12 border-t border-white/20">
          <p className="text-gray-400">
            Muhammad Raffay - Frontend / Full-Stack Web Developer
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Specializing in React.js, Bootstrap, and Modern Web Development
          </p>
        </div>
      </div>
    </section>
  );
}
