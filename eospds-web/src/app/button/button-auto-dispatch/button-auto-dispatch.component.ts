import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAutoDispatchComponent } from 'src/app/dialog/dialog-auto-dispatch/dialog-auto-dispatch.component';

@Component({
  selector: 'app-button-auto-dispatch',
  templateUrl: './button-auto-dispatch.component.html',
  styleUrls: ['./button-auto-dispatch.component.css']
})
export class ButtonAutoDispatchComponent implements OnInit, OnChanges {

  constructor(public dialog: MatDialog) {

  }
  @Input()
  checkMissionList: string[] = [];
  @Input()
  missionId: string = "";

  ngOnInit(): void {

  }
  autoDispatchDiaolog(event:any) {
    event.stopPropagation();
    this.dialog.open(DialogAutoDispatchComponent, {
      width: '300px',
      height: '200px',
      data: {
        checkMissionList: this.checkMissionList,
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.checkMissionList) {
      this.checkMissionList = changes.checkMissionList.currentValue;
    }
    if (changes.missionId) {
      this.checkMissionList = [changes.missionId.currentValue];
    }
  }
}
