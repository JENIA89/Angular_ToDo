import { DataService } from './../shared/data.service';
import { Todo } from './../shared/todo.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  showValidErrors: boolean

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodo()
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidErrors=true
    this.dataService.addTodo(new Todo(form.value.text))
    this.showValidErrors=false
    form.reset()
  }

}
 