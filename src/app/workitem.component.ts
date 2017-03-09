import { Component, OnInit } from '@angular/core';

import {DtoWorkItemData} from './dto/index';
import {DtoWorkItemStatus} from './dto/enums/index';
import {DtoDocument} from './dto/index';
import {WorkitemService} from './workitem.service';

@Component({
  moduleId: module.id,
  selector: 'my-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {
  workitem: DtoWorkItemData
  docId: string;
  constructor(private procService: WorkitemService) { }

  ngOnInit(): void {
    this.workitem = new DtoWorkItemData();
    this.workitem.ProcessName = "Vinna Process";
    this.workitem.WorkItemID = 33;
    this.docId = "-1";
  }

  lock(id: number): void {
    this.procService.lockWorkitem(id)
      .then(w => this.workitem = w);
  }

  create(): void {
    this.procService.create()
      .then(w => this.workitem = w);
  }

  createDoc(): void {
    this.procService.createDoc(this.workitem)
      .then(w => {
        this.docId = w.ID;
        this.workitem.DocumentID = this.docId;
      });
  }

  unlock(): void {
    this.workitem.Status = DtoWorkItemStatus[DtoWorkItemStatus.Ready];
    this.procService.unlock(this.workitem)
      .then();
  }

  add(id: number): void {
  }
}
