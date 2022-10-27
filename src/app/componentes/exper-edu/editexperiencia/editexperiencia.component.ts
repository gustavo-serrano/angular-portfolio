import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  exp: Experiencia = null;

  constructor(private sExperiencia: SexperienciaService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) => {
        this.exp = data;
      },
      (err) => {
        alert("No se pudo modificar la experiencia.");
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.exp).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert("No se pudo modificar la experiencia.");
        this.router.navigate(['']);
      }
    );
  }




}
