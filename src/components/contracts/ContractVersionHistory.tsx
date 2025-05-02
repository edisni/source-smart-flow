
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock version history data
const versionHistory = [
  {
    id: 'v5',
    timestamp: new Date(2025, 4, 2, 14, 30),
    user: 'John Doe',
    changes: 'Updated payment terms in Section 4.2'
  },
  {
    id: 'v4',
    timestamp: new Date(2025, 4, 2, 13, 15),
    user: 'Jane Smith',
    changes: 'Added delivery schedule in Appendix B'
  },
  {
    id: 'v3',
    timestamp: new Date(2025, 4, 2, 11, 45),
    user: 'John Doe',
    changes: 'Revised warranty clause in Section 7'
  },
  {
    id: 'v2',
    timestamp: new Date(2025, 4, 1, 16, 20),
    user: 'Jane Smith',
    changes: 'Initial draft with standard terms'
  },
  {
    id: 'v1',
    timestamp: new Date(2025, 4, 1, 15, 0),
    user: 'John Doe',
    changes: 'Created contract from template'
  }
];

const ContractVersionHistory: React.FC = () => {
  return (
    <div className="version-history">
      <h3 className="text-lg font-medium mb-4">Version History</h3>
      
      <ScrollArea className="h-[500px]">
        <div className="space-y-4">
          {versionHistory.map((version) => (
            <div 
              key={version.id}
              className="p-3 border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="font-medium">{version.id}</div>
                <div className="text-sm text-muted-foreground">
                  {version.timestamp.toLocaleString()}
                </div>
              </div>
              
              <div className="text-sm mt-1">{version.changes}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Edited by {version.user}
              </div>
              
              <div className="mt-2 flex space-x-2">
                <button className="text-xs text-primary hover:underline">
                  View
                </button>
                <button className="text-xs text-primary hover:underline">
                  Restore
                </button>
                <button className="text-xs text-primary hover:underline">
                  Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContractVersionHistory;
