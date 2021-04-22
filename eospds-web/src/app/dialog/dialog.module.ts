import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMissionDataComponent } from './dialog-mission-data/dialog-mission-data.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { DialogDeleteMissionComponent } from './dialog-delete-mission/dialog-delete-mission.component';
import { DialogAddMissionComponent } from './dialog-add-mission/dialog-add-mission.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DialogAddPorterComponent } from './dialog-add-porter/dialog-add-porter.component';
import { DialogAddStaffComponent } from './dialog-add-staff/dialog-add-staff.component';
import { DialogDeletePorterComponent } from './dialog-delete-porter/dialog-delete-porter.component';
import { DialogUpdatePorterComponent } from './dialog-update-porter/dialog-update-porter.component';
import { DialogUpdateStaffComponent } from './dialog-update-staff/dialog-update-staff.component';
import { DialogDeleteStaffComponent } from './dialog-delete-staff/dialog-delete-staff.component';
import { DialogManualDispatchComponent } from './dialog-manual-dispatch/dialog-manual-dispatch.component';
import { DialogAutoDispatchComponent } from './dialog-auto-dispatch/dialog-auto-dispatch.component';



@NgModule({
  declarations: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent,
    DialogAddMissionComponent,
    DialogAddPorterComponent,
    DialogAddStaffComponent,
    DialogDeletePorterComponent,
    DialogUpdatePorterComponent,
    DialogUpdateStaffComponent,
    DialogDeleteStaffComponent,
    DialogManualDispatchComponent,
    DialogAutoDispatchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    DialogMissionDataComponent,
    DialogDeleteMissionComponent
  ]
})
export class DialogModule { }
