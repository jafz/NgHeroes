import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {DtoWorkItemData} from './dto/index';
import {DtoDocument} from './dto/index';

@Injectable()
export class WorkitemService {
  private processUrl = 'http://localhost:8080/api/ProcessService'
  private docUrl = 'http://localhost:8070/api/documentService'
  private auth = 'bearer 91be3f6a077b4270908ee0a03576aee0';
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.auth,
  });

  constructor(private http: Http) { }

  lockWorkitem(id: number): Promise<DtoWorkItemData> {
    return this.http
      .post(`${this.processUrl}/WorkItems/${id}/lock`, JSON.stringify(""), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  create(): Promise<DtoWorkItemData> {
    var item = new DtoWorkItemData();
    item.ActivityInstanceID = 579;
    item.ProcessID = 26;
    return this.http
      .post(`${this.processUrl}/WorkItems`, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  createDoc(workitem: DtoWorkItemData): Promise<DtoDocument> {
    var docCreateHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'workitemdata': JSON.stringify(workitem)
    });

    var doc = new DtoDocument();

    return this.http
      .post(`${this.docUrl}/thin/Document/Create/Root`, JSON.stringify(""), { headers: docCreateHeaders })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  createDocWithType(workitem: DtoWorkItemData, docType: string): Promise<DtoDocument> {
    var docCreateHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'workitemdata': JSON.stringify(workitem)
    });

    var doc = new DtoDocument();

    return this.http
      .post(`${this.docUrl}/thin/Document/Create/Root/${docType}`, JSON.stringify(""), { headers: docCreateHeaders })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  unlock(workitem: DtoWorkItemData): Promise<void> {
    return this.http
      .put(`${this.processUrl}/WorkItems`, JSON.stringify(workitem), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
