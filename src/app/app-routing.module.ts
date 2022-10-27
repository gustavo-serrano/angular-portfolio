import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/exper-edu/editeducacion/editeducacion.component';
import { EditexperienciaComponent } from './componentes/exper-edu/editexperiencia/editexperiencia.component';
import { NeweducacionComponent } from './componentes/exper-edu/neweducacion.component';
import { NewexperienciaComponent } from './componentes/exper-edu/newexperiencia/newexperiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
{path:'',component: HomeComponent},
{path:'login', component:LoginComponent},
{path: '', redirectTo:'login', pathMatch:'full'},
{path:'nuevaexp', component:NewexperienciaComponent},
{path:'editexp/:id', component:EditexperienciaComponent},
{path: 'nuevaedu', component:NeweducacionComponent},
{path:'editedu/:id', component:EditeducacionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
