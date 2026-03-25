import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { cn } from '@/lib/utils';

interface MathBlockProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ math, block = true, className }) => {
  return (
    <div className={cn("my-4 font-serif text-burgundy", className)}>
      {block ? <BlockMath math={math} /> : <InlineMath math={math} />}
    </div>
  );
};
