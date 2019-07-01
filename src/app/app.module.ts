import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { AppComponent } from './components/app/app.component';
import { TodosOverviewComponent } from './components/todos-overview/todos-overview.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosOverviewComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
