import { HiOutlineInformationCircle } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";

export function CustomTooltip({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Popover open={hovered} onOpenChange={setHovered}>
      <PopoverTrigger
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <HiOutlineInformationCircle className="opacity-40" />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="text-xs bg-primary p-1 text-primary-foreground font-medium w-auto px-4"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
