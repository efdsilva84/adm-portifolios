import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CadUserComponent } from './pages/cad-user/cad-user.component';
import { ListaUserComponent } from './pages/lista-user/lista-user.component';
import { CadUserCredencialComponent } from './pages/cad-user-credencial/cad-user-credencial.component';
import { EditStarbucksComponent } from './pages/edit-starbucks/edit-starbucks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CadUserComponent,
    ListaUserComponent,
    CadUserCredencialComponent,
    EditStarbucksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
