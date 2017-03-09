import { DtoCustomExtension } from './DtoCustomExtension';
import { DtoSTGDataType } from './enums/index';

export class DtoField {
    Name:string;
    Value:string;
    ConvertedValue:Object;
    FieldType:DtoSTGDataType;
    IsValid:boolean;
    Location:Object;
    Confidence:number;
    CustomExtensions:DtoCustomExtension[];
}