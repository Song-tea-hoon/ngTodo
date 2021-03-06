import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { TodoVo } from './domain/todo.vo';

@Injectable()
export class UserService {

  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  addTodo(params: TodoVo){
    console.log(params);
    return this.http.post(this.SERVER + '/api/todo', JSON.stringify(params), {headers: this.headers}).toPromise();
  }

  getTodoList(){
    return this.http.get(this.SERVER + '/api/todo').toPromise();
  }

  modifyTodo(params: TodoVo){
    return this.http.put(this.SERVER + '/api/todo', params, {headers: this.headers}).toPromise();
  }

  deleteTodo(todo_id: number){
    return this.http.delete(this.SERVER + `/api/todo?todo_id=${todo_id}`).toPromise();
  }


}