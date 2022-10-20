import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
   persona: persona = new persona("","","");
  //public personaservice: PersonaService,private router:Router
  isLogged = false;

  constructor( private router:Router, private tokenService: TokenService,public personaservice: PersonaService,){}
 
  ngOnInit(): void {
    this.personaservice.getpersona().subscribe(data => {this.persona =data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

 login(){
  this.router.navigate(['/login'])
 }
}
  
