import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  major = 30;
  minor = 1;
  agreed = 0;
  disagreed = 0;

  newMinor(){
      this.minor++;
  }

  newMajor(){
      this.major--;
      this.minor = 0;
  }

  onVoted(agreed: boolean){
      agreed? this.agreed++: this.disagreed++;
  }
}
