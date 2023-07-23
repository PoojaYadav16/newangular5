import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent {
@Input() ldata:any;
public rs=new Array();
public bs=new Array();
public s=new Array();

constructor(@Inject(MAT_DIALOG_DATA) public data:any)
{
  for(let i=0;i<data.length;i++)
  {
    if(data[i].type=="railway station")
    { 
      this.rs.push(data[i]);
    }
    else if(data[i].type=="bus station")
    {
       this.bs.push(data[i]);
    }
    else if(data[i].type=="airport")
    {
      this.s.push(data[i]);
    }

  }
  this.ldata=data;
}
}
