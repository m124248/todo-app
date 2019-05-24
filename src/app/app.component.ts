import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Priority {
  value: number;
  viewValue: number;
}

export interface Place {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List Keeper';
  // displayedColumns = ["Todo", "Importance", "Work or Home" ,"actions"];

  public selectedItem: any;

  priorities: Priority[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4}
  ];

  places: Place[] = [
    {value: 'Home', viewValue: 'Home'},
    {value: 'Work', viewValue: 'Work'}
  ];

  onDelete = () => {
    this.selectedItem = null;
  }
}


