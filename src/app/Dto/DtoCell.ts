import { DtoSTGDataType } from './enums/index';
import { DtoCustomExtension } from './DtoCustomExtension';

export class DtoCell {
    ColumnName:string;
    CapturedValue:string;
    IsConverted:boolean;
    ConvertedValue:Object;
    IsValid:boolean;
    CellType: DtoSTGDataType;
    Location:Object;
    CustomExtensions:DtoCustomExtension[];
}