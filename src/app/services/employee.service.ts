import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL = "http://localhost:8090/SpringMVC/Display-Employee";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee ): Observable<object>{

    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }


updateEmployee(id: number,employee: Employee): Observable<object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,employee);
}

deleteEmployee(id: number): Observable<object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


getEmployeesPagination(page:number)
{
  return this.httpClient.get(this.baseURL+ '/list?page=' +page);
}



  //@CrossOrigin (origins="http://localhost:4200")
//@RestController
//public class Product RestController {

}

