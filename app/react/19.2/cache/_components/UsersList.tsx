import { Card } from '@/components/ui/card';
import type { User, Users } from '@/types/user';
import { calcAge } from '@/utils/calc';
import { getUsers } from '@/utils/fetcher';
import { cache, cacheSignal } from 'react';

export const cacheUserAge = cache(async (user: User) => {
  console.log('cacheUserAge', user);
  return calcAge(user, { signal: cacheSignal() });
});

export default async function UsersList() {
  const users: Users = await getUsers();

  return (
    <Card className="bg-white dark:bg-black p-8">
      <h2 className="text-2xl font-bold font-mono border-b border-gray-200 dark:border-gray-800 pb-2">
        19.2以降
      </h2>

      <Profile user={users[0]} />

      <Team users={users} />
    </Card>
  );
}

async function Profile({ user }: { user: User }) {
  return (
    <div key={user.id}>
      {user.name} - Age: ({cacheUserAge(user)}歳)
    </div>
  );
}

async function Team({ users }: { users: Users }) {
  return (
    <Card className="bg-white dark:bg-black p-8">
      <h2 className="text-2xl font-bold font-mono border-b border-gray-200 dark:border-gray-800 pb-2">
        Team
      </h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - Age: ({cacheUserAge(user)}歳)
        </div>
      ))}
    </Card>
  );
}
