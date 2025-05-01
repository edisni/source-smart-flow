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

// Sample data for RFQs
const rfqs = [
  {
    id: "RFQ-2023-05786",
    title: "Steel Components for Q3",
    suppliers: 8,
    material: "Steel",
    created: "May 1, 2025",
    deadline: "May 15, 2025",
    status: "active"
  },
  {
    id: "RFQ-2023-05782", 
    title: "Electronic Components",
    suppliers: 12,
    material: "Electronic",
    created: "May 2, 2025",
    deadline: "May 20, 2025",
    status: "draft"
  },
  {
    id: "RFQ-2023-05780",
    title: "Packaging Materials",
    suppliers: 5,
    material: "Packaging",
    created: "April 28, 2025",
    deadline: "May 12, 2025",
    status: "evaluating"
  },
  {
    id: "RFQ-2023-05779",
    title: "Raw Polymers Supply",
    suppliers: 3,
    material: "Polymers",
    created: "April 25, 2025",
    deadline: "May 10, 2025",
    status: "completed"
  },
  {
    id: "RFQ-2023-05775", 
    title: "Machine Parts Q2",
    suppliers: 7,
    material: "Metal",
    created: "April 20, 2025",
    deadline: "May 5, 2025",
    status: "completed"
  }
];

// Helper function to get badge variant based on status
const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Active</Badge>;
    case "draft":
      return <Badge variant="outline">Draft</Badge>;
    case "evaluating":
      return <Badge className="bg-amber-500">Evaluating</Badge>;
    case "completed":
      return <Badge className="bg-blue-500">Completed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const RfqManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">RFQ Management</h1>
        <Button>Create New RFQ</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>RFQ Overview</CardTitle>
          <CardDescription>
            View and manage all your Request for Quotations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-sm">
                <Input placeholder="Search RFQs..." />
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
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="evaluating">Evaluating</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="rounded-md border mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>RFQ ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Material</TableHead>
                        <TableHead className="hidden md:table-cell">Suppliers</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="hidden md:table-cell">Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rfqs.map((rfq) => (
                        <TableRow key={rfq.id}>
                          <TableCell className="font-medium">{rfq.id}</TableCell>
                          <TableCell>{rfq.title}</TableCell>
                          <TableCell className="hidden md:table-cell">{rfq.material}</TableCell>
                          <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
                          <TableCell className="hidden md:table-cell">{rfq.created}</TableCell>
                          <TableCell className="hidden md:table-cell">{rfq.deadline}</TableCell>
                          <TableCell>{getStatusBadge(rfq.status)}</TableCell>
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
                        <TableHead>RFQ ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Material</TableHead>
                        <TableHead className="hidden md:table-cell">Suppliers</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="hidden md:table-cell">Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rfqs
                        .filter((rfq) => rfq.status === "active")
                        .map((rfq) => (
                          <TableRow key={rfq.id}>
                            <TableCell className="font-medium">{rfq.id}</TableCell>
                            <TableCell>{rfq.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.material}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.created}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.deadline}</TableCell>
                            <TableCell>{getStatusBadge(rfq.status)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="draft">
                <div className="rounded-md border mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>RFQ ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Material</TableHead>
                        <TableHead className="hidden md:table-cell">Suppliers</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="hidden md:table-cell">Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rfqs
                        .filter((rfq) => rfq.status === "draft")
                        .map((rfq) => (
                          <TableRow key={rfq.id}>
                            <TableCell className="font-medium">{rfq.id}</TableCell>
                            <TableCell>{rfq.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.material}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.created}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.deadline}</TableCell>
                            <TableCell>{getStatusBadge(rfq.status)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="evaluating">
                <div className="rounded-md border mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>RFQ ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Material</TableHead>
                        <TableHead className="hidden md:table-cell">Suppliers</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="hidden md:table-cell">Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rfqs
                        .filter((rfq) => rfq.status === "evaluating")
                        .map((rfq) => (
                          <TableRow key={rfq.id}>
                            <TableCell className="font-medium">{rfq.id}</TableCell>
                            <TableCell>{rfq.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.material}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.created}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.deadline}</TableCell>
                            <TableCell>{getStatusBadge(rfq.status)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="rounded-md border mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>RFQ ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Material</TableHead>
                        <TableHead className="hidden md:table-cell">Suppliers</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="hidden md:table-cell">Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rfqs
                        .filter((rfq) => rfq.status === "completed")
                        .map((rfq) => (
                          <TableRow key={rfq.id}>
                            <TableCell className="font-medium">{rfq.id}</TableCell>
                            <TableCell>{rfq.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.material}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.created}</TableCell>
                            <TableCell className="hidden md:table-cell">{rfq.deadline}</TableCell>
                            <TableCell>{getStatusBadge(rfq.status)}</TableCell>
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

export default RfqManagement;
