import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { ClgDetailsComponent } from '../clg-details/clg-details.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  public states: any;
  public cities: any;
  public colleges: any;
  public plet:any;
  public plog:any;
  public mpath:any;
  constructor(private service: UserService, public dialog: MatDialog) {
    service.getAllState().subscribe((data: any) => {
      console.log("all states", data);
      this.states = data;
      this.mpath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30695801.279036123!2d64.45334489988296!3d20.090361581889265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1684839716670!5m2!1sen!2sin";

    });

    // service.getAllCities().subscribe((data: any) => 
    // {
    //   console.log("all cities",data);
    //   this.cities = data

    // });

    // service.getAllCollege().subscribe((data: any) => 
    // {
    //   console.log("all college",data);
    //   this.college = data

    // });
  }
  loadcities(sid: any) {
    this.service.getStateById(sid).subscribe((res:any)=>{
        console.log(res);
        this.plet=res[0].latitude;
        this.plog=res[0].longitute;
        this.mpath=res[0].iframe;


        
    });
    this.service.getAllCitiesbysid(sid).subscribe((data: any) => {
      this.cities = data;
    });


  }

  loadcollege(cid: any) {
    this.service.getAllCollegebycid(cid).subscribe((data: any) => {
      this.colleges = data;
    });

  }
  loadCollegeDetail(cid: any) {
    this.service.getCollegeByCid(cid).subscribe((cdata: any) => {
      console.log(cdata);
      this.dialog.open(ClgDetailsComponent, {
        width: "1000",
        data: cdata
      });
    });
  }
}
