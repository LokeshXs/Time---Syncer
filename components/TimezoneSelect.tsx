"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useContext } from "react";
import { TimezonesContext } from "@/context/TimezoneContext";

type Props = {
  timezones: string[];
  className: string;
};

export default function TimezoneSelect({ timezones, className }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { timezones:selectedTimezones,setTimezones } = useContext(TimezonesContext);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={` justify-between ${className}`}
        >
          {value
            ? timezones.find((timezone) => timezone.toLowerCase() === value)
            : "Select Timezone..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={` p-0 ${className}`}
        side="bottom"
        align="center"
      >
        <Command>
          <CommandInput placeholder="Select Timezone..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className={`h-[200px] overflow-auto ${className}`}>
            {timezones.map((timezone) => (
              <CommandItem
                key={timezone}
                value={timezone}
                onSelect={(currentValue) => {
                  // console.log(currentValue);
                  setValue(currentValue);
                  setTimezones((prev) => {

                    console.log(selectedTimezones);
                    console.log(selectedTimezones.includes(currentValue))
                    if(selectedTimezones.includes(currentValue)){
                      return prev;
                    }
                    

                    return [...prev, currentValue]
                  });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === timezone ? "opacity-100" : "opacity-0"
                  )}
                />
                {timezone}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
