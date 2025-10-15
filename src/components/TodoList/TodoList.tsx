import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user?: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  const todosWithUser = todos.filter(todo => todo.user);

  if (!todosWithUser.length) {
    return null;
  }

  return (
    <section className="TodoList">
      {todosWithUser.map(todo => (
        <TodoInfo key={todo.id} todo={todo as Required<Todo>} />
      ))}
    </section>
  );
};
