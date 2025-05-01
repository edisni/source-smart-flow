
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample data for recent RFQs
const recentRfqs = [
  {
    id: "RFQ-2023-05786",
    title: "Steel Components for Q3",
    suppliers: 8,
    deadline: "May 15, 2025",
    status: "active"
  },
  {
    id: "RFQ-2023-05782", 
    title: "Electronic Components",
    suppliers: 12,
    deadline: "May 20, 2025",
    status: "draft"
  },
  {
    id: "RFQ-2023-05780",
    title: "Packaging Materials",
    suppliers: 5,
    deadline: "May 12, 2025",
    status: "evaluating"
  },
  {
    id: "RFQ-2023-05779",
    title: "Raw Polymers Supply",
    suppliers: 3,
    deadline: "May 10, 2025",
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

export function RecentRfqTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>RFQ ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Suppliers</TableHead>
            <TableHead className="hidden md:table-cell">Deadline</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentRfqs.map((rfq) => (
            <TableRow key={rfq.id}>
              <TableCell className="font-medium">{rfq.id}</TableCell>
              <TableCell>{rfq.title}</TableCell>
              <TableCell className="hidden md:table-cell">{rfq.suppliers}</TableCell>
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
  );
}
