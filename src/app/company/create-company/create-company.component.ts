import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Model/company';
import { CompanyService } from 'src/app/services/company.service';

import {Router} from '@angular/router';
//import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private companyService: CompanyService,
    private router:Router) { } //,private toast : NgToastService

company: Company = new Company();

  ngOnInit(): void {
  }


  saveCompany(){
    this.companyService.createCompany(this.company).subscribe(data =>{
      console.log(data);

    this.goToCompanyList();   
  //  this.toast.success({detail:"Success Message",summary:"Added successfully ",duration:7000}) 
    },
    error => console.log(error)
    );
  }

  goToCompanyList()
  {
   this.router.navigate(['/List-Company']);
   
  }



  onSubmit()
  {
    console.log(this.company);
    this.saveCompany();
  }

}
