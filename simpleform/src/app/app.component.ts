import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  onSubmit(f: any): void {
      console.log('you submitted value: '+ f.value);
  }
}
