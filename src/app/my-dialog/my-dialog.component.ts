/* my-dialog.component.ts 
AUTHOR: Aryan Bhardwaj
CREATED: 2024-03-18
UPDATED: 2024-03-30
*/

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
