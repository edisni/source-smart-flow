import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for contracts
const contracts = [
  {
    id: "CTR-2023-1245",
    title: "Annual Steel Supply Agreement",
    supplier: "Ace Materials Inc.",
    startDate: "Jan 1, 2025",
    endDate: "Dec 31, 2025",
    value: "$2.4M",
    status: "active"
  },
  {
    id: "CTR-2023-1242", 
    title: "Electronic Components Supply",
    supplier: "FastTech Electronics",
    startDate: "Feb 15, 2025",
    endDate: "Feb 14, 2026",
    value: "$1.8M",
    status: "active"
  },
  {
    id: "CTR-2023-1240",
    title: "Packaging Materials",
    supplier: "PackRight Inc.",
    startDate: "Mar 1, 2025",
    endDate: "Aug 31, 2025",
    value: "$650K",
    status: "expiring"
  },
  {
    id: "CTR-2023-1238",
    title: "Raw Polymers Supply Agreement",
    supplier: "PolymerTech",
    startDate: "Jan 1, 2025",
    endDate: "Jun 30, 2025",
    value: "$1.2M",
    status: "expiring"
  },
  {
    id: "CTR-2023-1235", 
    title: "Machine Parts Supply Q1-Q2",
    supplier: "MetalCorp Industries",
    startDate: "Jan 1, 2025",
    endDate: "Apr 30, 2025",
    value: "$780K",
    status: "expired"
  }
];

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

const Contracts: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Contract Management</h1>
        <div className="flex space-x-2">
          <Button>New Contract</Button>
          <Button variant="outline">Import Contracts</Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Contracts</CardTitle>
          <CardDescription>
            Manage your supplier contracts and agreements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-sm">
                <Input placeholder="Search contracts..." />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
            
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
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
                            <Button variant="outline" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              {/* Other tab contents would be similar but filtered by status */}
              <TabsContent value="active">
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
                      {contracts.filter(contract => contract.status === "active").map((contract) => (
                        <TableRow key={contract.id}>
                          <TableCell className="font-medium">{contract.id}</TableCell>
                          <TableCell>{contract.title}</TableCell>
                          <TableCell className="hidden md:table-cell">{contract.supplier}</TableCell>
                          <TableCell className="hidden md:table-cell">{contract.startDate}</TableCell>
                          <TableCell className="hidden md:table-cell">{contract.endDate}</TableCell>
                          <TableCell className="hidden md:table-cell">{contract.value}</TableCell>
                          <TableCell>{getStatusBadge(contract.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contracts;
