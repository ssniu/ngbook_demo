import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PToCserviceService {

  private childSource = new Subject<string>();
  private childconfirm = new Subject<string>();

  //observable string streams
  child$ = this.childSource.asObservable();
  childconfirm$ = this.childconfirm.asObservable();

  //service commands
  sendToparent(childdata: string){
      this.childSource.next(childdata);
  }

  confirmsent(child2: string){
      this.childconfirm.next(child2);
  }

  constructor() { }

}
