import DarkModeToggler from '@/components/dark-mode-toggler';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DarkModeToggler />
    </main>
  );
}
