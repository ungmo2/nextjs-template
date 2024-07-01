'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { RxSun as SunIcon, RxMoon as MoonIcon } from 'react-icons/rx';

/**
 * shadcn/ui: Dark mode
 * @see https://ui.shadcn.com/docs/dark-mode/next#add-a-mode-toggle
 */
export default function DarkModeToggler() {
  const { setTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon">
      <SunIcon
        className="h-4 w-4 scale-0 transition-all dark:scale-100"
        onClick={() => {
          setTheme('light');
        }}
      />
      <MoonIcon
        className="absolute h-4 w-4 scale-100 transition-all dark:scale-0"
        onClick={() => {
          setTheme('dark');
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
