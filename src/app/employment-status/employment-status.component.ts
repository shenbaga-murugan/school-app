import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employment-status',
  standalone: false,
  templateUrl: './employment-status.component.html',
  styleUrl: './employment-status.component.css'
})
export class EmploymentStatusComponent {
//input param with alias
  @Input('is-employed')
  isEmployed: boolean = true;
  @Input('emp-index')
  empIndex!: number;
  @Output()
  quit = new EventEmitter();
  onToggle() {
    this.isEmployed = !this.isEmployed;
    this.quit.emit({isEmployed: this.isEmployed, empIndex: this.empIndex});
  }
}
export interface EmpStatus {
  isEmployed: boolean,
  empIndex: number
}