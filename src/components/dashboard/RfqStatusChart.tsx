
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Sample data for RFQ status distribution
const rfqStatusData = [
  { name: 'Draft', value: 12, color: '#e2e8f0' },
  { name: 'Active', value: 24, color: '#22c55e' },
  { name: 'Evaluating', value: 18, color: '#f59e0b' },
  { name: 'Completed', value: 32, color: '#3282B8' },
];

export function RfqStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RFQ Status</CardTitle>
        <CardDescription>Current distribution of RFQs by status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={rfqStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {rfqStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} RFQs`, name]}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconSize={10} 
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
