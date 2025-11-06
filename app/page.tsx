import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="outline">
        <Link href="/react/19.2/activity">Activity</Link>
      </Button>
      <Button variant="outline">
        <Link href="/react/19.2/use-effect-event">useEffectEvent</Link>
      </Button>
      <Button variant="outline">
        <Link href="/react/19.2/cache">cache</Link>
      </Button>
      <Button variant="outline">
        <Link href="/react/19.2/ppr">PPR</Link>
      </Button>
    </div>
  );
}
