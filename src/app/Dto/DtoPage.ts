import { DtoCustomExtension } from './DtoCustomExtension';
import { DtoPageFlags } from './enums/index';
import { DtoMedia } from './DtoMedia';

export class DtoPage {
    ID:string;
    IsLoaded:boolean;
    PageIndex:number;
    IsVisible:boolean;
    IsFront:boolean;
    PageFlags:DtoPageFlags;
    Media:DtoMedia[];
    ParentDocumentId:string;
    CustomExtensions:DtoCustomExtension[];
}