
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <Button>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
          <TabsTrigger value="team">Team Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Update your company details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormLabel>Company Name</FormLabel>
                    <Input placeholder="Enter company name" defaultValue="Acme Corporation" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Industry</FormLabel>
                    <Input placeholder="Enter industry" defaultValue="Manufacturing" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Address</FormLabel>
                    <Input placeholder="Enter address" defaultValue="123 Business Ave" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>City</FormLabel>
                    <Input placeholder="Enter city" defaultValue="Chicago" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>State/Province</FormLabel>
                    <Input placeholder="Enter state" defaultValue="IL" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Postal Code</FormLabel>
                    <Input placeholder="Enter postal code" defaultValue="60601" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Configure system-wide preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">AI-Powered Recommendations</div>
                    <div className="text-sm text-muted-foreground">
                      Enable AI to provide supplier and contract recommendations
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Automated Risk Assessment</div>
                    <div className="text-sm text-muted-foreground">
                      Use AI to evaluate supplier risks automatically
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Contract Auto-Renewal Alerts</div>
                    <div className="text-sm text-muted-foreground">
                      Get notified before contracts auto-renew
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">In-App Notifications</div>
                    <div className="text-sm text-muted-foreground">
                      Receive notifications within the application
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">RFQ Updates</div>
                    <div className="text-sm text-muted-foreground">
                      Notify when suppliers respond to RFQs
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>API & Integrations</CardTitle>
              <CardDescription>
                Manage API keys and external system integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <FormLabel>API Key</FormLabel>
                  <div className="flex gap-2">
                    <Input 
                      type="password" 
                      value="••••••••••••••••••••••••" 
                      readOnly 
                      className="font-mono"
                    />
                    <Button variant="outline">Regenerate</Button>
                    <Button variant="outline">Copy</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your API key provides access to your data. Keep it secure.
                  </p>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Available Integrations</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border border-muted">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">SAP Integration</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          Connect with your SAP ERP system
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button variant="outline" className="w-full">Connect</Button>
                      </div>
                    </Card>
                    
                    <Card className="border border-muted">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">DocuSign</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          Enable electronic signatures
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button variant="outline" className="w-full">Connect</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="mt-4">
          <Card>
            <CardHeader className="flex justify-between items-start">
              <div>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Manage team members and their permissions
                </CardDescription>
              </div>
              <Button>Invite User</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>john.doe@company.com</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>jane.smith@company.com</TableCell>
                        <TableCell>Procurement Manager</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mike Johnson</TableCell>
                        <TableCell>mike.j@company.com</TableCell>
                        <TableCell>Viewer</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper component for the Table in Team Management
const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full caption-bottom text-sm">{children}</table>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="border-b">{children}</thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b transition-colors hover:bg-muted/50">{children}</tr>
);

const TableHead = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <th className={`h-12 px-4 text-left align-middle font-medium ${className || ''}`}>{children}</th>
);

const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <td className={`p-4 align-middle ${className || ''}`}>{children}</td>
);

export default Settings;
