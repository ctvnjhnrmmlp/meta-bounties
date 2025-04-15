'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

const chains = [
  {
    value: 'all',
    label: 'All Chains',
  },
  {
    value: 'aptos',
    label: 'Aptos',
  },
  {
    value: 'ethereum',
    label: 'Ethereum',
  },
  {
    value: 'solana',
    label: 'Solana',
  },
  {
    value: 'polygon',
    label: 'Polygon',
  },
];

export function ChainFilter() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('all');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[150px] justify-between'
        >
          {value
            ? chains.find((chain) => chain.value === value)?.label
            : 'Select chain...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search chain...' />
          <CommandList>
            <CommandEmpty>No chain found.</CommandEmpty>
            <CommandGroup>
              {chains.map((chain) => (
                <CommandItem
                  key={chain.value}
                  value={chain.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === chain.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {chain.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
