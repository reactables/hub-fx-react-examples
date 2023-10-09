import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UpdateTodoPayload } from './Models/Todos';

export class TodoService {
  constructor() {}

  static updateTodo(payload: UpdateTodoPayload): Observable<UpdateTodoPayload> {
    return of(payload).pipe(delay(2000));
  }
}
