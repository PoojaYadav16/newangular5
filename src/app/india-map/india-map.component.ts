import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.css']
})
export class IndiaMapComponent implements OnInit {
@Input() leti?:any=0;
@Input() log?:any=0;
@Input() path?:any;

// public path:any;
public map:any;

constructor()
{
 
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    const iframe:any =  document.getElementById('vtourframe2') as HTMLIFrameElement;
    // let src:string="https://www.google.com/maps/search/?api=1&query="+this.leti+","+this.log+"&output=embed";
    iframe.contentWindow.location.replace([this.path]);   
    // this.doSomething(changes.categoryId.currentValue);
   
    // console.log(src);
    // this.path=src;
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
    
}
showTour(data:any)
{
  console.log(data);
  // let d=data.split(" ");
  // console.log(d[5]);
  // this.vtour=d[5].slice(5,(d[5].length-1));
  // d.{{ variable | slice:start:end }}  
//  this.vtour= this.sanitizer.bypassSecurityTrustUrl(d);
  this.map=data;
  const iframe:any =  document.getElementById('vtourframe') as HTMLIFrameElement;
  iframe.contentWindow.location.replace(this.map);

  // console.log(this.vtour);
}

}
