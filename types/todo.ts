import { User } from './user';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: User['id'];
};

export type Todos = Todo[];
