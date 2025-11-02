'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect, useEffectEvent, useState } from 'react';
import { toast } from 'sonner';

const useKeyDown = (
  targetKey: string,
  handler: () => void,
  isEnabled = true,
) => {
  // useEffectEventを使用すると、依存関係を追加する必要がない
  const keydownListener = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === targetKey) {
      handler();
    }
  });

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    document.addEventListener('keydown', keydownListener);
    return () => {
      document.removeEventListener('keydown', keydownListener);
    };
  }, [isEnabled]); // 依存関係を追加する必要がない
};

export default function UseEffectEventAfter() {
  const [key, setKey] = useState('a');

  useKeyDown(key, () => {
    toast.success(`${key}ボタンが押されました`);
  });

  const onClick = (key: string) => {
    setKey(key);
    toast.message(`${key}ボタンが設定されました`);
  };

  return (
    <Card className="bg-white dark:bg-black p-8">
      <h2 className="text-2xl font-bold font-mono border-b border-gray-200 dark:border-gray-800 pb-2">
        19.2以降
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4 font-bold font-mono">
        key: {key}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={() => onClick('c')}>cボタン</Button>
        <Button onClick={() => onClick('d')}>dボタン</Button>
      </div>
    </Card>
  );
}
