import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private educacionServ: EducacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.descripcionE);
    this.educacionServ.save(edu).subscribe(
      (data) => {
        alert("Educación añadida correctamente.");
        this.router.navigate(['']);
      },
      (err) => {
        alert("No se pudo añadir la educación.");
        this.router.navigate(['']);
      }
    );
  }

}
