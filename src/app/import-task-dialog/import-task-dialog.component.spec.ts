import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTaskDialogComponent } from './import-task-dialog.component';

describe('ImportTaskDialogComponent', () => {
  let component: ImportTaskDialogComponent;
  let fixture: ComponentFixture<ImportTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTaskDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
