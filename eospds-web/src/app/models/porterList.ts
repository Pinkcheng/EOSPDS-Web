import { Department } from './department';
import { PorterType } from "./porterType";
import { PorterStatus } from "./porterStatus";
import { Gender } from "./gender";
export interface PorterList {
  id: string,
  name: string,
  tagNumber: string,
  birthday: null,
  department: Department,
  gender: number,
  type: PorterType,
  status: number,
  mission: number,
  location: string,
  locationTime: string
}
