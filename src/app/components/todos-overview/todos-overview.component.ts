import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { RESET } from '../../store/actions';

@Component({
  selector: 'app-todos-overview',
  templateUrl: './todos-overview.component.html',
  styleUrls: ['./todos-overview.component.scss']
})
export class TodosOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  resetTodos = () => this.ngRedux.dispatch({ type: RESET });

}
