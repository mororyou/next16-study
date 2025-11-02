'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function UseEffectEventBefor() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffectが実行されました');
    const interval = setInterval(() => {
      toast.success(`現在のカウント数は ${count} です`);
    }, 10_000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Card className="bg-white dark:bg-black p-8">
      <h2 className="text-2xl font-bold font-mono border-b border-gray-200 dark:border-gray-800 pb-2">
        従来
      </h2>
      <p>カウント数: {count}</p>
      <Button onClick={() => setCount(count + 1)}>＋ボタン</Button>
    </Card>
  );
}
