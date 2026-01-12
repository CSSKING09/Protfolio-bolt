import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVentures Inc',
    content: 'Muhammad delivered our SaaS platform ahead of schedule with exceptional code quality. His attention to detail and ability to translate our business requirements into a scalable solution was impressive. The platform has been running smoothly for 8 months with zero downtime.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    role: 'Founder',
    company: 'LuxeMarket',
    content: 'We needed an eCommerce platform that could handle high traffic during sales. Raffay built us a lightning-fast, conversion-optimized store that increased our sales by 40% in the first quarter. His expertise in performance optimization is unmatched.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Director',
    company: 'PropertyHub Solutions',
    content: 'Working with Muhammad was a breeze. He understood our vision immediately and brought creative solutions we hadn\'t even considered. The real estate platform he built is intuitive, beautiful, and has received excellent feedback from our users and agents.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  },
  {
    name: 'David Anderson',
    role: 'CTO',
    company: 'FinanceFlow',
    content: 'Raffay\'s technical skills are top-tier. He built our financial dashboard with complex data visualizations and real-time updates. The code is clean, well-documented, and easy for our team to maintain. He\'s our go-to developer for critical projects.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'CloudSync Technologies',
    content: 'Muhammad doesn\'t just code; he thinks like a product owner. He suggested improvements that significantly enhanced our user experience. His communication throughout the project was excellent, and he always delivered on time.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  },
  {
    name: 'Michael Brown',
    role: 'Business Owner',
    company: 'TechCorp Consulting',
    content: 'Our corporate website needed a complete overhaul. Raffay delivered a modern, SEO-optimized site that transformed our online presence. We\'ve seen a 150% increase in organic traffic and significantly more quality leads coming through the site.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-gray-300 mb-3" />

              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
