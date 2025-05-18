import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  getTeachers() {
    return [{name: "Fred", subject:"Physics", doj: new Date(2013, 6, 29), lwd: new Date()}, 
      {name: "Dave", subject:"Chemistry", doj: new Date(2019, 8, 2)}, 
      {name: "Rob", subject:"English", doj: new Date(2013, 5, 21)}];
  }
}
export interface Teacher {
  name: string,
  subject: string,
  doj: Date,
  lwd?: Date
}
