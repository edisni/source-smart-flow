
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ContractTable from './ContractTable';
import { ContractType } from '@/types/contracts';

interface ContractStatusTabsProps {
  contracts: ContractType[];
}

const ContractStatusTabs: React.FC<ContractStatusTabsProps> = ({ contracts }) => {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
        <TabsTrigger value="expired">Expired</TabsTrigger>
        <TabsTrigger value="draft">Draft</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <ContractTable contracts={contracts} />
      </TabsContent>
      
      <TabsContent value="active">
        <ContractTable contracts={contracts.filter(contract => contract.status === "active")} />
      </TabsContent>

      <TabsContent value="expiring">
        <ContractTable contracts={contracts.filter(contract => contract.status === "expiring")} />
      </TabsContent>

      <TabsContent value="expired">
        <ContractTable contracts={contracts.filter(contract => contract.status === "expired")} />
      </TabsContent>

      <TabsContent value="draft">
        <ContractTable contracts={contracts.filter(contract => contract.status === "draft")} />
      </TabsContent>
    </Tabs>
  );
};

export default ContractStatusTabs;
