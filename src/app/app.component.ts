import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import index from '@angular/cdk/typings/schematics/ng-add';

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

  public displayedColumns = ['First Row'];
  public newAttribute: any = {};

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

  onDelete = (i) => {
    (this.displayedColumns.splice(i, 1));
  }

  addRow = () => {
    this.displayedColumns.push(this.newAttribute);
    this.newAttribute = {};
  }
}
//   private fieldArray: Array<any> = [];
//   private newAttribute: any = {};
//
//   addFieldValue() {
//     this.fieldArray.push(this.newAttribute)
//     this.newAttribute = {};
//   }
//
//   deleteFieldValue(index) {
//     this.fieldArray.splice(index, 1);
//   }
// }
//

