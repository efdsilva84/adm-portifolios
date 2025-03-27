import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CadUserComponent } from './pages/cad-user/cad-user.component';
import { ListaUserComponent } from './pages/lista-user/lista-user.component';
import { CadUserCredencialComponent } from './pages/cad-user-credencial/cad-user-credencial.component';
import { EditStarbucksComponent } from './pages/edit-starbucks/edit-starbucks.component';
import { EBurgerComponent } from './pages/e-burger/e-burger.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'cad-user', component: CadUserComponent},
  {path: 'listar-user', component: ListaUserComponent},
  {path: 'cad-cred', component: CadUserCredencialComponent},
  {path:'edit-star', component: EditStarbucksComponent},
  {path:'e-burger', component: EBurgerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
