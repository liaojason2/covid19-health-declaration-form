import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantRegisterComponent } from '../app/merchant-register/merchant-register.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { UserRegisterComponent } from '../app/user-register/user-register.component';
//import { SignInComponent } from '../app/components/sign-in/sign-in.component';
//import { CovidMapComponent } from '../app/covid-map/covid-map.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'marchantregister', component: MerchantRegisterComponent },
  { path: 'userregister', component: UserRegisterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }