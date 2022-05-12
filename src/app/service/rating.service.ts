import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../modal/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  RatingUrl='http://localhost:8089/SpringMVC'
  constructor(private _http:HttpClient) {}
  getrating(){
    return this._http.get<Rating[]>(this.RatingUrl+"/retrieve-all-ratings");
}



addrating(rating:any){
return this._http.post<Rating>("http://localhost:8089/SpringMVC/add-rating",rating);
}



deletereservation (id: any):Observable<Rating>  {
const url = this.RatingUrl+"/remove-reservation"+ id;
return this._http.delete<Rating>(url);
}

updateRating (value: any):Observable<Object>  {

return this._http.put(this.RatingUrl+"/modify-reservation",value);
}

updateRatingByid (id: any):Observable<Rating>  {

return this._http.get<Rating>(this.RatingUrl+"/retrieve-reservation"+id);
}

getRatingByUserTrip (idUser: Number,idTrip: Number):Observable<Rating>  {

return this._http.get<Rating>(this.RatingUrl+"/retrieve-rating-user/"+idUser+'/'+idTrip);
}

}
