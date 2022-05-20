import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { MainComponentComponent } from './components/main/main-component/main-component.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { TableOfUserComponent } from './components/user/list/table-of-user/table-of-user.component';
import { UserdetailsComponent } from './components/user/UserDetails/userdetails/userdetails.component';
import { DefaultImagePipe } from './components/user/pipe/default-image.pipe';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ListUserComponent,
    MainComponentComponent,
    DashboardComponent,
    TableOfUserComponent,
    UserdetailsComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
