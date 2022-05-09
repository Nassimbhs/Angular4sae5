import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { feedback } from 'src/app/Model/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import { calendar } from 'src/app/Model/calender';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { data } from 'jquery';
import { calendarevent } from 'src/app/Model/calendarevent';
import { events } from 'src/app/Model/events';
  @Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {
  id!: number;
  name!:any
 user :user =new user(); 
 Calendar :calendar=new calendar();
  public userlist:any;
  msg !: string;
  events!:calendarevent[];
  public dat:any;
 
  ev!: calendar [];
  constructor(private cal:FeedbackService ,private rec:ReclamationService,private rout:Router ) { }

  ngOnInit(): void {
    this.getlistUser();
    this.getEvent();
    this.user={
      id:null,
      username:null
      
      
    }
   this.Calendar={
     id:null,
     name:null,
     user:null,
     events:{
       id:null,
       title:null,
       start:null,
       end:null
     }
   }
  }




  SaveFeed(){
    
     
       this.cal.AddCalendar(this.id,this.Calendar).subscribe(res=>{
           this.dat=res;
           this.rout.navigate(['SearchCompany']);
          
    });
  
     
      
      
    
  }
  getEvent(){
    this.cal.getallCalendar().subscribe(res=>{
      this.ev=res;
    
    
  })
  }
  gotToFeedBackList(id:number){
    this.rout.navigate(['/create',id]);
    console.log(this.id);
  }
  onSubmit(){
    console.log(this.Calendar);
    this.SaveFeed();
     
  }
  getlistUser(){
   
    this.rec.getListOfUser().subscribe(res=>{this.userlist =res
    
    console.log(res);
    });
   }
}
