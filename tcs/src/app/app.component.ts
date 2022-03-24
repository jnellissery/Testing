import { Component, Inject } from '@angular/core';
import { APP_CONFIG_TESTING } from './app.module';
import { TcsServiceService } from './tcs-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcs';
application :string="This is my Angular application"
constructor(@Inject(APP_CONFIG_TESTING) config: any,private employeeservice:TcsServiceService){
 // console.log(config);
this.application= config;

}
}
