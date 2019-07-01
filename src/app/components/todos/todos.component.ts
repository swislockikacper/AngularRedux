import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { RESET } from '../../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodosComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  resetTodos = () => {
    this.ngRedux.dispatch({ type: RESET });
  }

}
