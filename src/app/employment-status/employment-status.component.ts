import { Component } from '@angular/core';

@Component({
  selector: 'employment-status',
  standalone: false,
  templateUrl: './employment-status.component.html',
  styleUrl: './employment-status.component.css'
})
export class EmploymentStatusComponent {
  isEmployed: boolean = true;
  buildingClass: string = "bi-buildings-fill";
  onToggle() {
    this.isEmployed = !this.isEmployed;
    this.buildingClass = this.isEmployed ? "bi-buildings-fill" : "bi-buildings";
  }
}
