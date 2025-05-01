
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Sample data for suppliers
const suppliers = [
  {
    id: "SUP-001",
    name: "Ace Materials Inc.",
    category: "Raw Materials",
    location: "Chicago, IL",
    risk: "low",
    performance: 92
  },
  {
    id: "SUP-002", 
    name: "MetalCorp Industries",
    category: "Metal Components",
    location: "Detroit, MI",
    risk: "medium",
    performance: 88
  },
  {
    id: "SUP-003",
    name: "BuildRight Manufacturing",
    category: "Construction Materials",
    location: "Atlanta, GA",
    risk: "low",
    performance: 76
  },
  {
    id: "SUP-004",
    name: "FastTech Electronics",
    category: "Electronic Components",
    location: "San Jose, CA",
    risk: "high",
    performance: 95
  },
  {
    id: "SUP-005", 
    name: "GlobalParts Ltd.",
    category: "Mechanical Parts",
    location: "Dallas, TX",
    risk: "medium",
    performance: 82
  }
];

// Helper function to get risk badge
const getRiskBadge = (risk: string) => {
  switch (risk) {
    case "low":
      return <Badge className="bg-green-500">Low</Badge>;
    case "medium":
      return <Badge className="bg-amber-500">Medium</Badge>;
    case "high":
      return <Badge className="bg-red-500">High</Badge>;
    default:
      return <Badge variant="secondary">{risk}</Badge>;
  }
};

// Helper function to get performance badge
const getPerformanceBadge = (score: number) => {
  if (score >= 90) {
    return <Badge className="bg-green-500">{score}%</Badge>;
  } else if (score >= 75) {
    return <Badge className="bg-amber-500">{score}%</Badge>;
  } else {
    return <Badge className="bg-red-500">{score}%</Badge>;
  }
};

const Suppliers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Supplier Management</h1>
        <div className="flex space-x-2">
          <Button>Add Supplier</Button>
          <Button variant="outline">Import Suppliers</Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Supplier Directory</CardTitle>
          <CardDescription>
            View and manage your supplier relationships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-sm">
                <Input placeholder="Search suppliers..." />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
            
            <div className="rounded-md border mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-sourcing-100 text-sourcing-800">
                              {supplier.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{supplier.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{supplier.category}</TableCell>
                      <TableCell className="hidden md:table-cell">{supplier.location}</TableCell>
                      <TableCell>{getRiskBadge(supplier.risk)}</TableCell>
                      <TableCell>{getPerformanceBadge(supplier.performance)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">View Profile</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Suppliers;
