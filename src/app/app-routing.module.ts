import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/guard/auth.guard';
import { ListUserComponent } from './components/ListUsers/list-user/list-user.component';
import { MainComponentComponent } from './components/main/main-component/main-component.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
const routes: Routes = [


    {path: 'login', component: SigninComponent},
    {path: 'register', component: SignupComponent},
    {path: '', component: MainComponentComponent,
      children: [

        { path: 'listuser', component: ListUserComponent },
        { path: 'profile', component: UserProfileComponent }
    ]}];



  /*{ path: '', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'listuser', component: ListUserComponent },

];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
