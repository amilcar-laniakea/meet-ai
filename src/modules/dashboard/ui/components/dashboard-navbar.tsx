'use client';

import { useEffect, useState } from 'react';
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

import { DashboardCommand } from './dashboard-command';

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex px-3 gap-x-2 items-center py-2 border-b bg-background justify-between fixed w-fill-available z-10">
        <div className="flex gap-x-2 items-center">
          <Button
            className="size-9 cursor-pointer"
            variant="outline"
            onClick={toggleSidebar}
          >
            {state === 'collapsed' || isMobile ? (
              <PanelLeftIcon className="size-4" />
            ) : (
              <PanelLeftCloseIcon className="size-4" />
            )}
          </Button>
          <Button
            className="h-9 w-[220px] justify-start font-normal text-muted-foreground hover:text-muted-foreground cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => setCommandOpen(open => !open)}
          >
            <SearchIcon />
            Search
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">&#8984;</span>K
            </kbd>
          </Button>
        </div>
        <Image
          src="/logo-primary.svg"
          alt="Meet.AI"
          width={36}
          height={36}
          className="w-[36px] h-[36px]"
        />
      </nav>
    </>
  );
};
