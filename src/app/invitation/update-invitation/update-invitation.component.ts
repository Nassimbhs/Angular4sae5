import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Invitation } from 'src/app/Model/invitation';
import { InvitationService } from 'src/app/services/invitation.service';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Company } from 'src/app/Model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.component.html',
  styleUrls: ['./update-invitation.component.css']
})
export class UpdateInvitationComponent implements OnInit {

  id!: number;
  invitation: Invitation = new Invitation();
  employee: Employee = new Employee();
  company: Company = new Company();

  constructor(private invitationService: InvitationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.invitation = new Invitation();
this.id = this.route.snapshot.params['id'];

this.invitationService.getInvitationById(this.id).subscribe(data => {console.log(data)
this.invitation = data;},
error => console.log(error));
  }

  goToInvitationList()
  {
   this.router.navigate(['/invitations']);
   
  }

  onSubmit()
  {
    
    this.invitationService.updateInvitation(this.id, this.invitation).subscribe(data =>{
      this.goToInvitationList();

    }
    , error => console.log(error)
    );
  }

}
