import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Priority {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List Keeper';

  priorities: Priority[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4}
  ];

  // options: FormGroup;
  //
  // constructor(fb: FormBuilder) {
  //   this.options = fb.group({
  //     hideRequired: false,
  //     floatLabel: 'auto',
  //   });
  // }
}


