import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit() {
this.employee = new Employee();
this.id = this.route.snapshot.params['id'];

this.employeeService.getEmployeeById(this.id).subscribe(data => {
this.employee = data;
 
});
 

  }

  /* updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      console.log(data);

    this.employee = new Employee();
    this.gotoList();   
    },
    error => console.log(error));
  }

  */
  goToEmployeeList()
  {
   this.router.navigate(['/List-employee']);
   
  }


  onSubmit()
  {
    
    this.employeeService.updateEmployee(21, this.employee).subscribe((data: any)  =>{
      this.goToEmployeeList();
      console.log(data)

    }
    , (error: any) => console.log(error)
    );
  }

  

}
