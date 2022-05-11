 import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {Router} from '@angular/router';
import { Invitation } from 'src/app/Model/invitation';
import { InvitationService } from 'src/app/services/invitation.service';
 
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[] ;

  firstName : any;

  totalLength: any;
  page:number=1;

  order: any;
  a: any;
  b: any;

  /*page:number=0;
  private employeees: Array <any>;
   pages:      Array <number>;

  pageOfItems: Array<Employee>;
  pageSize: number = 6;
  */


  constructor(private employeeService : EmployeeService,
    private router:Router,private toast : NgToastService) { } //,private toast : NgToastService

  ngOnInit(): void {

    this.getEmployees();

  }


  sortData()
  {
    if (this.order)
    {
      let newarr = this.employees.sort((a,b) => a.id - b.id);
      this.employees = newarr
    }

    else 
    {
let newarr = this.employees.sort((a,b)=> b.id - a.id);
this.employees = newarr
    }

    this.order = !this.order;
  }

  sortAge()
  {
    if (this.order)
    {
      let newarr = this.employees.sort((a,b) => a.age - b.age);
      this.employees = newarr
    }

    else 
    {
let newarr = this.employees.sort((a,b)=> b.age - a.age);
this.employees = newarr
    }

    this.order = !this.order;
  }




  Search()
  {

if(this.firstName !=""){
  this.employees = this.employees.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    });

}else if (this.firstName =="")
{
  this.ngOnInit();
}

    
  }

  /*setPage(i:any,event:any)
  {
    event.preventDefault();
    this.page=i;
    this.getEmployeesPagination();
  }
  */


  /*getEmployeesPagination()
  {
    this.employeeService.getEmployeesPagination(this.page).subscribe(data=>{
     // console.log(data);

     this.employeees=data['content'];
     this.pages= new Array(data['totalPages']);
    },
    (error)=>

    {
      console.log(error.error.message);
    }
    );
  }
  */



  /*pageClick(pageOfItems: Array<Employee>)
  {
    this.pageOfItems = pageOfItems;
  }
  */

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=> { 
    this.employees = data;
    this.totalLength = data.length;
   this.toast.success({detail:"Success Message",summary:"Welcome to employee list",duration:7000})
    }
      )
    }

    employeeDetails(id:number)
    {
      this.router.navigate(['employee-details',id ]);
    }



    updateEmployee(id:number)
    {
      this.router.navigate(['update-employee',id ]);
    }



    deleteEmployee(id:number)
    {
      this.employeeService.deleteEmployee(id).subscribe(data =>
      {
        console.log(data);
        this.getEmployees();
      })
    }
  }


