'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Activity, useState } from 'react';
import Home from './container/Home';
import Tasks from './container/Tasks';

export default function ActivityAfter() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks'>('home');

  return (
    <Card className="bg-white dark:bg-black p-8">
      <h2 className="text-2xl font-bold font-mono border-b border-gray-200 dark:border-gray-800 pb-2">
        19.2以降
      </h2>
      <div className="flex gap-4">
        <Button
          onClick={() => setActiveTab('home')}
          variant={activeTab === 'home' ? 'default' : 'outline'}
        >
          Home
        </Button>
        <Button
          onClick={() => setActiveTab('tasks')}
          variant={activeTab === 'tasks' ? 'default' : 'outline'}
        >
          Tasks
        </Button>
      </div>

      <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={activeTab === 'tasks' ? 'visible' : 'hidden'}>
        <Tasks />
      </Activity>
    </Card>
  );
}
