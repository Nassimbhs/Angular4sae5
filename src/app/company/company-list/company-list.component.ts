import { company } from 'src/app/Model/company';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Invitation } from 'src/app/Model/invitation';
import { InvitationService } from 'src/app/services/invitation.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companys!: company[];

  totalLength: any;
  page:number=1;

  name : any;

  order: any;
  a: any;
  b: any;

  //public aziz : any[]; 

 

  constructor(private companyService : CompanyService,private router:Router,private toast : NgToastService ) { }

  ngOnInit(): void {

    this.getCompanys();
    console.log(this.companys);
    
    
  }

sortData()
  {
    if (this.order)
    {
      let newarr = this.companys.sort((a,b) => a.id - b.id);
      this.companys = newarr
    }

    else 
    {
let newarr = this.companys.sort((a,b)=> b.id - a.id);
this.companys = newarr
    }

    this.order = !this.order;
  }

  sortCapacity()
  {
    if (this.order)
    {
      let newarr = this.companys.sort((a,b) => a.capacity - b.capacity);
      this.companys = newarr
    }

    else 
    {
let newarr = this.companys.sort((a,b)=> b.capacity - a.capacity);
this.companys = newarr
    }

    this.order = !this.order;
  }

  sortResgistrationNumber()
  {
    if (this.order)
    {
      let newarr = this.companys.sort((a,b) => a.resgistrationNumber - b.resgistrationNumber);
      this.companys = newarr
    }

    else 
    {
let newarr = this.companys.sort((a,b)=> b.resgistrationNumber - a.resgistrationNumber);
this.companys = newarr
    }

    this.order = !this.order;
  }



 Search()
  {

if(this.name!=""){
  this.companys = this.companys.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });

}else if (this.name =="")
{
  this.ngOnInit();
}

    
  }


  private getCompanys()
  {
    this.companyService.getCompanysList().subscribe(data =>
    {
      this.companys = data;
      this.totalLength = data.length;

      console.log(data);
      this.toast.success({detail:"Success Message",summary:"Welcome to company list",duration:7000})

    },
    error => console.log(error)
    );
  }

   companyDetails(id:number)
    {
      this.router.navigate(['company-details',id ]);
    }


  updateCompany(id:number)
    {
      this.router.navigate(['update-company',id ]);
    }

    deleteCompany(id:number)
    {
      this.companyService.deleteCompany(id).subscribe(data =>
      {
        console.log(data);
        this.getCompanys();
      })
    }

}
