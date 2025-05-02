
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Calendar, Filter } from 'lucide-react';

// Sample data - would come from Supabase in a real application
const spendData = [
  { name: 'Q1', target: 5, actual: 7, contractValue: 850000 },
  { name: 'Q2', target: 5, actual: 4, contractValue: 720000 },
  { name: 'Q3', target: 5, actual: 6, contractValue: 930000 },
  { name: 'Q4', target: 5, actual: 3, contractValue: 680000 },
];

const contractTypes = ['All', 'Service', 'Supply', 'Maintenance', 'Support'];
const suppliers = ['All', 'Ace Materials Inc.', 'MetalCorp Industries', 'FastTech Electronics', 'PackRight Inc.', 'PolymerTech'];
const timeFrames = ['Monthly', 'Quarterly', 'Annually'];

export function ContractSpendDashboard() {
  const [contractType, setContractType] = useState('All');
  const [supplier, setSupplier] = useState('All');
  const [timeFrame, setTimeFrame] = useState('Quarterly');

  // Calculate aggregated metrics
  const totalContractValue = spendData.reduce((total, quarter) => total + quarter.contractValue, 0);
  const spentAmount = Math.round(totalContractValue * 0.85); // Simulating 85% of contract value spent
  const remainingBudget = totalContractValue - spentAmount;
  
  // Calculate overall average under-spend percentage
  const targetUnderSpend = 5; // 5% target under-spend
  const actualUnderSpend = Math.round((totalContractValue - spentAmount) / totalContractValue * 100);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contract Spend Overview</CardTitle>
          <CardDescription>
            Monitor target vs. actual under-spend across contracts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-1 flex-1">
                <label className="text-sm font-medium">Contract Type</label>
                <Select value={contractType} onValueChange={setContractType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contractTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1 flex-1">
                <label className="text-sm font-medium">Supplier</label>
                <Select value={supplier} onValueChange={setSupplier}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    {suppliers.map(sup => (
                      <SelectItem key={sup} value={sup}>{sup}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1 flex-1">
                <label className="text-sm font-medium">Time Period</label>
                <Select value={timeFrame} onValueChange={setTimeFrame}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeFrames.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">${(totalContractValue/1000000).toFixed(2)}M</div>
                  <p className="text-sm text-muted-foreground">Total Contract Value</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">${(spentAmount/1000000).toFixed(2)}M</div>
                  <p className="text-sm text-muted-foreground">Spent Amount</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">${(remainingBudget/1000000).toFixed(2)}M</div>
                  <p className="text-sm text-muted-foreground">Remaining Budget</p>
                </CardContent>
              </Card>
            </div>

            {/* Under-spend Progress */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Target vs. Actual Under-spend</h3>
                  <span className="text-sm text-muted-foreground">{actualUnderSpend}% of {targetUnderSpend}% Target</span>
                </div>
                <Progress 
                  value={actualUnderSpend / targetUnderSpend * 100} 
                  className="h-3 mt-2"
                />
              </div>
              <div className="text-sm grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span>Target Under-spend: {targetUnderSpend}%</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Actual Under-spend: {actualUnderSpend}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="pt-4">
              <h3 className="font-semibold mb-4">Under-spend by {timeFrame} Period</h3>
              <div className="h-80">
                <ChartContainer 
                  config={{
                    target: { color: "hsl(var(--primary))" },
                    actual: { color: "hsl(var(--primary)/0.5)" },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={spendData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 25,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis 
                        label={{ 
                          value: 'Under-spend %', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle' }
                        }} 
                      />
                      <ChartTooltip 
                        content={
                          <ChartTooltipContent 
                            formatter={(value, name) => [`${value}%`, name]}
                          />
                        }
                      />
                      <Legend />
                      <Bar dataKey="target" name="Target Under-spend %" fill="hsl(var(--primary))" />
                      <Bar dataKey="actual" name="Actual Under-spend %" fill="hsl(var(--primary)/0.5)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            
            {/* View Details Button */}
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Contract Details 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
