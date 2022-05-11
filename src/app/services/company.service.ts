import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { company } from '../Model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

private baseURL = "http://localhost:8090/SpringMVC/Display-Company";

  constructor(private httpClient: HttpClient) { }



  getCompanysList(): Observable<company[]>{

    return this.httpClient.get<company[]>(`${this.baseURL}`); 
  }

  createCompany(company: company ): Observable<object>{

    return this.httpClient.post(`${this.baseURL}`,company);
  }

  getCompanyById(id: number): Observable<company>
  {
    return this.httpClient.get<company>(`${this.baseURL}/${id}`);
  }

  updateCompany(id: number,company: company): Observable<object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,company);
}

deleteCompany(id: number): Observable<object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


}
