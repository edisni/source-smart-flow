
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle, DollarSign, ShieldAlert, BarChart } from 'lucide-react';

interface ContractAISuggestionsProps {
  contractText: string;
}

// Mock AI suggestions
const mockSuggestions = [
  {
    id: 's1',
    type: 'cost-saving',
    title: 'Adjust payment terms',
    description: 'Current NET-30 terms could be extended to NET-45 based on industry standards, potentially improving cash flow.',
    impact: 'Medium',
    section: 'Section 4.2 - Payment Terms',
    icon: DollarSign
  },
  {
    id: 's2',
    type: 'risk',
    title: 'Ambiguous liability clause',
    description: 'The liability limitation in Section 8.3 could be interpreted in multiple ways. Consider clarifying with specific monetary caps.',
    impact: 'High',
    section: 'Section 8.3 - Limitation of Liability',
    icon: ShieldAlert
  },
  {
    id: 's3',
    type: 'performance',
    title: 'Add quality metrics',
    description: 'Consider adding specific quality KPIs such as defect rate <1% and on-time delivery >95% with associated penalties.',
    impact: 'Medium',
    section: 'Section 6 - Quality Requirements',
    icon: BarChart
  },
  {
    id: 's4',
    type: 'risk',
    title: 'Missing compliance clause',
    description: 'Add GDPR compliance requirements if applicable to ensure data protection regulations are followed.',
    impact: 'High',
    section: 'Section 10 - Compliance',
    icon: AlertCircle
  }
];

const ContractAISuggestions: React.FC<ContractAISuggestionsProps> = ({ contractText }) => {
  const [acceptedSuggestions, setAcceptedSuggestions] = useState<string[]>([]);
  const [rejectedSuggestions, setRejectedSuggestions] = useState<string[]>([]);
  
  const handleAccept = (id: string) => {
    setAcceptedSuggestions([...acceptedSuggestions, id]);
  };
  
  const handleReject = (id: string) => {
    setRejectedSuggestions([...rejectedSuggestions, id]);
  };
  
  const getSuggestionStatus = (id: string) => {
    if (acceptedSuggestions.includes(id)) return 'accepted';
    if (rejectedSuggestions.includes(id)) return 'rejected';
    return 'pending';
  };
  
  return (
    <div className="ai-suggestions">
      <h3 className="text-lg font-medium mb-4">AI-Generated Improvement Suggestions</h3>
      
      <ScrollArea className="h-[500px]">
        <div className="space-y-4">
          {mockSuggestions.map((suggestion) => {
            const status = getSuggestionStatus(suggestion.id);
            
            return (
              <div 
                key={suggestion.id}
                className={`p-4 border rounded-md ${
                  status === 'accepted' ? 'bg-green-50 border-green-200' : 
                  status === 'rejected' ? 'bg-muted border-muted' : 
                  'hover:bg-muted/50'
                } transition-colors`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${
                    suggestion.type === 'cost-saving' ? 'bg-blue-100 text-blue-700' :
                    suggestion.type === 'risk' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    <suggestion.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium">{suggestion.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{suggestion.description}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggestion.impact === 'High' ? 'bg-amber-100 text-amber-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {suggestion.impact} Impact
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {suggestion.section}
                      </span>
                    </div>
                    
                    {status === 'pending' && (
                      <div className="flex space-x-2 mt-3">
                        <Button 
                          size="sm" 
                          onClick={() => handleAccept(suggestion.id)}
                        >
                          Apply
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleReject(suggestion.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                    
                    {status === 'accepted' && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ Applied
                      </p>
                    )}
                    
                    {status === 'rejected' && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Suggestion rejected
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContractAISuggestions;
