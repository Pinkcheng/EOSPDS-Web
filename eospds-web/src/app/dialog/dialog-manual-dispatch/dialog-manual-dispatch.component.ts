import { ErrorService } from 'src/app/service/error.service';
import { ApiService } from 'src/app/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PorterData } from 'src/app/models';
import { URL } from 'node:url';

@Component({
  selector: 'app-dialog-manual-dispatch',
  templateUrl: './dialog-manual-dispatch.component.html',
  styleUrls: ['./dialog-manual-dispatch.component.css']
})
export class DialogManualDispatchComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public api: ApiService, public err: ErrorService, public dialog: MatDialog) { }

  porterList: PorterData[] = [];

  ngOnInit(): void {
    //get porter list with work status
    this.api.getPorterList().subscribe(res => { this.porterList = res.data })
  }
  manualDispatch() {
    let missionList = this.data.checkMissionList;
    let body = new URLSearchParams();
    body.set('dispatch', '1');
    body.set('porter', this.porterId);
    if (missionList.length != 0 && this.porterId != "") {
      for (let i = 0; i <= missionList.length; i++) {
        this.api.manualDispatch(missionList[i], body).subscribe(
          res => {
            this.err.handleResponse(res);
            this.dialog.closeAll()
          })
      }
    }else{
      this.err.errorTextResponse('請選擇傳送員')
    }

  }
  porterId: string = "";
}
