import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { PreventLoggedInAccessGuard } from '../app/prevent-logged-in-access.guard';

export const routes: Routes = [
  {path: " ", Component: HomeComponent},
  {path: "contact", Component: ContactComponent},
  {
    path: "users", 
    canActivate: [PreventLoggedInAccessGuard], 
    Children: [
      { path: "", Component: UsersListComponent,},
      {path: "users/add", Component: UsersAddComponent},
      {path: "users/:id", Component: UsersEditComponent},
   ]
  },
  {path: "404", Component: PageNotFoundComponent},
  {path: "**", redirectTo: "404", FullMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
