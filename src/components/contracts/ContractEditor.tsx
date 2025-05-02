
import React, { useRef, useEffect } from 'react';

interface ContractEditorProps {
  content: string;
  onChange: (content: string) => void;
  readOnly?: boolean;
}

const ContractEditor: React.FC<ContractEditorProps> = ({ 
  content, 
  onChange, 
  readOnly = false 
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, [content, readOnly]);

  // Handle content editing
  const handleInput = () => {
    if (editorRef.current && !readOnly) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Simple highlighting feature
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (readOnly) return;
    
    // Cmd/Ctrl+B for bold
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      document.execCommand('bold', false);
    }
    
    // Cmd/Ctrl+I for italic
    if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      document.execCommand('italic', false);
    }
    
    // Cmd/Ctrl+U for underline
    if (e.key === 'u' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      document.execCommand('underline', false);
    }
  };

  return (
    <div className="contract-editor-container">
      <div
        ref={editorRef}
        className={`contract-editor min-h-[600px] p-4 border rounded-md ${
          readOnly ? 'bg-gray-50' : 'bg-white'
        }`}
        contentEditable={!readOnly}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
        style={{
          fontFamily: 'Times New Roman, serif',
          fontSize: '12pt',
          lineHeight: '1.6',
        }}
      />
      {!readOnly && (
        <div className="text-xs text-muted-foreground mt-2">
          Tip: Use Ctrl+B for bold, Ctrl+I for italic, Ctrl+U for underline
        </div>
      )}
    </div>
  );
};

export default ContractEditor;
