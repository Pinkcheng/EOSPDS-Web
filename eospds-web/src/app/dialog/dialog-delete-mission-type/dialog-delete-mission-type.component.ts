import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dialog-delete-mission-type',
  templateUrl: './dialog-delete-mission-type.component.html',
  styleUrls: ['./dialog-delete-mission-type.component.css']
})
export class DialogDeleteMissionTypeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialog) {

   }

  ngOnInit(): void {
  }
  deleteMissionType() {
    //delete porter http

    this.closeAll();
  }
  closeAll() {
    this.dialogRef.closeAll();
  }
}
