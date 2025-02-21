'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
import { cn } from 'src/shared/utils/className';

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    className={cn('bg-secondary relative h-4 w-full overflow-hidden rounded-full', className)}
    ref={ref}
    {...props}>
    <ProgressPrimitive.Indicator
      className='size-full flex-1 bg-black transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress as AppProgress };
