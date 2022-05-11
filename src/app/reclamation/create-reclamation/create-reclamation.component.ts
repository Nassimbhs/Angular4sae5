import { Component, OnInit } from '@angular/core';
import { reclamations } from 'src/app/Model/reclamations'; 
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/Model/company';
import { user } from 'src/app/Model/user';
import { smspojo } from 'src/app/Model/smspojo';
 
 @Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {

  constructor( private rec : ReclamationService, private router:ActivatedRoute,private rout:Router) { }
  Reclamation :reclamations =new reclamations();
  
  idd!: any;
  content!:any;
  message!:any;
  status!:any;
   smspojo:smspojo=new smspojo();
  users:user =new user();
   public userlist1:any;
   msg !: string;
  ngOnInit(): void {
    this.getlistUser();
     
    JSON.stringify(this.idd);
    
  }
  EnvoieSms(){
     
    this.rec.EnvoieSms(this.smspojo).subscribe(res=>{
      console.log(res)
    });
  }
  SaveReclam(){  
    this.users.id=this.idd;
    this.rec.createReclamation(this.idd,this.Reclamation).subscribe(res=> {
      this.Reclamation=res;
      this.EnvoieSms();
       this.rout.navigate(['/reclamations']);
    
  
    });
}
getlistUser(){
 
  this.rec.getListOfUser().subscribe(res=>this.userlist1=res);
 }
 onSubmit(){
   console.log(this.Reclamation);
   
}
 
}
