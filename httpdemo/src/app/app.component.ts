import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    data: Object;

    constructor(public http: Http){

    }

    makeResquest(): void {
        this.http.request('http://google.com')
        .subscribe((res:Response) => {
            this.data = res.json();
        });
    }

}
