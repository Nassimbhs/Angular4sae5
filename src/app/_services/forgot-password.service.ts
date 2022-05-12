import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  readonly API_URL = 'http://localhost:8089/SpringMVC/AppUser'
  constructor(private httpClient: HttpClient) { }
  forgotPassword(userName: string) {
    const forget = { 'username': userName };

    return this.httpClient.post(this.API_URL + '/forgot/Djo',null,{params:forget});

  }

  setPassword(newpassword:string,token:string){
    const headers={'token':token,'newpassword':newpassword}
    return this.httpClient.post(this.API_URL +'/reset/{token}/azerty',null,{params:headers});

  }

}
