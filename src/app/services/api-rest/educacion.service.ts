import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url2: string = "https://api-rest-portfolio-arpr.herokuapp.com/api";
  //url: string = "https://error-pueblada-api.herokuapp.com/api/login"
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/educacion/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/educacion');
	}
  //terminar en algun momento
  update(id: number, educacion: any): Observable<any>{
    return this.http.put(this.url2 + `/educacion/${id}`, educacion);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/educacion/${id}`);
   
  }
 save(educacion:any) : Observable<any>{
   return this.http.post(this.url2 + `/educacion/`, educacion);
 }
}


