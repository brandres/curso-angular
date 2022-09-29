import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  { path: 'home', component: BookDetailsComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'add-user', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
