import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="outline">
        <Link>
          <Link href="/react/19.2/activity">Activity</Link>
        </Link>
      </Button>
      <Button variant="outline">
        <Link>
          <Link href="/react/19.2/use-effect-event">useEffectEvent</Link>
        </Link>
      </Button>
      <Button variant="outline">
        <Link>
          <Link href="/react/19.2/cache">cache</Link>
        </Link>
      </Button>
      <Button variant="outline">
        <Link>
          <Link href="/react/19.2/ppr">PPR</Link>
        </Link>
      </Button>
    </div>
  );
}
