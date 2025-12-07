import * as React from 'react';
import { cn } from '@/lib/utils';

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'inline-flex items-center rounded-lg border border-sky-200 bg-white/95 backdrop-blur-md shadow-lg',
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
    className={cn('h-8 w-px bg-sky-200', className)}
    {...props}
  />
));
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

export { ButtonGroup, ButtonGroupSeparator };
