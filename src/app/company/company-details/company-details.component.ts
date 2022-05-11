import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { company } from 'src/app/Model/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  id!:number
  company!: company

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.companyService.getCompanyById(this.id).subscribe(data => {
      this.company = data;
    })

  }

}
