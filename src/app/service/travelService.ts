import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelModel } from '../modal/TravelModel';


@Injectable({
    providedIn: 'root'
  })
export class travelService {

    travelsUrl ="http://localhost:8089/SpringMVC";

    constructor(private _http:HttpClient) {}

    getTravels(){
        return this._http.get<TravelModel[]>(this.travelsUrl+"/retrieve-all-travels");
    }



addTravel(travel:any){
    console.log('my travel ', travel);
    return this._http.post<TravelModel>("http://localhost:8089/SpringMVC/add-Travel",travel);
}

deleteTravel (id: any):Observable<TravelModel>  {
    const url = this.travelsUrl+"/remove-travel/"+ id;
    return this._http.delete<TravelModel>(url);

  
  }

  updateTravel (value: any):Observable<Object>  {

    return this._http.put(this.travelsUrl+"/modify-travel",value);
  }

  updateTravelByid (id: any):Observable<TravelModel>  {

    return this._http.get<TravelModel>(this.travelsUrl+"/retrieve-travel/"+id);
  }

  getTravel (value: any):Observable<Object>  {

    return this._http.get(this.travelsUrl+"/retrieve-travel",value);
  }


  getTravelByid (id: any):Observable<TravelModel>  {

    return this._http.get<TravelModel>(this.travelsUrl+"/retrieve-travel/"+id);
  }

}