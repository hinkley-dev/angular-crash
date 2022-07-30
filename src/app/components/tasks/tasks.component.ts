import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // a service needs to be 'provided' to a constructor to be used.
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //kinda like a promise
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  toggleReminder(task: Task) {
    this.taskService.updateTaskReminder(task).subscribe((r) => {
      console.log(r);
      task.reminder = !task.reminder;
    });
  }

  //delete from server and filter from UI
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
