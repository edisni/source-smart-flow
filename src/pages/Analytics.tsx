
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// Sample data for spend analytics
const spendData = [
  { month: 'Jan', amount: 420000 },
  { month: 'Feb', amount: 380000 },
  { month: 'Mar', amount: 450000 },
  { month: 'Apr', amount: 520000 },
  { month: 'May', amount: 490000 },
];

// Sample data for category breakdown
const categoryData = [
  { name: 'Raw Materials', value: 42, color: '#0284c7' },
  { name: 'Electronics', value: 28, color: '#06b6d4' },
  { name: 'Packaging', value: 15, color: '#0ea5e9' },
  { name: 'Services', value: 10, color: '#38bdf8' },
  { name: 'Other', value: 5, color: '#7dd3fc' },
];

// Sample data for supplier performance
const performanceData = [
  { supplier: 'Supplier A', quality: 92, delivery: 88, cost: 95 },
  { supplier: 'Supplier B', quality: 85, delivery: 90, cost: 82 },
  { supplier: 'Supplier C', quality: 78, delivery: 75, cost: 80 },
  { supplier: 'Supplier D', quality: 95, delivery: 85, cost: 78 },
  { supplier: 'Supplier E', quality: 88, delivery: 92, cost: 85 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Export</Button>
          <Button variant="outline">Filter</Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Spend Analysis</CardTitle>
            <CardDescription>Monthly spend breakdown for 2025</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={spendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis 
                    tickFormatter={(value) => `$${value/1000}K`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Spend']}
                    labelFormatter={(label) => `${label} 2025`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    name="Spend"
                    stroke="#0284c7"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>Spend by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage of Spend']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Supplier Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators across top suppliers</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="supplier" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quality" name="Quality Score" fill="#0284c7" />
                  <Bar dataKey="delivery" name="On-time Delivery" fill="#0ea5e9" />
                  <Bar dataKey="cost" name="Cost Efficiency" fill="#7dd3fc" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
