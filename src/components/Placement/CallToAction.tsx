import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              Ready to Launch Your 
              <span className="text-orange-500"> Dream Career?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful students who transformed their careers with our proven placement program
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-600">100%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-600">₹24 LPA</div>
              <div className="text-gray-600">Highest Package</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-600">2500+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to={"/contact"}>
            <button className="group bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Your Slot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <button className="group bg-gradient-primary backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>More Details Call Now</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">100% Job Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Lifetime Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Industry Mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;