import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../app.component';

interface Filter {
  column: string;
  condition: string;
  value: string;
}

@Component({
  selector: 'app-import-task-dialog',
  templateUrl: './import-task-dialog.component.html',
  styleUrls: ['./import-task-dialog.component.scss']
})
export class ImportTaskDialogComponent {

  displayedColumns: string[] = ['csiId', 'app', 'server', 'instance', 'tech'];
  dataSource: MatTableDataSource<Task>;
  selectedTasks: Task[] = [];
  filtersVisible: boolean = false;  // State to control the visibility of filters section
  filters: Filter[] = [];  // Store the added filters

  constructor(
    public dialogRef: MatDialogRef<ImportTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tasks: Task[] }
  ) {
    this.dataSource = new MatTableDataSource(data.tasks || []);
  }

  toggleSelection(task: Task) {
    const index = this.selectedTasks.indexOf(task);
    if (index === -1) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks.splice(index, 1);
    }
  }

  selectAll() {
    this.selectedTasks = [...this.data.tasks];
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onImport(): void {
    this.dialogRef.close(this.selectedTasks);
  }

  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
    if(this.filtersVisible)
      this.filters.push({ column: '', condition: '', value: '' });
    else
    this.filters = [];
  }

  addFilter(): void {
    this.filters.push({ column: '', condition: '', value: '' });
  }

  removeFilter(index: number): void {
    this.filters.splice(index, 1);
  }
}
