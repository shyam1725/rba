import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../app.component';

interface Filter {
  operator: string;
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

  displayedColumns: string[] = ['select', 'csiId', 'app', 'server', 'environment', 'instance', 'tech'];
  dataSource: MatTableDataSource<Task>;
  selectedTasks: Task[] = [];
  filtersVisible: boolean = false;
  filters: Filter[] = [];

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

  selectAll(checked: boolean) {
    if (checked) {
      this.selectedTasks = this.dataSource.data.slice();
    } else {
      this.selectedTasks = [];
    }
  }

  isSelected(task: Task): boolean {
    return this.selectedTasks.indexOf(task) !== -1;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onImport(): void {
    console.log(this.selectedTasks);
    this.dialogRef.close(this.selectedTasks);
  }

  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
    if (this.filtersVisible) {
      this.filters.push({ column: '', condition: '', value: '', operator: '' });
    } else {
      this.filters = [];
    }
  }

  addFilter(): void {
    if(this.filters.length === this.displayedColumns.length - 1){
      return;
    }
    this.filters.push({ column: '', condition: '', value: '', operator: '' });
    console.log(this.displayedColumns.length - 1)
    console.log(this.filters.length)
  }

  removeFilter(index: number): void {
    this.filters.splice(index, 1);
  }
}
