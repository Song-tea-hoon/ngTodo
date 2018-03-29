import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodoVo } from '../domain/todo.vo';
import { ResultVo } from '../domain/result.vo';

import { style, state, trigger, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations:[
    trigger('flyInOut', [
      state('in', style({opacity:1, transform:'translate(0,0)'})),
      state('active', style({opacity: 1, transform:'scale(1, 1.3)'})),
      transition('void => in',[
        style({opacity:0, transform: 'translate(-100%, 0)'}), 
        animate(300)
      ]),
      transition('in => void', [
        animate(0, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset:0}),
          style({opacity: 1, transform: 'translateX(-50px)', offset:0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset:1.0})
        ]))
      ]),
      //선택시 애니메이션
      transition('void => active', [
        animate(600, keyframes([
          style({transform: 'scale(1,1)', offset: 0}),
          style({transform: 'scale(1,1)', offset: 0.5}),
          style({transform: 'scale(1,1.3)', offset: 1.0})
        ]))
      ])
    ]),
  ]
})

export class AngularComponent implements OnInit {

  todoList = new Array<TodoVo>();
  tempTodoList: Map<number, TodoVo> = new Map<number, TodoVo>();
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

  restore(todoVo:TodoVo){
    todoVo.isEdited = false;
    let tempTodo = this.tempTodoList.get(todoVo.todo_id);
    todoVo.isFinished = tempTodo.isFinished;
    todoVo.todo = tempTodo.todo;
  }

  save(todoVo: TodoVo){
    todoVo.isEdited = true;

    let tempTodo = new TodoVo();
    tempTodo.isFinished = todoVo.isFinished;
    tempTodo.todo = todoVo.todo;
    this.tempTodoList.set(todoVo.todo_id, tempTodo);
  }

  modify(item: TodoVo){
    this.userService.modifyTodo(item)
      .then((data: TodoVo) => {
        item.isFinished = data.isFinished;
        item.todo = data.todo;
        item.isEdited = false;
      });
  }

  remove(todoVo: TodoVo){
    const result = confirm(todoVo.todo + '을(를) 삭제하시겠습니까?');
    if(result){
      this.userService.deleteTodo(todoVo.todo_id)
        .then((res: ResultVo) => {
          if( res.result === 0 ){
            this.todoList.forEach((item, index)=>{
              if(item.todo_id === todoVo.todo_id){
                this.todoList.splice(index, 1);
              }
            })
          }
        });
    }
  }
}
