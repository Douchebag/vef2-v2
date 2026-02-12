import type { Todo } from '../types.js';

type Props = {
  todo: Todo;
};

export function TodoItem({ todo }: Props) {
  return (
    <li class={todo.finished ? 'todo finished' : 'todo'}>
      <form method="post" action={`/update/${todo.id}`} class="todo-update">
        <input name="title" type="text" value={todo.title} maxlength={255} />
        <label>
          <input name="finished" type="checkbox" checked={todo.finished} />
          Klárað
        </label>
        <button type="submit">Uppfæra</button>
      </form>

      <form method="post" action={`/delete/${todo.id}`}>
        <button type="submit" class="danger">Eyða</button>
      </form>
    </li>
  );
}