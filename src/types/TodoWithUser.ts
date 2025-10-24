import { Todo } from './todo';
import { User } from './user';

export interface TodoWithUser extends Omit<Todo, 'user'> {
  user: User;
}
