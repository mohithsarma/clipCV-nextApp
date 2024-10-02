'use client'

import React, { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

interface CopyableContentProps {
  content: string;
  label?: string;
}

const CopyableContent: React.FC<CopyableContentProps> = ({ content, label }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center mb-2">
      {label && <span className="font-medium w-1/4">{label}:</span>}
      <span className="w-3/4">{content}</span>
      <button
        onClick={copyToClipboard}
        className="ml-2 p-1 rounded-full hover:bg-gray-200"
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Clipboard size={16} />}
      </button>
    </div>
  );
};

export default CopyableContent;