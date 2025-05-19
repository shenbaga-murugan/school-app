import { Component } from '@angular/core';
import { Teacher, TeacherService } from './teacher.service';
import { EmpStatus } from '../employment-status/employment-status.component';

@Component({
  selector: 'teacher',
  standalone: false,
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  teacherName: string = "";
  teacherSubject: string = "";
  teacherDoj: Date = new Date();
  teacherLwd!: Date;
  teachers: Teacher[];
  constructor(private teacherService:TeacherService) {
    this.teachers = teacherService.getTeachers();
  }
  reverse() {
    this.teachers = this.teachers.reverse();
  }
  addTeacher() {
    if(this.teacherName && this.teacherSubject) 
      this.teachers.push({"name":this.teacherName, "subject":this.teacherSubject, "doj": this.teacherDoj});
    this.teacherName = "";
    this.teacherSubject = "";
    this.teacherDoj = new Date();
  }
  ptoTeacher(staus: EmpStatus) {
    if(staus["isEmployed"]) {
      delete this.teachers[staus["empIndex"]].lwd;
    } else {
      this.teachers[staus["empIndex"]].lwd = new Date();
    }
  }
}