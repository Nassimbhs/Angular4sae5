import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/app/Model/invitation'; 
import {Router} from '@angular/router';
import { InvitationService } from 'src/app/services/invitation.service';
import { Company } from 'src/app/Model/company';
import { Employee } from 'src/app/Model/employee';
import { CompanyService } from 'src/app/services/company.service';
import { EmployeeService } from 'src/app/services/employee.service';
//import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit {

  invitations!: Invitation [];
  employees!: Employee[]; //employees
  companys!: Company[];

  totalLength: any;
  page:number=1;

invitation: any;
name : any;



  constructor(private invitationService : InvitationService,private companyService : CompanyService,private employeeService : EmployeeService,private router:Router) { } //,private toast : NgToastService

  ngOnInit(): void {

    this.getInvitations();
   // this.getCompanys();

  }

 Search()
  {

if(this.name !=""){
  this.invitations = this.invitations.filter(res=>{
      return res.c.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });

}else if (this.name =="")
{
  this.ngOnInit();
}

    
  }
  


  private getInvitations(){

    this.invitationService.getInvitationsList().subscribe(data=>
     { 
    this.invitations = data;
     this.totalLength = data.length;

  //   this.toast.success({detail:"Success Message",summary:"Welcome to invitation list",duration:7000})

    console.log(this.invitations);
    }
      )


    }

    updateInvitation(id:number)
    {
      this.router.navigate(['update-invitation',id ]);
    }

    deleteInvitation(id:number)
    {
      this.invitationService.deleteInvitation(id).subscribe(data =>
      {
        console.log(data);
        this.getInvitations();
      })
    }
      


    

   /* private getCompanys()
  {
    this.companyService.getCompanysList().subscribe(data =>
    {
      this.companys = data;

      console.log(data);

    },
    error => console.log(error)
    );
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=> { 
    this.employees = data;
    }
      )
    }
    */




}
