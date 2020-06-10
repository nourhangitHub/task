import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PreventLoggedInAccessGuard } from './prevent-logged-in-access.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UsersEditComponent,
    UsersAddComponent,
    UsersListComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PreventLoggedInAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
