import { Injectable } from '@angular/core';
import { ITodoList } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService{
  private _todoList: ITodoList [] = [
    {
      id: 1,
      title: "Pull&Bear",
      completed: false
  },
  { 
      id: 2,
      title: "Zara",
      completed: true
  },
  {
      id: 3,
      title: "The North Face",
      completed: false
  },
  {
      id: 4,
      title: "Chanel",
      completed: true
  },
  {
    id: 4,
    title: "Prada",
    completed: true},
    {
      id: 4,
      title: "Dior",
      completed: false
  },
  ]

  constructor() { }

  getTodoList(): ITodoList[] {
    
    return this._todoList
  }
  addTodoList(str: string){
    const newTodo: ITodoList = {
      id : this._todoList.length +1,
      title: str,
      completed: false

    }
    this._todoList.unshift(newTodo);
    
  }
  removeTodo(id:number){
    this._todoList = this._todoList.filter(todo => todo.id !== id)
    console.log(this._todoList);
    
  }
}
