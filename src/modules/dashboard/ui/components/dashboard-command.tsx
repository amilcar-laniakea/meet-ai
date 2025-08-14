import {
  CommandDialog,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import { CommandList } from 'cmdk';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="find a meeting or a agent" />
      <CommandList>
        <CommandItem>Meeting 1</CommandItem>
        <CommandItem>Meeting 2</CommandItem>
        <CommandItem>Meeting 3</CommandItem>
      </CommandList>
    </CommandDialog>
  );
};
