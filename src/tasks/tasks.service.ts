import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interface/task';

@Injectable()
export class TasksService {

  private tasks:Task[] = []
  create(createTaskDto: CreateTaskDto) {
    const newTask = { ...createTaskDto, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find(task => task.id === id);
  }



  remove(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return undefined;
    }
    return this.tasks.splice(taskIndex, 1)[0];
  }
}
