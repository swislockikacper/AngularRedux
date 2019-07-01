import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../store/actions';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: '',
    done: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit = () => {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
    this.model.description = '';
  }
  toggleTodo = (todo) => this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});

  removeTodo = (todo) => this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});

}
