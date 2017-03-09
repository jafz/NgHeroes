import { DtoDocumentIndexDictionary } from './DtoDocumentIndexDictionary';

export class DtoWorkItemData {
  WorkItemID: number;
  WorkItemGuid: string;
  ActivityInstanceID: number;
  ProcessID: number;
  ProcessName: string;
  ProcessType: string;
  ProcessVersionMajor: string;
  ProcessVersionMinor: string;
  ProjectName: string;
  ClientName: string;
  DocumentID: string;
  DocumentCount: number;
  RoleInstanceID: number;
  Status: string;
  Message: string;
  ExpirationDate: Date;
  WarnDate: Date;
  DateCreated: Date;
  ActivityName: string;
  IsChild: Boolean;
  PreviousInstanceID: number;
  ExternalUserName: string;
  ExternalRoleName: string;
  SLAOverride: Object;
  Indexes: DtoDocumentIndexDictionary;
  RoutingData: Object[];
}
