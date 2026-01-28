import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/zaltix-logo.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'About Us',
    href: '/about'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Knowledge Base',
    href: '/knowledge'
  }, {
    name: 'Contact Us',
    href: '/contact'
  }];
  return <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-glass-gradient backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-float">
            <Link to="/">
  <img src={logo} alt="Zaltix Logo" className="h-20 w-auto" />
</Link>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="glass-card px-8 py-3 rounded-full bg-gray-50">
              <div className="flex space-x-6">
                {navItems.map(item => <Link key={item.name} to={item.href} className="text-gray-700 hover:text-light-violet font-medium transition-all duration-300 hover:scale-105 relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-violet transition-all duration-300 group-hover:w-full"></span>
                  </Link>)}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="glass-card p-2 rounded-full">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden animate-fade-in">
            <div className="glass-card rounded-2xl mt-4 p-6 mx-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => <Link key={item.name} to={item.href} className="text-gray-700 hover:text-light-violet font-medium transition-all duration-300 py-2 border-b border-glass-border last:border-b-0" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;