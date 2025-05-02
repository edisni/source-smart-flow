
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContractFilters from './ContractFilters';
import ContractStatusTabs from './ContractStatusTabs';
import { useContracts } from '@/hooks/useContracts';

const ContractList: React.FC = () => {
  const { contracts, searchQuery, handleSearch } = useContracts();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contracts</CardTitle>
        <CardDescription>
          Manage your supplier contracts and agreements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ContractFilters 
            onSearch={handleSearch} 
            searchQuery={searchQuery} 
          />
          <ContractStatusTabs contracts={contracts} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractList;
