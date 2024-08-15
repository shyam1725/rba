import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderTaskDialogComponent } from './reorder-task-dialog.component';

describe('ReorderTaskDialogComponent', () => {
  let component: ReorderTaskDialogComponent;
  let fixture: ComponentFixture<ReorderTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReorderTaskDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReorderTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
