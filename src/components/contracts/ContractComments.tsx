
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

// Mock comments data
const initialComments = [
  {
    id: 'c4',
    user: 'Jane Smith',
    userColor: '#10b981',
    timestamp: new Date(2025, 4, 2, 14, 20),
    text: 'I suggest we increase the penalty for late deliveries to 2% per day.',
    section: 'Section 5.3 - Penalties',
    resolved: false
  },
  {
    id: 'c3',
    user: 'John Doe',
    userColor: '#4f46e5',
    timestamp: new Date(2025, 4, 2, 13, 45),
    text: 'Can we specify exact delivery dates rather than "approximately 30 days"?',
    section: 'Section 3.1 - Delivery',
    resolved: false
  },
  {
    id: 'c2',
    user: 'Jane Smith',
    userColor: '#10b981',
    timestamp: new Date(2025, 4, 1, 16, 30),
    text: 'The payment terms seem standard. Approved.',
    section: 'Section 4 - Payment',
    resolved: true
  },
  {
    id: 'c1',
    user: 'John Doe',
    userColor: '#4f46e5',
    timestamp: new Date(2025, 4, 1, 15, 20),
    text: 'We should clarify the inspection criteria in more detail.',
    section: 'Section 6.2 - Quality Inspection',
    resolved: true
  }
];

const ContractComments: React.FC = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [showResolved, setShowResolved] = useState(false);
  
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: `c${Date.now()}`,
      user: user?.email || 'You',
      userColor: '#4f46e5',
      timestamp: new Date(),
      text: newComment,
      section: 'Current selection',
      resolved: false
    };
    
    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };
  
  const handleResolve = (id: string) => {
    setComments(comments.map(comment => 
      comment.id === id ? {...comment, resolved: true} : comment
    ));
  };
  
  const filteredComments = comments.filter(comment => 
    showResolved ? true : !comment.resolved
  );
  
  return (
    <div className="comments">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Comments & Review</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowResolved(!showResolved)}
        >
          {showResolved ? 'Hide Resolved' : 'Show All'}
        </Button>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleAddComment();
            }
          }}
        />
        <Button onClick={handleAddComment}>Add</Button>
      </div>
      
      <ScrollArea className="h-[420px]">
        <div className="space-y-4">
          {filteredComments.map((comment) => (
            <div 
              key={comment.id}
              className={`p-3 border rounded-md ${
                comment.resolved ? 'bg-muted/50' : 'bg-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: comment.userColor }}
                >
                  {comment.user.charAt(0)}
                </div>
                <div className="font-medium">{comment.user}</div>
                <div className="text-xs text-muted-foreground">
                  {comment.timestamp.toLocaleString()}
                </div>
              </div>
              
              <p className="text-sm my-2">{comment.text}</p>
              
              <div className="flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                  {comment.section}
                </div>
                
                {!comment.resolved && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleResolve(comment.id)}
                  >
                    Resolve
                  </Button>
                )}
                
                {comment.resolved && (
                  <span className="text-xs text-green-600">Resolved</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContractComments;
