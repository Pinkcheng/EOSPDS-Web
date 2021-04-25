import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-department',
  templateUrl: './dialog-delete-department.component.html',
  styleUrls: ['./dialog-delete-department.component.css']
})
export class DialogDeleteDepartmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialog) { console.log(data) }

  ngOnInit(): void {
  }
  deleteDepartment() {
    //delete porter http
    console.log("確認刪除請求單位");
    this.closeAll();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }
}
