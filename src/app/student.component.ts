import { Component, Inject } from "@angular/core";
import { StrudentService } from "./student.service";
@Component({
    standalone: false,
    selector: "student",
    template: `
        <ol>
            <li *ngFor="let hobby of hobbies">{{ hobby }}</li>
        </ol>
    `
})
export class StudentComponent {
    hobbies;
    constructor(studentService: StrudentService) {
        this.hobbies = studentService.getHobbied();
    }
}