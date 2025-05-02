
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ContractFiltersProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const ContractFilters: React.FC<ContractFiltersProps> = ({ onSearch, searchQuery }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full max-w-sm">
        <Input 
          placeholder="Search contracts..." 
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">Filter</Button>
        <Button variant="outline" size="sm">Export</Button>
      </div>
    </div>
  );
};

export default ContractFilters;
