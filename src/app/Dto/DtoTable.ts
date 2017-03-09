import { DtoRow } from './DtoRow';
import { DtoColumnDefinition } from './DtoColumnDefinition';
import { DtoCustomExtension } from './DtoCustomExtension';

export class DtoTable {
    Name:string;
    IsLoaded:boolean;
    IsValid:boolean;
    Rows:DtoRow[];
    ParentDocumentId:string;
    ColumnDefinitions:DtoColumnDefinition;
    CustomExtensions:DtoCustomExtension[];
}