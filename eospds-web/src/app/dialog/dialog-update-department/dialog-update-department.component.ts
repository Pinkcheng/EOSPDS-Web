import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { DialogDeleteDepartmentComponent } from '../dialog-delete-department/dialog-delete-department.component';
import { Response } from '../../models'
import { ErrorService } from 'src/app/service/error.service';

@Component({
  selector: 'app-dialog-update-department',
  templateUrl: './dialog-update-department.component.html',
  styleUrls: ['./dialog-update-department.component.css']
})
export class DialogUpdateDepartmentComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService, public err: ErrorService) { }

  ngOnInit(): void {
    this.api.getDepartment('/D0002').subscribe((res: Response) => console.log(res.data))
  }
  updateDepartment() {
    let body = new URLSearchParams();
    body.set('name', '健康中心');
    this.api.updateDepartment("/D0002", body.toString()).subscribe((res: Response) => this.err.handleResponse(res))
  }
  departmentData = {
    "id": "D2101",
    "department": "舊醫療大樓-1F-抽血站",
    "building": "新醫療大樓",
    "floor": "1F",
    "name": "抽血站"
  }
  deleteDepartmentDialog() {
    this.dialog.open(DialogDeleteDepartmentComponent, {
      width: '350px',
      height: '220px',
      data: {
        departmentId: this.data.departmentId
      }
    });
  }
}
