"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, ArrowRight, Menu, X, BarChart3, PieChart, Wallet } from 'lucide-react';
import Script from 'next/script';

export default function FinancialWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Google Analytics pageview tracking
  useEffect(() => {
    // Track page view on mount
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GA Event tracking helper
  const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventParams);
    }
    console.log('GA Event:', eventName, eventParams);
  };

  const handleCTAClick = (location) => {
    trackEvent('cta_click', {
      button_location: location,
      button_text: 'Get Started'
    });
  };

  const handleFeatureClick = (featureName) => {
    trackEvent('feature_interaction', {
      feature_name: featureName
    });
  };

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3EZMNCTV8D"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3EZMNCTV8D');
          `,
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">FinanceFlow</span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="hover:text-blue-400 transition">Features</a>
                <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
                <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
                <a href="#about" className="hover:text-blue-400 transition">About</a>
              </div>

              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-4 py-4 space-y-3">
                <a href="#features" className="block hover:text-blue-400 transition">Features</a>
                <a href="#solutions" className="block hover:text-blue-400 transition">Solutions</a>
                <a href="#pricing" className="block hover:text-blue-400 transition">Pricing</a>
                <a href="#about" className="block hover:text-blue-400 transition">About</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6">
                Trusted by 10,000+ businesses worldwide
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Smart Financial Management for Modern Businesses
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Streamline your finances, automate workflows, and make data-driven decisions with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleCTAClick('hero')}
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
                >
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => trackEvent('demo_request', { location: 'hero' })}
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-slate-400 text-lg">Everything you need to manage your finances effectively</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-12 h-12" />,
                  title: 'Real-Time Analytics',
                  description: 'Get instant insights into your financial performance with interactive dashboards and reports.'
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Bank-Level Security',
                  description: 'Your data is protected with 256-bit encryption and multi-factor authentication.'
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: 'Automated Workflows',
                  description: 'Save time with intelligent automation for invoicing, expenses, and reconciliation.'
                },
                {
                  icon: <PieChart className="w-12 h-12" />,
                  title: 'Budget Tracking',
                  description: 'Set budgets, track spending, and receive alerts when you approach limits.'
                },
                {
                  icon: <Wallet className="w-12 h-12" />,
                  title: 'Multi-Currency',
                  description: 'Manage finances across multiple currencies with automatic conversion.'
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: 'Forecasting',
                  description: 'Use AI-powered predictions to plan for the future with confidence.'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => handleFeatureClick(feature.title)}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-800 transition cursor-pointer border border-slate-700 hover:border-blue-500"
                >
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '$2B+', label: 'Managed Annually' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Financial Management?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already using FinanceFlow to simplify their finances.
            </p>
            <button 
              onClick={() => handleCTAClick('bottom')}
              className="px-10 py-5 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto transition transform hover:scale-105"
            >
              Start Your Free Trial <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <span className="font-bold">FinanceFlow</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Modern financial management for forward-thinking businesses.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Features</a></li>
                  <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-400">Security</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-blue-400">About</a></li>
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400">API Docs</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
              <p>© 2025 FinanceFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
