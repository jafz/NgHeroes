import { DtoProcessInfo } from "./DtoProcessInfo";

export class DtoActivityInstanceInfo {
    Process: DtoProcessInfo;
    ActivityTypeID: number;
    ActivityInstanceID: number;
    ActivityInstanceName: string;
    ActivityTypeName: string;
    Version: string;
}