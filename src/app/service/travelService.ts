import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelModel } from '../modal/TravelModel';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
const httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }

@Injectable({
    providedIn: 'root'
  })
export class travelService {

    travelsUrl ="http://localhost:8089/SpringMVC";

    constructor(private _http:HttpClient) {}

    getTravels(){
        return this._http.get<TravelModel[]>(this.travelsUrl+"/retrieve-all-travels");
    }

    getTravelByMissiontype() {
      return this._http.get<TravelModel[]>(this.travelsUrl + '/getTravelByMissiontype');
    }

    getTravelByNumber() {
      return this._http.get<TravelModel[]>(this.travelsUrl + '/getTravelByNumber');
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



   /* Upload image */

   uploadImage(file : File , filename : string) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);

    const url = `${this.travelsUrl + "/image/upload"}`

    return this._http.post(url , imageFormData)
  }

  /* Load image */

  loadImage(id : number) {
    const url = `${this.travelsUrl + "/image/get/info"}/${id}`
    return this._http.get(url) 
  }

   
  /* File uploading */

  upload(file : File , user : String):Observable<HttpEvent<any>>{
    const formData = new FormData();
    formData.append('file' , file);

    const url = `${this.travelsUrl+"/file/upload"}/${user}`

    const req = new HttpRequest('POST', url , formData, {
		  reportProgress: true,
		  responseType: 'json'
		});

    return this._http.request(req)
  }

  getFile(name : String): Observable<HttpEvent<Blob>> {
    const url = `${this.travelsUrl+"/file/load"}/${name}`
		return this._http.get(url , {
      reportProgress: true ,
      observe: 'events' ,
      responseType : 'blob'
    });
	}





  deleteImage(idImage : number) {
    const url = `${this.travelsUrl + "/image/delete"}/${idImage}`
    return this._http.delete(url)
  }

}