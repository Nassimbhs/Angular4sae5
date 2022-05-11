import { Component, OnInit } from '@angular/core';
 
//import { NgToastService } from 'ng-angular-popup';
import { Employee } from 'src/app/Model/employee';
import { Invitation } from 'src/app/Model/invitation';
import { Router } from '@angular/router';
import { InvitationService } from 'src/app/services/invitation.service';

import { EmployeeService } from 'src/app/services/employee.service';
import { Company } from 'src/app/Model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.css']
})
export class SendInvitationComponent implements OnInit {

invitation: Invitation = new Invitation();
employee: Employee = new Employee();
company: Company = new Company();

idc: any;
ide: any;

invitations!: Invitation [];
  employees!: Employee[]; //employees
  companys!: Company[];




  constructor(private invitationService: InvitationService,private companyService : CompanyService,private employeeService : EmployeeService,
    private router:Router) { } //,private toast : NgToastService

  ngOnInit(): void {


  }
  // 21 et 31 

  saveInvitation(){
    this.invitationService.sendInvitation(this.idc,this.ide,this.invitation).subscribe(data =>{ 
      console.log(data);

    this.goToInvitationList();  
    




    },
    error => console.log(error)
    );
  }

  goToInvitationList()
  {
   this.router.navigate(['/List-Invitation']);
   
  }


   onSubmit()
  {
    console.log(this.invitation);
    this.saveInvitation();
  //  this.toast.success({detail:"Success Message",summary:"Invitation sended succefully check mail :)",duration:10000})
  }


}
