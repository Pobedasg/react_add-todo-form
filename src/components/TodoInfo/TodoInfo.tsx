import { UserInfo } from '../UserInfo/UserInfo';

interface TodoWithUser {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

interface Props {
  todo: TodoWithUser;
}

export const TodoInfo = ({ todo }: Props) => {
  const { id, title, completed, user } = todo;

  return (
    <article
      data-id={id}
      className={`TodoInfo${completed ? ' TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
