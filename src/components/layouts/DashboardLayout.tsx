import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Briefcase,
  PieChart,
  ClipboardList,
  CreditCard,
  Building2,
  Settings,
  HelpCircle,
  BookOpen,
  LifeBuoy,
  LogOut,
  ChevronDown,
  Menu,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, MessageSquare, User, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  isSidebarOpen: boolean;
  navigate: (path: string) => void;
  onClick?: () => void;
  submenuItems?: Array<{
    label: string;
    path: string;
    icon?: React.ElementType;
  }>;
}

function SidebarItem({ 
  icon: Icon, 
  label, 
  isActive, 
  hasSubmenu, 
  isSubmenuOpen, 
  isSidebarOpen, 
  navigate,
  onClick, 
  submenuItems 
}: SidebarItemProps) {
  return (
    <div>
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors rounded-lg
          ${isActive ? 'bg-[#1a1f2d] text-white' : 'text-gray-400 hover:text-white hover:bg-[#1a1f2d]'}`}
        title={label}
      >
        <div className="flex items-center space-x-3">
          <Icon className="h-5 w-5" />
          <span className={`text-sm transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
            {label}
          </span>
        </div>
        {hasSubmenu && isSidebarOpen && (
          <ChevronDown className={`h-4 w-4 transform transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
        )}
      </button>
      
      {hasSubmenu && isSubmenuOpen && isSidebarOpen && submenuItems && (
        <div className="mt-1 ml-4 pl-4 border-l border-gray-700">
          {submenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1a1f2d] rounded-lg"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const mainMenu = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { 
    icon: Briefcase, 
    label: 'Jobs', 
    path: '/dashboard/jobs', 
    hasSubmenu: true,
    submenuItems: [
      { label: 'Posted Jobs', path: '/dashboard/jobs', icon: CircleDot },
      { label: 'Assigned Jobs', path: '/dashboard/jobs/assigned' },
      { label: 'Create Job', path: '/dashboard/jobs/create', icon: Plus }
    ]
  },
  { icon: PieChart, label: 'Reports', path: '/dashboard/reports' },
  { icon: ClipboardList, label: 'Task Log', path: '/dashboard/tasks' },
  { icon: CreditCard, label: 'Payments', path: '/dashboard/payments' },
  { icon: Building2, label: 'Companies', path: '/dashboard/companies' }
];

const settingsMenu = [
  { label: 'Personal & Profile Details', path: '/dashboard/settings' },
  { label: 'Connected Services', path: '/dashboard/settings/connected' },
  { label: 'Password & Security', path: '/dashboard/settings/security' },
  { label: 'Payment Methods', path: '/dashboard/settings/payment' },
  { label: 'Balance & Withdrawals', path: '/dashboard/settings/balance' }
];

const helpMenu = [
  { icon: HelpCircle, label: 'How it Works' },
  { icon: BookOpen, label: 'Knowledge Hub' },
  { icon: LifeBuoy, label: 'Support' },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen transition-all duration-300 bg-[#12151C] text-white ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="h-16 flex items-center justify-between px-4">
          {isSidebarOpen && (
            <span className="text-xs font-semibold text-gray-400 uppercase">Main</span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 hover:bg-[#1a1f2d] rounded-lg text-gray-400 hover:text-white ${!isSidebarOpen ? 'w-full flex justify-center' : ''}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="px-3 py-2">
          <div className="space-y-1">
            {mainMenu.map((item, index) => (
              <SidebarItem
                key={index}
                onClick={() => {
                  if (item.hasSubmenu) {
                    setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                    if (item.path) {
                      navigate(item.path);
                    }
                  } else if (item.path) {
                    navigate(item.path);
                  }
                }}
                icon={item.icon}
                label={item.label}
                isActive={
                  (item.path === '/dashboard' && location.pathname === '/dashboard') ||
                  (item.path && location.pathname.startsWith(item.path))
                }
                hasSubmenu={item.hasSubmenu}
                isSubmenuOpen={openSubmenu === item.label}
                isSidebarOpen={isSidebarOpen}
                navigate={navigate}
                submenuItems={item.submenuItems}
              />
            ))}
          </div>
        </div>

        {/* Settings Section */}
        {isSidebarOpen && (
          <div className="px-4 pt-8 pb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">Settings</span>
          </div>
        )}
        <div className="px-3 py-2">
          <SidebarItem
            onClick={() => setOpenSubmenu(openSubmenu === 'settings' ? null : 'settings')}
            icon={Settings}
            label="Settings"
            hasSubmenu={true}
            isSubmenuOpen={openSubmenu === 'settings'}
            isSidebarOpen={isSidebarOpen}
            navigate={navigate}
            submenuItems={settingsMenu}
          />
        </div>

        {/* Help Section */}
        {isSidebarOpen && (
          <div className="px-4 pt-8 pb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">Help</span>
          </div>
        )}
        <div className="px-3 py-2">
          {helpMenu.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              navigate={navigate}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
          <SidebarItem
            icon={LogOut}
            label="Sign Out"
            navigate={navigate}
            onClick={handleSignOut}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 min-h-screen ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="bg-white border-b border-gray-200">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2 mr-6">
                  <div className="rounded-lg p-1 bg-red-600">
                    <CircleDot className="h-5 w-5 text-white" />
                  </div>
                </Link>
                <div className="flex items-center">
                  <select className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Link 
                  to="/dashboard" 
                  className="p-2 text-gray-400 hover:text-gray-500"
                  title="Dashboard"
                >
                  <LayoutDashboard className="h-5 w-5" />
                </Link>
                <button 
                  className="relative p-2 text-gray-400 hover:text-gray-500"
                  title="Messages"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button 
                  className="relative p-2 text-gray-400 hover:text-gray-500"
                  title="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    5
                  </span>
                </button>
                <div 
                  className="h-8 w-8 rounded-full overflow-hidden cursor-pointer"
                  title="Profile"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-400 hover:text-gray-500"
                  title="Sign out"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <main className="p-8 bg-[#F7F8FA]">
          {children}
        </main>
      </div>
    </div>
  );
}