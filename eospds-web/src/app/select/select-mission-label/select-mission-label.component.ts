import { MissionType, MissionLabel } from 'src/app/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-select-mission-label',
  templateUrl: './select-mission-label.component.html',
  styleUrls: ['./select-mission-label.component.css']
})
export class SelectMissionLabelComponent implements OnInit {

  @Input()
  selectMissionTypeId: string = "";
  @Input()
  selectMissionLabelId: string = "";
  @Output()
  selectMissionLabelEvent = new EventEmitter<any>();

  missionTypeList: MissionType[] = []
  missionLabelList: MissionLabel[] = []


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //http get mission type list
    this.missionTypeList = this.missionTypeListData;
    if (this.selectMissionLabelId != "") {
      this.onSelectMissionTypeChange(this.selectMissionTypeId);
    }
  }
  onSelectMissionTypeChange(selectMissionTypeId: string) {
    //http get mission label of mission type
    this.selectMissionTypeId = selectMissionTypeId;
    if (selectMissionTypeId == 'T0001') {
      this.missionLabelList = this.T0001;
    } else {
      this.missionLabelList = this.T0002;
    }
  }
  onSelectMissionLabelChange(selectMissionLabelId: string) {
    this.selectMissionLabelId = selectMissionLabelId;
    this.selectMissionLabelEvent.emit(selectMissionLabelId)
  }
  missionTypeListData = [
    {
      "id": "T0001",
      "name": "轉床",
      "transport": {
        "id": 1,
        "name": "運人"
      }
    },
    {
      "id": "T0002",
      "name": "一般檢查",
      "transport": {
        "id": 1,
        "name": "運人"
      }
    }
  ]
  T0001 = [
    {
      "id": "L0001",
      "name": "一般病房互轉",
      "type": {
        "id": "T0001",
        "name": "轉床",
        "transport": {
          "id": 1,
          "name": "運人"
        }
      }
    },
    {
      "id": "L0002",
      "name": "一般病房轉護理之家",
      "type": {
        "id": "T0001",
        "name": "轉床",
        "transport": {
          "id": 1,
          "name": "運人"
        }
      }
    }
  ]
  T0002 = [
    {
      "id": "L0003",
      "name": "上腸胃道攝影",
      "type": {
        "id": "T0002",
        "name": "一般檢查",
        "transport": {
          "id": 1,
          "name": "運人"
        }
      }
    },
    {
      "id": "L0004",
      "name": "放射科放管子",
      "type": {
        "id": "T0002",
        "name": "一般檢查",
        "transport": {
          "id": 1,
          "name": "運人"
        }
      }
    }
  ]
}
