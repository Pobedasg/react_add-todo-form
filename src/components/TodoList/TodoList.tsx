import { Todo } from '../../types/todo';
import { TodoWithUser } from '../../types/todoWithUser';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  const isTodoWithUser = (todo: Todo): todo is TodoWithUser => {
    return todo.user !== undefined;
  };

  const todosWithUser = todos.filter(isTodoWithUser);

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
