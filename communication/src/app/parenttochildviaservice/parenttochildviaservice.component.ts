import { Component, OnInit } from '@angular/core';
import { PToCserviceService } from '../p-to-cservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-parenttochildviaservice',
  templateUrl: './parenttochildviaservice.component.html',
  styleUrls: ['./parenttochildviaservice.component.css']
})
export class ParenttochildviaserviceComponent implements OnInit {

    @Input() astronaut: string;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;

    constructor(private missionService: MissionService) {
      this.subscription = missionService.missionAnnounced$.subscribe(
        mission => {
          this.mission = mission;
          this.announced = true;
          this.confirmed = false;
      });
    }

    confirm() {
      this.confirmed = true;
      this.missionService.confirmMission(this.astronaut);
    }

    ngOnDestroy() {
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
}
