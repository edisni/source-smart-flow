
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { StatCard } from '@/components/dashboard/StatCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Info } from 'lucide-react';
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer } from 'recharts';

const PurchasingKPI: React.FC = () => {
  const [year, setYear] = useState('2025');
  const [quarter, setQuarter] = useState('Q1');
  const [businessUnit, setBusinessUnit] = useState('All');
  const [category, setCategory] = useState('All');

  // Color palette based on values
  const getColorByValue = (value: number, target: number) => {
    const percentage = (value / target) * 100;
    if (percentage >= 95) return "bg-green-100 text-green-800";
    if (percentage >= 80) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  // Progress bar color based on values
  const getProgressColor = (value: number, target: number) => {
    const percentage = (value / target) * 100;
    if (percentage >= 95) return "bg-green-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Procurement BU Scorecard</h1>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium">Year</label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Reporting Quarter</label>
          <Select value={quarter} onValueChange={setQuarter}>
            <SelectTrigger>
              <SelectValue placeholder="Select quarter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Q1">Q1</SelectItem>
              <SelectItem value="Q2">Q2</SelectItem>
              <SelectItem value="Q3">Q3</SelectItem>
              <SelectItem value="Q4">Q4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Business Unit</label>
          <Select value={businessUnit} onValueChange={setBusinessUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Select business unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="North America">North America</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Direct Materials">Direct Materials</SelectItem>
              <SelectItem value="Indirect Materials">Indirect Materials</SelectItem>
              <SelectItem value="Services">Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* 3-in-3 Forecast vs. AOP Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">3-in-3 Forecast vs. AOP</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-4 mt-4">
              <div className="bg-green-100 p-3 rounded-md">
                <div className="text-sm font-medium">Direct Finance</div>
                <div className="text-xs text-gray-500">3 + 9 Forecast (FY)</div>
                <div className="text-3xl font-bold mt-2">$178.0M</div>
                <div className="text-xs text-gray-700">Target: $107.9M (+64.94%)</div>
              </div>

              <div className="bg-yellow-100 p-3 rounded-md">
                <div className="text-sm font-medium">Indirect Finance</div>
                <div className="text-xs text-gray-500">3 + 9 Forecast (FY)</div>
                <div className="text-3xl font-bold mt-2">$72.4M</div>
                <div className="text-xs text-gray-700">Target: $75.0M (-3.52%)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VPI Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">VPI</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Target Cost Attainment</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">63.4%</span>
                  </div>
                  <div 
                    className="h-full bg-red-400 rounded-full" 
                    style={{ width: '63.4%' }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Adherence To Sourcing Calendar</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">97.6%</span>
                  </div>
                  <div 
                    className="h-full bg-green-400 rounded-full" 
                    style={{ width: '97.6%' }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contract Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Contract</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Direct Spend Under Contract (DSAs)</span>
                  <span className="text-sm font-medium">78.9%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">83.8%</span>
                  </div>
                  <div 
                    className="h-full bg-green-400 rounded-full" 
                    style={{ width: '83.8%' }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <div className="text-sm font-medium text-center">Procurement ROI</div>
                <div className="flex justify-between">
                  <span className="text-xs">Return on Investment</span>
                  <span className="text-xs font-medium">600.0%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">567.0%</span>
                  </div>
                  <div 
                    className="h-full bg-yellow-400 rounded-full" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>400%</span>
                  <span>1100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* People Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">People</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Employee Satisfaction Rate</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">72.0%</span>
                  </div>
                  <div 
                    className="h-full bg-yellow-400 rounded-full" 
                    style={{ width: '72%' }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <div className="text-sm font-medium">Skill Level Proficiency Attainment</div>
                <div className="h-24 flex justify-center items-center">
                  <p className="text-2xl text-gray-400 italic">"TBD"</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PSBU Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">PSBU</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Progress against Bankable Plan</span>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">128.1%</span>
                  </div>
                  <div 
                    className="h-full bg-green-400 rounded-full" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <div className="flex justify-between">
                  <span className="text-sm">Capacity assurance Actions Complete</span>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-xs font-semibold z-10">100.0%</span>
                  </div>
                  <div 
                    className="h-full bg-green-400 rounded-full" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Supply Continuity Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Supply Continuity</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-red-100 p-3 rounded-md">
                <div className="text-sm font-medium">Impact Level 4/5 Issues</div>
                <div className="text-xs text-gray-500">Total Class 4/5 Issues</div>
                <div className="text-3xl font-bold mt-2">29</div>
                <div className="text-xs text-gray-700">Target: 5 (+480%)</div>
              </div>

              <div className="bg-green-100 p-3 rounded-md">
                <div className="text-sm font-medium">Arrears</div>
                <div className="text-xs text-gray-500">% of Annual Spend</div>
                <div className="text-3xl font-bold mt-2">4.4%</div>
                <div className="text-xs text-gray-700">Target: 5.0% (-11.95%)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue at Risk Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Revenue at Risk</h3>
              <Info className="w-5 h-5 text-gray-500" />
            </div>

            <div className="p-3 rounded-md mt-4 flex flex-col justify-center items-center h-40">
              <div className="text-3xl font-bold">$15.9bn</div>
              <div className="text-sm text-gray-500 mt-2">Downstream Sales</div>
            </div>
          </CardContent>
        </Card>

        {/* Category Strategy Section */}
        <Card className="bg-gray-100 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Category Strategy</h3>
            </div>

            <div className="p-3 rounded-md mt-4">
              <div className="text-sm font-medium">BU Category Strategy Actions on time, %</div>
              <div className="h-40 flex justify-center items-center">
                <p className="text-2xl text-gray-400 italic">"Data logging in Progress"</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PurchasingKPI;
