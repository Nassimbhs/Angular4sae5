import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCritere } from '../modal/SearchCritere'; 

@Injectable({
  providedIn: 'root'
})
export class SearchcritereService {

  searchUrl ="http://localhost:8089/SpringMVC";
  constructor(private _http:HttpClient) { }




  getSearchByid ():Observable<SearchCritere>  {


    return this._http.get<SearchCritere>(this.searchUrl+"/retrieve-SearchCritere/");
  }
}
