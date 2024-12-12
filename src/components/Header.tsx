import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, LogOut, LayoutDashboard, MessageSquare, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SignInModal } from './auth/SignInModal';
import { MobileMenu } from './MobileMenu';
import { CartMenu } from './CartMenu';
import { useAuth } from '../contexts/AuthContext';
import { MessagesWidget } from './widgets/MessagesWidget';
import { NotificationsWidget } from './widgets/NotificationsWidget';
import { UserProfileWidget } from './widgets/UserProfileWidget';

interface HeaderProps {
  isDashboard?: boolean;
}

export function Header({ isDashboard = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(true);
    setIsMobileMenuOpen(false);
    setIsMessagesOpen(false);
    setIsNotificationsOpen(false);
    setIsProfileOpen(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(true);
    setIsCartOpen(false);
    setIsMessagesOpen(false);
    setIsNotificationsOpen(false);
    setIsProfileOpen(false);
  };

  const handleSignInClick = () => {
    setIsRegistering(false);
    setIsSignInModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsRegistering(true);
    setIsSignInModalOpen(true);
  };

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleMessagesClick = () => {
    setIsMessagesOpen(true);
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setIsNotificationsOpen(false);
    setIsProfileOpen(false);
  };

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(true);
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setIsMessagesOpen(false);
    setIsProfileOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setIsMessagesOpen(false);
    setIsNotificationsOpen(false);
  };

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="flex items-center space-x-1">
          <button 
            onClick={handleDashboardClick} 
            className="p-2 rounded-full transition-colors hover:bg-gray-800"
            title="Dashboard"
          >
            <LayoutDashboard className="h-5 w-5" />
          </button>

          <button
            onClick={handleMessagesClick}
            className="relative p-2 rounded-full transition-colors hover:bg-gray-800"
            title="Messages"
          >
            <MessageSquare className="h-5 w-5 text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          <button
            onClick={handleNotificationsClick}
            className="relative p-2 rounded-full transition-colors hover:bg-gray-800"
            title="Notifications"
          >
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              5
            </span>
          </button>

          <button
            className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white/20 cursor-pointer"
            title="Profile"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </button>

          <button 
            onClick={handleSignOut}
            className="p-2 rounded-full transition-colors hover:bg-gray-800"
            title="Sign out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      );
    }

    return (
      <>
        <button
          onClick={handleSignInClick}
          className={`transition-colors ${
            isScrolled || isDashboard ? 'text-gray-300 hover:text-white' : 'text-white hover:text-brand-700'
          }`}
        >
          Sign in
        </button>
        <button
          onClick={handleSignUpClick}
          className="bg-brand-700 text-gray-900 px-4 py-2 rounded-md hover:bg-brand-600 transition-colors"
        >
          Sign up
        </button>
      </>
    );
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-brand-900 via-brand-900 to-brand-800/90 backdrop-blur-sm shadow-lg' : ''
      }`}>
        <div className={`transition-all duration-300 ${
          location.pathname === '/jobs' && !isScrolled ? 'bg-transparent' : 'bg-gradient-to-r from-brand-900 via-brand-900 to-brand-800/90 backdrop-blur-sm'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'py-3' : 'py-5'
            }`}>
              {/* Mobile Layout */}
              <div className="xl:hidden flex items-center justify-between w-full">
                <Logo isScrolled={!isDashboard && isScrolled} />
                
                <div className="flex items-center space-x-4">
                  {/* Text message above 720px */}
                  <div className="hidden min-[720px]:block">
                    <span className={`text-sm ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white' : 'text-white/90'
                    }`}>
                      20% OFF: Use code <code className="bg-brand-700 px-1.5 py-0.5 rounded text-gray-900 font-mono text-sm">20OFF</code>
                    </span>
                  </div>
                  
                  <div className="relative">
                    {/* Badge - Only visible below 720px */}
                    <div className="absolute -top-3 -right-3 z-10 max-[719px]:block hidden">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white transform rotate-3"></div>
                        <div className="relative bg-white text-[10px] font-bold px-2 py-0.5 text-gray-900">
                          20% off
                        </div>
                      </div>
                    </div>
                    {/* Button */}
                    <button className="px-3 py-1.5 bg-brand-700 text-gray-900 text-sm font-medium rounded-full hover:bg-brand-600 transition-colors">
                      Shop Packages Now
                    </button>
                  </div>

                  <button 
                    onClick={handleCartClick}
                    className={`p-2 rounded-md transition-colors relative ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </span>
                  </button>

                  <button 
                    onClick={handleMobileMenuClick}
                    className={`p-2 rounded-md transition-colors ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center justify-between w-full">
                <Logo isScrolled={!isDashboard && isScrolled} />
                <nav className="flex space-x-6">
                  <Link 
                    to="/talent"
                    className={`flex items-center transition-colors ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                    }`}>
                    Find & Hire Talent
                  </Link>
                  <Link 
                    to="/jobs"
                    className={`flex items-center transition-colors ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    Find Jobs
                  </Link>
                  <Link
                    to="/jobs/create"
                    className={`flex items-center transition-colors ${
                      location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                    }`}>
                    Post Job
                  </Link>
                  <div className="relative inline-flex items-center">
                    <Link 
                      to="/packages"
                      className={`flex items-center transition-colors ${
                        location.pathname === '/jobs' && !isScrolled ? 'text-white hover:text-white/90' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      Shop Packages
                    </Link>
                    <div className="relative ml-2 -mt-1">
                      <div className="absolute inset-0 bg-brand-800 transform rotate-3"></div>
                      <div className="relative bg-brand-800 text-[10px] font-bold px-1.5 py-0.5 text-white">
                        20% OFF
                      </div>
                    </div>
                  </div>
                </nav>

                <div className="flex items-center space-x-4">
                  {renderAuthButtons()}
                  <button 
                    onClick={handleCartClick}
                    className={`p-2 rounded-md transition-colors relative ${
                      isDashboard || isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:text-blue-400'
                    }`}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      <CartMenu 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        defaultView={isRegistering ? 'register' : 'login'}
      />
      <MessagesWidget
        isOpen={isMessagesOpen}
        onClose={() => setIsMessagesOpen(false)}
      />
      <NotificationsWidget
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
      <UserProfileWidget
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}