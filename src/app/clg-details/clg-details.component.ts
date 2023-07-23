import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { TransportationComponent } from '../transportation/transportation.component';

@Component({
  selector: 'app-clg-details',
  templateUrl: './clg-details.component.html',
  styleUrls: ['./clg-details.component.css']
})
export class ClgDetailsComponent {
  public cdetail:any;
  public vtour:any;
  public nearby:any;
  public source:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private sanitizer: DomSanitizer,private http:HttpClient,private dialog:MatDialog)
  {
      console.log(data);
      this.cdetail=data[0];
  }
  showTour(data:any)
  {
    console.log(data);
    // let d=data.split(" ");
    // console.log(d[5]);
    // this.vtour=d[5].slice(5,(d[5].length-1));
    // d.{{ variable | slice:start:end }}  
  //  this.vtour= this.sanitizer.bypassSecurityTrustUrl(d);

    this.vtour=data;
    const iframe:any =  document.getElementById('vtourframe') as HTMLIFrameElement;
    iframe.contentWindow.location.replace(this.vtour);
    // var iframe:any = document.createElement('iframe');
    // iframe.width="90%";
    // iframe.height="500";
    // iframe.contentWindow.location.replace(this.vtour);
    // this.source="<iframe src='{{this.vtour}}' width=100% height=500></iframe>";

    // console.log(this.vtour);
  }

  showNearBy(data:any)
  {
    console.log(data);
    this.nearby=data;
    this.http.get("http://localhost:3000/gettransportationbycid/"+data).subscribe((res:any)=>{
        console.log(res);
        this.dialog.open(TransportationComponent,{
          width:"500px",
          data:res
        });
        
    });;
   

  }
}
