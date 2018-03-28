import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodoVo } from '../domain/todo.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  todoList = new Array<TodoVo>();

  newTodo = new TodoVo();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(){
    console.log('getTodoList');
    this.userService.getTodoList()
      .then((data: Array<TodoVo>) => {
        this.todoList = data;
      });
  }
  
  add_todo() {
    console.log('click');
    
    this.userService.addTodo(this.newTodo)
      .then((data: TodoVo) => {
        this.todoList.unshift(data);
      });

    this.newTodo = new TodoVo();
  }
}
