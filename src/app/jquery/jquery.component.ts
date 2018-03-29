import { Component, OnInit } from '@angular/core';

// this is es5
// declare var $: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss']
})
export class JqueryComponent implements OnInit {

  todoList;

  constructor() { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(){
    console.log("jquery getTodoList");
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method:'GET',
      dataType: 'json',
      success: (data) => {
        this.todoList = data;
        this.refresh();
      }
    })
  }

  refresh(){
    $('#todo_list').empty();

    this.todoList.forEach(function(item, index){
      var todo =
        '<tr>' +
          '<td>' +
            '<input type="checkbox" ' + (item.isFinished?'checked':'') + ' value="' + item.isFinished + '" onchange="update(' + index + ')">' +
          '</td>' + 
          (item.isFinished?'<td style="text-decoration: line-through">':'<td>') + item.todo + '</td>' +
          '<td>' + item.created + '</td>' +
          '<td>' + item.updated + '</td>' +
          '<td>' +
            '<button type="button" onclick="remove(' + index + ')">삭제</button>' +
          '</td>' +
        '</tr>';
      $('#todo_list').append(todo);
    })
  }
}
