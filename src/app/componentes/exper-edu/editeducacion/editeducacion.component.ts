import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(
    private educacionServ: EducacionService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educacionServ.detail(id).subscribe(
      (data) => {
        this.edu = data;
      },
      (err) => {
        alert("No se pudo modificar la educación.");
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educacionServ.update(id, this.edu).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert("No se pudo modificar la educación.");
        this.router.navigate(['']);
      }
    );
  }

}
