import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url2: string = "https://api-rest-portfolio-arpr.herokuapp.com/api/login";
  //url: string = "https://error-pueblada-api.herokuapp.com/api/login"
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/proyectos/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/proyectos');
	}
  //terminar en algun momento
  update(id: number, proyecto: any): Observable<any>{
    return this.http.put(this.url2 + `/proyectos/${id}`, proyecto);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/proyectos/${id}`);
  }
 save(proyecto:any) : Observable<any>{
   return this.http.post(this.url2 + `/proyectos/`, proyecto);
 }
}
