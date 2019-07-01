import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo-overview.component';

describe('TodosOverviewComponent', () => {
  let component: TodosOverviewComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
