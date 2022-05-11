import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
 @Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {
  public data : any;
  idCom !:number;
  idC !:number;
public dat:any;
  constructor(private feed : FeedbackService,private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlist();
   
   }
  getlist(){
     
         this.feed.getListOfUser().subscribe(res=>{ this.dat=res;
        
        
        });
        
        
      } 
      getallCalendar(){
        this.feed.getUserByCalendar(this.idCom).subscribe(res=>{ this.data=res;
       
      console.log(this.idCom);
       
       });
       
       
     } 
      gotToFeedBackList(id:number){
        this.rout.navigate(['Calendrier',this.idC]);
      }

      getCompany(id:number){
       this.feed.getUserByCalendar(id).subscribe(res=>{ this.data=res});
          this.gotToFeedBackList(this.idC);
      }
    
     
}
