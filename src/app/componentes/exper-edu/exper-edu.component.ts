import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exper-edu',
  templateUrl: './exper-edu.component.html',
  styleUrls: ['./exper-edu.component.css']
})
export class ExperEduComponent implements OnInit {
  exp: Experiencia[] = [];
  educacion: Educacion[] = [];

  constructor(private sExperiencia: SexperienciaService, private tokenServ: TokenService,private educacions:EducacionService) { }

 
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    
    if(this.tokenServ.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data=> {this.exp = data;}),
    this.cargarEducacion();
    
    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia.");
        }
      )
    }
  }
  cargarEducacion(): void {
    this.educacions.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  delette(id?: number) {
    if (id != undefined) {
      this.educacions.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert("No se pudo borrar la educación.");
        }
      );
    }
  }

}
