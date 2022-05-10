import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservationtravel } from '../modal/reservationtravel'; 



@Injectable({
    providedIn: 'root'
  })
export class reservationService {

    reservationUrl ="http://localhost:8089/SpringMVC";

    constructor(private _http:HttpClient) {}

    getreservation(){
        return this._http.get<reservationtravel[]>(this.reservationUrl+"/retrieve-all-reservations");
    }



addreservation(reservation:any){
    console.log('my travel ', reservation);
    return this._http.post<reservationtravel>("http://localhost:8089/SpringMVC/add-reservation",reservation);
}

deletereservation (id: any):Observable<reservationtravel>  {
    const url = this.reservationUrl+"/remove-reservation"+ id;
    return this._http.delete<reservationtravel>(url);

  
  }



  updatereservationtravel (value: any):Observable<Object>  {

    return this._http.put(this.reservationUrl+"/modify-reservation",value);
  }

  updatereservationtravelByidByid (id: any):Observable<reservationtravel>  {

    return this._http.get<reservationtravel>(this.reservationUrl+"/retrieve-reservation"+id);
  }

  getReservationByid (id: any):Observable<reservationtravel>  {

    return this._http.get<reservationtravel>(this.reservationUrl+"/retrieve-reservation/"+id);
  }

 



}