import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { haptics } from "@/lib/haptics";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, onValueChange, ...props }, ref) => {
  const lastValueRef = React.useRef<number | null>(null);

  const handleValueChange = React.useCallback((value: number[]) => {
    // Trigger haptic feedback when value changes significantly
    if (lastValueRef.current !== null) {
      const currentValue = Math.round(value[0]);
      const lastValue = Math.round(lastValueRef.current);
      if (currentValue !== lastValue) {
        haptics.light();
      }
    }
    lastValueRef.current = value[0];
    onValueChange?.(value);
  }, [onValueChange]);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full select-none items-center", className)}
      onValueChange={handleValueChange}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-secondary cursor-pointer">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-7 w-7 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing shadow-md hover:scale-110 active:scale-105 transition-transform" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
