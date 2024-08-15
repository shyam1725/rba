import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ImportTaskDialogComponent } from './import-task-dialog/import-task-dialog.component';
import { ReorderTaskDialogComponent } from './reorder-task-dialog/reorder-task-dialog.component';

export interface Task {
  csiId: number;
  app: string;
  server: string;
  instance: number;
  env: number;
  fnId: number;
  tech: string;
  taskOrder: number;
  action: string;
}

const ELEMENT_DATA: Task[] = [
  {csiId: 101, app: 'TikTok', server: 'tiktok.com', instance: 0, env: 0, fnId: 11, tech: 'Android', taskOrder: 102, action: 'Break'},
  {csiId: 101, app: 'TikTok', server: 'tiktok.com', instance: 0, env: 0, fnId: 11, tech: 'Android', taskOrder: 102, action: 'Break'},
  {csiId: 101, app: 'TikTok', server: 'tiktok.com', instance: 0, env: 0, fnId: 11, tech: 'Android', taskOrder: 102, action: 'Break'},
  {csiId: 101, app: 'TikTok', server: 'tiktok.com', instance: 0, env: 0, fnId: 11, tech: 'Android', taskOrder: 102, action: 'Break'},
  {csiId: 101, app: 'TikTok', server: 'tiktok.com', instance: 0, env: 0, fnId: 11, tech: 'Android', taskOrder: 102, action: 'Break'},
// Add more data as needed
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAdvancedOptions = false;
  displayedColumns: string[] = ['Select', 'csiId', 'app', 'server', 'instance', 'env', 'fnId', 'tech', 'taskOrder', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  totalItems = ELEMENT_DATA.length;
  selectedTasks: Task[] = [];
  pageSize = 5;

  constructor(public dialog: MatDialog) {}

  toggleAdvancedOptions() {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }

  openImportTasks() {
    const dialogRef = this.dialog.open(ImportTaskDialogComponent, {
      width: '80%',
      data: { tasks: ELEMENT_DATA }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Logic to handle the result
    });
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
    
  }

  openReorderDialog(): void {
    const dialogRef = this.dialog.open(ReorderTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the reordering logic here if "Yes" is clicked
      }
    });
  }

  save() {
    // Logic to save the form
  }

  cancel() {
    // Logic to cancel the form
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.data = ELEMENT_DATA.slice(startIndex, endIndex);
  }
}
