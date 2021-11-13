import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path: 'acceuil', component:HomeComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'auth/register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
