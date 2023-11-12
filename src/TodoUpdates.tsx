import { TodoStatus, UpdateTodoPayload, TodoUpdates as TodoUpdates$ } from '@hub-fx/examples';
import { useReactable } from './Hooks/useReactable';

// See for implementation
// https://github.com/hub-fx/hub-fx/tree/main/packages/examples/src/TodoUpdates

const mockApi = (payload: UpdateTodoPayload) =>
  new Promise<UpdateTodoPayload>((resolve) => {
    setTimeout(() => resolve(payload), 2000);
  });

const TodoUpdates = () => {
  const {
    state,
    actions: { sendTodoStatusUpdate },
  } = useReactable(TodoUpdates$(mockApi));

  return (
    <>
      <h1>Todos</h1>
      <div className="todos">
        {state?.todos.map((todo) => (
          <div key={todo.id} className="todo">
            {todo.description}
            <div className="todo__control">
              {todo.updating && <div className="todo__updating">Updating...</div>}
              <select
                value={todo.status}
                onChange={(event) =>
                  sendTodoStatusUpdate({
                    todoId: todo.id,
                    status: event.currentTarget.value as TodoStatus,
                  })
                }
              >
                <option value="in progress">In Progress</option>
                <option value="incomplete">Incomplete</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoUpdates;
