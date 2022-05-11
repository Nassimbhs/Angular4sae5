import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Invitation } from 'src/app/Model/invitation';
import {Company } from 'src/app/Model/company';
import {Employee } from 'src/app/Model/employee';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseURL = "http://localhost:8089/SpringMVC/servlet/Display-Invitation";
  constructor(private httpClient: HttpClient) { }

  getInvitationsList(): Observable<Invitation[]>{

    return this.httpClient.get<Invitation[]>(`${this.baseURL}`);
  }


  sendInvitation( idc: number , ide: number,invitation: Invitation ): Observable<object>{

    return this.httpClient.post(`${this.baseURL}/${idc}/${ide}`,invitation);
  }

  getInvitationById(id: number): Observable<Invitation>
  {
    return this.httpClient.get<Invitation>(`${this.baseURL}/${id}`);
  }

  updateInvitation(id: number,invitation: Invitation): Observable<object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,invitation);
}

deleteInvitation(id: number): Observable<object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}



}
