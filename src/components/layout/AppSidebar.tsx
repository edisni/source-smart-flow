
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  FileText, 
  Users, 
  FileCheck, // Replaced FileContract with FileCheck
  BarChart,
  Settings,
} from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'RFQ Management',
    href: '/rfq',
    icon: FileText,
  },
  {
    title: 'Suppliers',
    href: '/suppliers',
    icon: Users,
  },
  {
    title: 'Contracts',
    href: '/contracts',
    icon: FileCheck, // Updated icon here as well
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="hidden lg:block border-r bg-sidebar h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full py-4">
        <nav className="space-y-1 px-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                location.pathname === item.href || location.pathname.startsWith(`${item.href}/`) 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;
