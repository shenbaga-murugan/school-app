import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hobbies',
  standalone: false,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  hobbiesForm: FormGroup = new FormGroup({
    hobbies: new FormArray([])
  });

  addHobby(): void{
    this.hobbies.push(new FormGroup({
      hobby: new FormControl(),
      achievement: new FormControl()
    }));
  }

  delHobby(ind: number): void {
    this.hobbies.removeAt(ind);
  }

  logForm(){
    console.log(this.hobbiesForm.value);
  }

  get hobbies(): FormArray {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }
}
