import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/guard/auth.guard';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { MainComponentComponent } from './components/main/main-component/main-component.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
const routes: Routes = [


    {path: 'login', component: SigninComponent},
    {path: 'register', component: SignupComponent},
    {path: '', component: MainComponentComponent,canActivate: [AuthGuard],
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'listuser', component: ListUserComponent,canActivate: [AuthGuard] },
        { path: 'profile', component: UserProfileComponent },
        { path: 'dashboard', component: DashboardComponent }
    ]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
