
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  FileText,
  Users,
  FileCheck,
  BarChart,
  Settings,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

type NavSubItem = {
  title: string;
  href: string;
};

type NavItem = {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: NavSubItem[];
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'RFQ to Source',
    icon: FileText,
    subItems: [
      { title: 'RFQ', href: '/rfq' },
      { title: 'Supplier Evaluation', href: '/supplier-evaluation' },
      { title: 'Supplier Selection', href: '/supplier-selection' },
    ]
  },
  {
    title: 'SRM',
    icon: Users,
    subItems: [
      { title: 'Contracts', href: '/contracts' },
      { title: 'Supplier Performance', href: '/supplier-performance' },
      { title: 'Risk Management', href: '/risk-management' },
    ]
  },
  {
    title: 'Strategy and Team',
    icon: BarChart,
    subItems: [
      { title: 'Category Strategy Builder', href: '/category-strategy' },
      { title: 'Purchasing KPI', href: '/purchasing-kpi' },
      { title: 'Trainings', href: '/trainings' },
    ]
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  // Check if the current location is within a section's subitems
  const isInSection = (item: NavItem) => {
    if (item.subItems) {
      return item.subItems.some(subItem => 
        location.pathname === subItem.href || location.pathname.startsWith(`${subItem.href}/`)
      );
    }
    return false;
  };

  // Initialize expanded sections based on current location
  React.useEffect(() => {
    navItems.forEach(item => {
      if (item.subItems && isInSection(item) && !expandedSections.includes(item.title)) {
        setExpandedSections(prev => [...prev, item.title]);
      }
    });
  }, [location.pathname]);
  
  return (
    <div className="hidden lg:block border-r bg-sidebar h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex flex-col h-full py-4">
        <nav className="space-y-1 px-2 flex-1">
          {navItems.map((item) => (
            <div key={item.title} className="space-y-1">
              {item.href ? (
                <Link
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
              ) : (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSection(item.title)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      isInSection(item)
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </div>
                    {expandedSections.includes(item.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.includes(item.title) && item.subItems && (
                    <div className="ml-6 space-y-1 pl-2 border-l border-sidebar-border">
                      {item.subItems.map(subItem => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                            location.pathname === subItem.href || location.pathname.startsWith(`${subItem.href}/`) 
                              ? "bg-sidebar-accent text-sidebar-accent-foreground"
                              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          )}
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;
