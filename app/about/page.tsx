import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-900">West Cap</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About West Cap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of AI-powered business automation, helping companies streamline meeting scheduling, drive inbound phone calls, and deliver exceptional customer care 24/7.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            West Cap was created to solve a critical problem: businesses waste countless hours on manual scheduling and struggle to provide round-the-clock customer support. We help you automate these processes with intelligent AI assistants.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Traditional scheduling methods are time-consuming and customer support is limited by business hours. We've built a platform that uses AI to handle appointments automatically and provide instant customer care 24/7.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 mb-4">
            West Cap provides AI-powered automation tools that help businesses streamline operations and enhance customer experience. Our service includes:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
            <li>AI-powered meeting scheduling and calendar management</li>
            <li>Phone call generation — turning digital contacts into live conversations</li>
            <li>Click-to-call messaging and inbound call routing</li>
            <li>24/7 automated customer support and inquiry handling</li>
            <li>Intelligent appointment reminders and follow-ups</li>
            <li>Natural language processing for customer interactions</li>
            <li>Real-time analytics and performance tracking</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            We understand that time is your most valuable resource. That's why we've built a platform that uses AI to handle scheduling and customer care automatically, freeing your team to focus on what matters most. Our intelligent assistants work 24/7 to ensure no customer inquiry goes unanswered and no appointment opportunity is missed.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Our Address</h2>
          <p className="text-lg text-gray-600">
            24 Executive Park, Ste 250<br />
            Irvine, California 92614<br />United States of America
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Boost Your Conversions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join businesses that trust West Cap to automate scheduling and deliver exceptional customer care with AI.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">West Cap</h3>
              <p className="text-gray-400">
                AI-powered meeting scheduling and customer care automation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@usewestcap.com
              </p>
              <p className="text-gray-400 mt-4">
                24 Executive Park, Ste 250<br />
                Irvine, California 92614<br />
                United States of America
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 West Cap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
