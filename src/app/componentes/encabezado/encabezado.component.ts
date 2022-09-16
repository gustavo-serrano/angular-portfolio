import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","");

  constructor(public personaservice: PersonaService){}

  ngOnInit(): void {
    this.personaservice.getpersona().subscribe(data => {this.persona =data})
  }

}
  