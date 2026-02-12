import type { FC } from 'hono/jsx';

import type { Todo } from '../types.js';
import { TodoList } from './TodoList.js';
import { Layout } from './Layout.js';

type TodoPageProps = {
  todos?: Todo[];
  error?: string;
};

export const TodoPage: FC<TodoPageProps> = ({ todos = [], error }) => {
  const finished = todos.filter(i => i.finished)
  const unfinished = todos.filter(i => !i.finished)

  const hasFinished = finished.length > 0;
  const isEmpty = todos.length === 0;

  return (
    <Layout title="TodoListinn">
      <section class="todo-list">

        {error ? <p class="error">{error}</p> : null}


        <form method="post" action="/add">
          <div class="input-group">
            <label for="title">Titill</label>
            <input id="title" type="text" name="title"/>
          </div>
          <button>bæta við</button>
        </form>

        {isEmpty ? (
          <p>Engin verkefni til</p>
        ) : (
          <>
            <TodoList title="Allur listinn" todos={todos} />
            <TodoList title="Bara kláruð verkefni" todos={finished} />
            <TodoList title="Bara ókláruð verkefni" todos={unfinished} />

            {hasFinished ? (
              <div class="buttons">
                <form method="post" action="/delete/finished">
                  <button type="submit" class="destructive">Eyða kláruðu</button>
                </form>   
              </div>
            ) : null}

            <p>Ég fékk {todos.length} verkefni.</p>
          </>
        )}
      </section>
    </Layout>
  );
};
