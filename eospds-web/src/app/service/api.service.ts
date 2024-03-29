import { Department } from 'src/app/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../share';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,
    public app: AppConfig,
    public auth: AuthService,
    public err: ErrorService) { }

  apiURL: string = this.app.apiUrl + this.app.apiVersion;
  apiBuilding: string = '/building';
  apiDepartment: string = '/department';
  apiStaff: string = '/staff';
  apiPorter: string = '/porter';
  apiMission: string = '/mission';
  apiMissionInstrument: string = '/mission_instrument';
  apiMissionType: string = '/mission_type';
  apiMissionLabel: string = '/mission_label';
  apiDispatch: string = '/dispatch';

  /*-----------------------building------------------------------*/
  //取得大樓列表
  getBuildingList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiBuilding, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------department------------------------------*/
  //新增請求單位
  addDepartment(body: URLSearchParams): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiDepartment, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得請求單位列表
  getDepartmentList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定大樓之請求單位列表
  getDepartmentListParams(params: HttpParams): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定請求單位資料
  getDepartmentData(departmentId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定請求單位
  deleteDepartment(departmentId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定請求單位資料
  updateDepartmentData(departmentId: string, body: URLSearchParams): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiDepartment + '/' + departmentId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------staff------------------------------*/
  //新增單位人員
  addStaff(body: URLSearchParams): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiStaff, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定單位人員
  getStaffListParams(params: HttpParams): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiStaff + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定單位人員資料
  getStaffData(staffId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiStaff + '/' + staffId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定單位人員資料
  updateStaff(staffId: string, body: URLSearchParams) {
    return this.http.patch<Response>(this.apiURL + this.apiStaff + '/' + staffId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------porter------------------------------ */
  //新增傳送員
  addPorter(body: URLSearchParams): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiPorter, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得傳送員列表
  getPorterList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiPorter, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定狀態的傳送員
  getPorterListParams(params: HttpParams) {
    return this.http.get<Response>(this.apiURL + this.apiPorter + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定傳送員資料
  getPorterData(porterId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiPorter + '/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //刪除特定傳送員
  deletePorter(porterId: string): Observable<Response> {
    return this.http.delete<Response>(this.apiURL + this.apiPorter + '/' + porterId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新傳送員資料
  updatePorter(porterId: string, body: URLSearchParams) {
    return this.http.patch<Response>(this.apiURL + this.apiPorter + '/' + porterId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission------------------------------*/
  //新增任務
  addMission(body: URLSearchParams): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiMission, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得任務列表
  getMissionList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMission, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定單位的任務列表
  getMissionListParams(params: HttpParams): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMission + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務資料
  getMissionData(missionId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMission + '/' + missionId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  updateMission(missionId: string, body: URLSearchParams): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiMission + '/' + missionId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  deleteMission(missionId: string) {
    return this.http.delete<Response>(this.apiURL + this.apiMission + '/' + missionId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  manualDispatch(missionId: string, body: URLSearchParams) {
    return this.http.post<Response>(this.apiURL + this.apiMission + '/' + missionId + '/dispatch', body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_instrument------------------------------*/
  //取得任務工具列表
  getMissionInstrumentList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionInstrument, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_type------------------------------*/
  //取得任務類型列表
  getMissionTypeList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionType, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  /*-----------------------mission_label------------------------------*/
  //新增任務標籤
  addMissionLabel(body: URLSearchParams): Observable<Response> {
    return this.http.post<Response>(this.apiURL + this.apiMissionLabel, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得任務標籤列表
  getMissionLabelList(): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務類型之任務標籤列表
  getMissionLabelListParams(params: HttpParams): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel + '?' + params.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //取得特定任務標籤資料
  getMissionLabelData(missionLabelId: string): Observable<Response> {
    return this.http.get<Response>(this.apiURL + this.apiMissionLabel + '/' + missionLabelId, this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
  //更新特定任務標籤資料
  updateMissionLableData(missionLabelId: string, body: URLSearchParams): Observable<Response> {
    return this.http.patch<Response>(this.apiURL + this.apiMissionLabel + '/' + missionLabelId, body.toString(), this.app.apiOptions).pipe(catchError(this.err.handleError))
  }
}
