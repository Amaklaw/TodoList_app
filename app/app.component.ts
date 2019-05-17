import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todo List';
  todos = [
    {
    label: 'Buy sneakers',
    done: false,
    priority: 1
    },
    {
      label: 'Visit the Dentist',
      done: true,
      priority: 4
      },
      {
        label: 'Grocery Shopping',
        done: false,
        priority: 3
        },
         {
    label: 'Evening Gym',
    done: false,
    priority: 2
    },
];

addTodo(newTodoLabel) {
  var newTodo = {
    label : newTodoLabel,
    priority: 1,
    done: false
  };
  this.todos.push(newTodo);
 }

 deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label );
 }
}
