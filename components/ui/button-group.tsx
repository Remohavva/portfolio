import * as React from 'react';
import { cn } from '@/lib/utils';

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'inline-flex flex-col sm:flex-row items-stretch sm:items-center rounded-lg border border-purple-500/30 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-purple-500/20 overflow-hidden',
      className
    )}
    {...props}
  />
));
ButtonGroup.displayName = 'ButtonGroup';

const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-px sm:h-8 w-full sm:w-px bg-purple-500/30', className)}
    {...props}
  />
));
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

export { ButtonGroup, ButtonGroupSeparator };
