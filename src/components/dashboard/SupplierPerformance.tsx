
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for supplier performance
const supplierPerformanceData = [
  { name: 'Ace Materials', score: 92 },
  { name: 'MetalCorp', score: 88 },
  { name: 'BuildRight', score: 76 },
  { name: 'FastTech', score: 95 },
  { name: 'GlobalParts', score: 82 },
];

export function SupplierPerformance() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Top Supplier Performance</CardTitle>
        <CardDescription>Quality and delivery scores of top suppliers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={supplierPerformanceData} 
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              layout="vertical"
            >
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Performance Score']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="score" fill="#3282B8" barSize={20} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
