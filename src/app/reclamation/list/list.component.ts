import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute,Router } from '@angular/router';
import { reclamations } from 'src/app/Model/reclamations';
import { CountType } from 'src/app/Model/CountType';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  public userli:any;
   reclam!:reclamations;
  id !:number;
  id1 !:number;
  count!:CountType;
  dat:any;
  dd:any;
 
  events: any;
  constructor(private feed : ReclamationService, private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.getlist();
    this.getStatus(this.id);
    this.id=this.router.snapshot.params['id'];
    }
  getlist(){
 
    this.feed.getrec().subscribe(res=>{this.userli =res
     

    });
   }
   
   deleteReclamation(id : any){
     this.feed.deleteReclamation(id).subscribe(data=>{
        this.getlist();
     })
      
     
   }
   updateFeedback(id : any){
     this.feed.UpdateReclamation(id,this.reclam).subscribe();
      
     
   }
   gotToFeedBackList(id:number){
     this.rout.navigate(['reclamation-update',id]);
   }
   getStatus(id:any){
    
         this.feed.getuser(id).subscribe(res=>{ 
        //let s=res.map((x: { count: any; })=>x.count)
        //let y=res.map((x: { type: any; })=>x.type)
        this.dat=res;
        
        
        this.rout.navigate(['reclam',id]);
     
          });
         
}
buttonClicked(): void
{
    this.events.nativeElement.innerHTML = '<span>Button Clicked</span>';
}
}
