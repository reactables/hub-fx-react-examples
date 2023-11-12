import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UpdateTodoPayload } from '@hub-fx/examples';

export class TodoService {
  static updateTodo(payload: UpdateTodoPayload): Observable<UpdateTodoPayload> {
    return of(payload).pipe(delay(2000));
  }
}
