import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Why should I hire Muhammad Raffay?',
    answer: 'I bring 5+ years of hands-on experience building production-grade websites and applications. Unlike many developers who stick to templates, I craft custom solutions tailored to your specific business needs. My work focuses on three core principles: performance (fast load times and smooth interactions), scalability (code that grows with your business), and results (measurable improvements in conversions, traffic, or user engagement). Every project I deliver is production-ready, well-documented, and built to last.'
  },
  {
    question: 'What makes you different from other developers?',
    answer: 'I don\'t just write code—I solve business problems. Before touching a single line of code, I take time to understand your goals, target audience, and success metrics. I bring a product-minded approach to development, suggesting improvements and optimizations you might not have considered. My clients appreciate my clear communication, ability to meet deadlines consistently, and the quality of code that\'s maintainable by any team. Plus, I\'m available for ongoing support and quick iterations when needed.'
  },
  {
    question: 'Which technologies do you specialize in?',
    answer: 'My core stack includes React.js for building dynamic user interfaces, HTML5/CSS3 for semantic and accessible markup, JavaScript (ES6+) for modern functionality, and Bootstrap/Tailwind CSS for responsive designs. I\'m proficient in TypeScript for type-safe code, REST APIs for backend integration, and various performance optimization techniques. I choose technologies based on project requirements—not trends—ensuring you get the right tool for the job, not just the popular one.'
  },
  {
    question: 'Can you deliver fast, scalable websites?',
    answer: 'Absolutely. Performance is a cornerstone of every project I build. I implement lazy loading, code splitting, image optimization, and efficient caching strategies as standard practice. My websites consistently score 90+ on Google Lighthouse. Scalability is built into the architecture from day one—whether you\'re serving 100 users or 100,000, the foundation I lay ensures smooth growth without requiring a complete rebuild down the line.'
  },
  {
    question: 'Do you work with startups and businesses?',
    answer: 'Yes, I work with both startups and established businesses. For startups, I understand the need for speed-to-market and MVP development—I can help you launch quickly with scalable architecture that won\'t require a rewrite as you grow. For established businesses, I bring the experience to handle complex requirements, integrate with existing systems, and deliver enterprise-grade solutions. I\'ve successfully delivered projects ranging from small business websites to multi-tenant SaaS platforms.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. A landing page or small business website typically takes 1-2 weeks, while more complex applications like SaaS platforms or eCommerce stores usually take 4-8 weeks. I always provide a detailed project timeline upfront with clear milestones. I believe in under-promising and over-delivering—most of my projects are completed ahead of schedule without compromising quality.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, I offer ongoing support and maintenance packages. After launch, I provide a warranty period to fix any bugs or issues that arise. For long-term partnerships, I offer monthly retainer options for continuous improvements, updates, and feature additions. I believe in building lasting relationships with clients, and many of my clients have worked with me for multiple projects over the years.'
  },
  {
    question: 'How do you ensure project success?',
    answer: 'Success starts with clear communication. I begin every project with a detailed requirements gathering phase, followed by wireframes or prototypes for your approval. Throughout development, I provide regular updates and demos so you\'re never in the dark. I use modern development practices including version control, code reviews, and thorough testing. Before launch, I conduct comprehensive QA testing across devices and browsers. Post-launch, I monitor performance and address any issues immediately.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
