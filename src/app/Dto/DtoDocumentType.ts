import { DtoFieldDefinition, DtoTableDefinition } from './index';

export class DtoDocumentType {
    constructor(){
        this.FieldDefinitions = [];
        this.TableDefinitions = [];
    }
    ID:number;
    Name:string;
    ProcessID:number;
    FieldDefinitions:DtoFieldDefinition[];
    TableDefinitions:DtoTableDefinition[];
}