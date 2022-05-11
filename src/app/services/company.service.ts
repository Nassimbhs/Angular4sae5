import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Company } from 'src/app/Model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

private baseURL = "http://localhost:8089/SpringMVC/servlet/Display-Company";

  constructor(private httpClient: HttpClient) { }



  getCompanysList(): Observable<Company[]>{

    return this.httpClient.get<Company[]>(`${this.baseURL}`); 
  }

  createCompany(company: Company ): Observable<object>{

    return this.httpClient.post(`${this.baseURL}`,company);
  }

  getCompanyById(id: number): Observable<Company>
  {
    return this.httpClient.get<Company>(`${this.baseURL}/${id}`);
  }

  updateCompany(id: number,company: Company): Observable<object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,company);
}

deleteCompany(id: number): Observable<object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


}
