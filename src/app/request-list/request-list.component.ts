import { Component, OnInit } from '@angular/core';
import { ServicerequestService } from '../Services/servicerequest.service';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  serReq: any[];
  constructor(private serRequest: ServicerequestService) { }

   // tslint:disable-next-line:typedef
   ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.serRequest.getRequestList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(serReqList => {
      this.serReq = serReqList;
    });
  }

}
