
import React from 'react';
import { FileText, Users, FileCheck, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentRfqTable } from '@/components/dashboard/RecentRfqTable';
import { SupplierPerformance } from '@/components/dashboard/SupplierPerformance';
import { RfqStatusChart } from '@/components/dashboard/RfqStatusChart';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex space-x-2">
          <Button>New RFQ</Button>
          <Button variant="outline">Import Data</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Active RFQs" 
          value="24" 
          description="Last 30 days" 
          icon={<FileText className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Suppliers" 
          value="86" 
          description="8 new this month" 
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard 
          title="Contracts" 
          value="32" 
          description="4 due for renewal" 
          icon={<FileCheck className="h-5 w-5" />} // Updated to FileCheck here
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          title="Spend Under Management" 
          value="$4.2M" 
          description="Q2 2025" 
          icon={<BarChart className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <SupplierPerformance />
        <RfqStatusChart />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent RFQs</h2>
          <Button variant="ghost" className="text-sm">View all</Button>
        </div>
        <RecentRfqTable />
      </div>
    </div>
  );
};

export default Dashboard;
