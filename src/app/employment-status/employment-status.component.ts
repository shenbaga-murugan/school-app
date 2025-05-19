import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employment-status',
  standalone: false,
  templateUrl: './employment-status.component.html',
  styleUrl: './employment-status.component.css'
})
export class EmploymentStatusComponent {
//input param with alias
  @Input('is-working')
  isWorking: boolean = true;
  @Input('emp-index')
  empIndex!: number;
  @Output('go-on-leave')
  goOnLeave = new EventEmitter();
  onToggle() {
    this.isWorking = !this.isWorking;
    this.goOnLeave.emit({isEmployed: this.isWorking, empIndex: this.empIndex});
  }
}
export interface EmpStatus {
  isEmployed: boolean,
  empIndex: number
}