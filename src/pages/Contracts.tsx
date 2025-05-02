
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContractSpendDashboard } from '@/components/contracts/ContractSpendDashboard';
import ContractList from '@/components/contracts/ContractList';
import ContractsHeader from '@/components/contracts/ContractsHeader';
import { useContracts } from '@/hooks/useContracts';

const Contracts: React.FC = () => {
  const { activeTab, setActiveTab } = useContracts();

  return (
    <div className="space-y-6">
      <ContractsHeader />
      
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contracts">Contracts List</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab with Dashboard */}
        <TabsContent value="overview">
          <ContractSpendDashboard />
        </TabsContent>
        
        {/* Contracts List Tab */}
        <TabsContent value="contracts">
          <ContractList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contracts;
