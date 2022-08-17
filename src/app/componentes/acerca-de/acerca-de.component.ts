import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  textacercade ="full stack developer jr and data base administrator jr (SQL server)";
  mostrarinput ="none";
  onclick(){
    this.mostrarinput ="block";
  }
cambiartextoacercade( valor : string){
  this.textacercade = valor;
}

}
