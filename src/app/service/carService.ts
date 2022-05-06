import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modal/car';
@Injectable({
  providedIn: 'root'
})
export class carService {

  baseUrl = "http://localhost:8089";
  // getCarById/{car-id}
  constructor(private _http: HttpClient) { }

  getCars(): Observable<string[]> {
    return this._http.get<string[]>(this.baseUrl + "/retrieve-all-cars");
  }

  getCarById(id: any): Observable<Car> {
    return this._http.get<Car>(this.baseUrl + "/getCarById/" + id);
  }

  addCar(car: Car) {
    return this._http.post<Car>(this.baseUrl + "/add-car", car);
  }

  deleteCar(id: any): Observable<Car> {
    const url = this.baseUrl + '/remove-car/' + id;
    return this._http.delete<Car>(url);
  }

  updateCar(value: any): Observable<Object> {
    return this._http.put(this.baseUrl + "/update-car", value);
  }

  getCarByModel() {
    return this._http.get<Car[]>(this.baseUrl + '/getCarByModel');
  }

  getCarByModelNumber() {
    return this._http.get<Car[]>(this.baseUrl + '/getCarByModelNumber');
  }
}