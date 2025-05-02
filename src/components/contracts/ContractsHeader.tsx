
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ContractsHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleNewContract = () => {
    navigate('/contracts/new');
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-tight">Contract Management</h1>
      <div className="flex space-x-2">
        <Button onClick={handleNewContract}>New Contract</Button>
        <Button variant="outline">Import Contracts</Button>
      </div>
    </div>
  );
};

export default ContractsHeader;
