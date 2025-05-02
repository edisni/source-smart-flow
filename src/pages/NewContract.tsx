
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContractEditor from '@/components/contracts/ContractEditor';
import ContractVersionHistory from '@/components/contracts/ContractVersionHistory';
import ContractAISuggestions from '@/components/contracts/ContractAISuggestions';
import ContractComments from '@/components/contracts/ContractComments';
import { directSupplyAgreementTemplate } from '@/components/contracts/contract-templates';
import { Badge } from '@/components/ui/badge';
import { Save, Eye, FileCheck, Users } from 'lucide-react';

const NewContract: React.FC = () => {
  const { user } = useAuth();
  const [contractText, setContractText] = useState(directSupplyAgreementTemplate);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [activeUsers, setActiveUsers] = useState([
    { id: '1', name: 'You', color: '#4f46e5' },
    { id: '2', name: 'Jane Smith', color: '#10b981' },
  ]);
  
  // This would typically connect to a real-time database
  useEffect(() => {
    // Simulate auto-saving
    const interval = setInterval(() => {
      console.log('Auto-saving contract draft...');
      // In a real app, we would save to database here
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [contractText]);
  
  const handleSaveDraft = () => {
    // In a real app, this would save to a database
    toast.success('Contract draft saved successfully');
  };
  
  const handleFinalize = () => {
    // In a real app, this would mark the contract as finalized
    toast.success('Contract finalized successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Direct Supply Agreement</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">Draft</Badge>
            <span className="text-sm text-muted-foreground">
              Last edited {new Date().toLocaleTimeString()} by {user?.email || 'you'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {activeUsers.map(user => (
              <div 
                key={user.id}
                className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-medium"
                style={{ backgroundColor: user.color }}
                title={user.name}
              >
                {user.name.charAt(0)}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setIsPreviewMode(!isPreviewMode)}>
              <Eye className="mr-2 h-4 w-4" />
              {isPreviewMode ? 'Edit' : 'Preview'}
            </Button>
            <Button variant="outline" onClick={handleSaveDraft}>
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button onClick={handleFinalize}>
              <FileCheck className="mr-2 h-4 w-4" />
              Finalize
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle>Contract Document</CardTitle>
              <CardDescription>
                {isPreviewMode ? 'Previewing final document' : 'Edit your contract document'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContractEditor 
                content={contractText} 
                onChange={setContractText}
                readOnly={isPreviewMode}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-1">
          <Tabs defaultValue="suggestions">
            <TabsList className="w-full">
              <TabsTrigger value="suggestions" className="flex-1">AI Suggestions</TabsTrigger>
              <TabsTrigger value="comments" className="flex-1">Comments</TabsTrigger>
              <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="suggestions" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <ContractAISuggestions contractText={contractText} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="comments" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <ContractComments />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <ContractVersionHistory />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NewContract;
