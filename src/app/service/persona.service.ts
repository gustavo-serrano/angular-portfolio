import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { persona } from "../model/persona.model";



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url ='https://back-porf.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public getpersona(): Observable<persona>{
    return this.http.get<persona>(this.url+ 'traer/perfil');
   }

}

