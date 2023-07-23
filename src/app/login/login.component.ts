import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private service:UserService,private route:Router)
  {

  }
  public  itemdata= [
    {"img": "assets/assets/images/meeting-04.jpg" , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg"  , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg"  , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg" , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    
    
  ]
  title = 'forms';
    process(data:any)
    {
      console.log(data);
      
      this.service.login(data).subscribe((result:any)=>{
        
        console.log(result);
        if(result.error=="true")
        {
          console.log("Invalid")
        }
        else
        {
            console.log("valid")
            this.route.navigate(["loginclick"]);
        }
      });
    }
  

}


