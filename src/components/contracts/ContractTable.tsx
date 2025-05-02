
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { ContractType } from '@/types/contracts';

interface ContractTableProps {
  contracts: ContractType[];
}

// Helper function to get status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Active</Badge>;
    case "expiring":
      return <Badge className="bg-amber-500">Expiring Soon</Badge>;
    case "expired":
      return <Badge variant="destructive">Expired</Badge>;
    case "draft":
      return <Badge variant="outline">Draft</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const ContractTable: React.FC<ContractTableProps> = ({ contracts }) => {
  const navigate = useNavigate();

  const handleViewContract = (contractId: string) => {
    // In the future, this could navigate to a contract detail page
    navigate(`/contracts/${contractId}`);
  };

  return (
    <div className="rounded-md border mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contract ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Supplier</TableHead>
            <TableHead className="hidden md:table-cell">Start Date</TableHead>
            <TableHead className="hidden md:table-cell">End Date</TableHead>
            <TableHead className="hidden md:table-cell">Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell className="font-medium">{contract.id}</TableCell>
              <TableCell>{contract.title}</TableCell>
              <TableCell className="hidden md:table-cell">{contract.supplier}</TableCell>
              <TableCell className="hidden md:table-cell">{contract.startDate}</TableCell>
              <TableCell className="hidden md:table-cell">{contract.endDate}</TableCell>
              <TableCell className="hidden md:table-cell">{contract.value}</TableCell>
              <TableCell>{getStatusBadge(contract.status)}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleViewContract(contract.id)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContractTable;
