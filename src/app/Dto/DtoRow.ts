import { DtoCustomExtension } from './DtoCustomExtension';
import { DtoCell } from './DtoCell';

export class DtoRow {
    ID:string;
    Cells:DtoCell;
    Location:Object;
    CustomExtensions:DtoCustomExtension[];
}