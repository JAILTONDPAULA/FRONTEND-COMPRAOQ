import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovoItemComponent } from './pages/novo-item/novo-item.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'novo-item',
    component: NovoItemComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
