import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { feedback } from '../Model/feedback';
import { company } from '../Model/company';
import { calendar } from '../Model/calender';
import { calendarevent } from '../Model/calendarevent';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
   constructor(private  http: HttpClient) { }
   public getListOfUser(){
    return this.http.get<any>("http://localhost:8090/SpringMVC/getReclbyUser");
    
  }
  public getuser(id :number){
    return this.http.get<feedback>(" http://localhost:8090/SpringMVC/getAll?page="+id);
    
  }
  public getcompany(){
    return this.http.get<company>(" http://localhost:8090/SpringMVC/getcompany");
    
  }
   UpdateFeedback(id:number,feed : feedback){
   return this.http.put<feedback>("http://localhost:8090/SpringMVC/modifyFeedBack/"+id,feed);
  }
  deleteFeed(id:number){
return this.http.delete("http://localhost:8090/SpringMVC/remove/"+id );
  }
  getFeedbackByid(id :number){
return this.http.get<feedback>("http://localhost:8090/SpringMVC/getByid/"+id);
  }
  createFeedback(id :number,feed : feedback){
    return this.http.post<feedback>("http://localhost:8090/SpringMVC/addFeedBack/"+id,feed);

  }
  getCalendar(id :number){
    return this.http.get<any>("http://localhost:8090/SpringMVC/calendars/"+id);

  }
  getallCalendar(){
    return this.http.get<any>("http://localhost:8090/SpringMVC/calendars");

  }
  ExportPDFByid(id :number){
    return this.http.get<feedback>("http://localhost:8090/SpringMVC/exportPDF/"+id);
      }
      ExportPDF(){
        return this.http.get<feedback>("http://localhost:8090/SpringMVC/exportPDF/");
          }
      Paging(id :number){
        return this.http.get<feedback>("http://localhost:8090/SpringMVC/list?page="+id);
          }
          AddCalendar(id:number,cal : calendar){
            return this.http.post<calendar>("http://localhost:8090/SpringMVC/calendars/add/"+id,cal);
          }
          getUserByCalendar(id:number)
          {
            
return this.http.get<feedback>("http://localhost:8090/SpringMVC/CalenderByUser/"+id);

          }
}
