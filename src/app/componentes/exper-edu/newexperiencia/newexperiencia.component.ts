import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';


@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor( private sExperiencia: SexperienciaService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(
      (data) => {
        alert("Experiencia añadida correctamente.");
        this.router.navigate(['']);
      },
      (err) => {
        alert("No se pudo añadir la experiencia.");
        this.router.navigate(['']);
      }
    );
  }

}
