import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Model/company';
import { CompanyService } from 'src/app/services/company.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  id: any;
  company: Company = new Company();

  constructor(private companyService: CompanyService,
    private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit() {
this.company = new Company();
this.id = this.route.snapshot.params['id'];

this.companyService.getCompanyById(this.id).subscribe(data => {console.log(data)
this.company = data;},
error => console.log(error));
 

  }

  goToCompanyList()
  {
   this.router.navigate(['/companys']);
   
  }

  onSubmit()
  {
    
    this.companyService.updateCompany(this.id, this.company).subscribe(data =>{
      this.goToCompanyList();

    }
    , error => console.log(error)
    );
  }

}
