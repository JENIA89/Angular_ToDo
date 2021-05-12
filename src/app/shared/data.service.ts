import { Todo } from './todo.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[]=[
    new Todo('This is a test', true),
    new Todo('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt modi,')
  ]

  constructor() { }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  getAllTodo(){
    return this.todos
  }

  updateTodo(index: number, updateTodo: Todo){
     this.todos[index] = updateTodo

  }   

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }

  }
