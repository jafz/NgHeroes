import { DtoMediaType } from './DtoMediaType';

export class DtoMedia {
    ID:string;
    Name:string;
    IsLoaded:boolean;
    Extension:string;
    MediaType:DtoMediaType;
    ParentDocumentId:string;
    Url:string;
    MimeType:string;
}