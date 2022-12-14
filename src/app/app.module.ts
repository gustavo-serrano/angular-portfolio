import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperEduComponent } from './componentes/exper-edu/exper-edu.component';
import { IdiomaProyectoComponent } from './componentes/idioma-proyecto/idioma-proyecto.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { interceptorProvider } from './service/interceptorservice';
import { NewexperienciaComponent } from './componentes/exper-edu/newexperiencia/newexperiencia.component';
import { EditexperienciaComponent } from './componentes/exper-edu/editexperiencia/editexperiencia.component';
import { NeweducacionComponent } from './componentes/exper-edu/neweducacion.component';
import { EditeducacionComponent } from './componentes/exper-edu/editeducacion/editeducacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperEduComponent,
    IdiomaProyectoComponent,
    HomeComponent,
    LoginComponent,
    NewexperienciaComponent,
    EditexperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
