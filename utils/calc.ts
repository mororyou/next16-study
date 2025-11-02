import { User } from '@/types/user';

export const calcAge = (
  user: User,
  options: { signal: AbortSignal | null },
) => {
  const { signal } = options;
  const today = new Date();
  const birthDate = new Date(user.birthday);
  const age = today.getFullYear() - birthDate.getFullYear();
  if (signal?.aborted) {
    throw new Error('Calculation aborted');
  }
  return age;
};
