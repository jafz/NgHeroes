import { DtoCustomExtension } from './DtoCustomExtension';
import { DtoCustomValue } from './DtoCustomValue';
import { DtoField } from './DtoField';
import { DtoMedia } from './DtoMedia';
import { DtoPage } from './DtoPage';
import { DtoTable } from './DtoTable';

export class DtoDocument {
  ID: string;
  IsLoaded: Boolean;
  DocumentType: string;
  DocumentName: string;
  OwnerWorkItemID: number;
  ParentDocumentId: string;
  ChildDocuments: DtoDocument[];
  IndexFields: DtoField[];
  Tables: DtoTable[];
  CustomValues: DtoCustomValue[];
  Pages: DtoPage[];
  Media: DtoMedia[];
  CustomExtensions: DtoCustomExtension[];
}
