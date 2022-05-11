import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
dat!:any;
  constructor(private employeeService: EmployeeService,
    private router:Router ,private toast : NgToastService ) { }

  ngOnInit(): void {

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
this.dat=data;
    this.goToEmployeeList();
    this.toast.success({detail:"Success Message",summary:"Added successfully ",duration:7000})   
    },
    error => console.log(error)
    );
  }

  goToEmployeeList()
  {
   this.router.navigate(['/List-employee']);
   
  }

  onSubmit()
  {
     this.saveEmployee();
  }

}
