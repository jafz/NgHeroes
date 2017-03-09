import { DtoSystemMediaType } from './enums/index';

export class DtoMediaType {
    MediaTypeID:number;
    MediaTypeIdentifier:string;
    MediaTypeName:string;
    MediaTypeDescription:string;
    MediaTypeMimeType:string;
    IsSystemMediaType:boolean;
    SystemMediaType:DtoSystemMediaType;
}