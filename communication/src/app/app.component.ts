import { Component } from '@angular/core';
import { PToCserviceService } from './p-to-cservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PToCserviceService]
})
export class AppComponent {
  astronauts=['mary','john','lucy'];
  history: string[] = [];
  missions = ['fly to the moon!', 'fly yo mars','fly out of earth'];
  nextMission = 0;
  color: 'yellow';

  constructor(private ptoc:PToCserviceService){
      ptoc.confirmsent.subscribe(
          astronaut => {
              this.history.push(`${astronaut} confirmed the mission`);
          });
  }
  announce(){
      let mission = this.missions[this.nextMission++];
      this.ptoc.sendToparent(mission);
      this.history.push(`Mission "${mission}" announced`);
      if(this.nextMission >= this.missions.length){
          this.nextMission = 0;
      }
  }
}
