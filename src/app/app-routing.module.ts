import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPageComponent } from './users/user/user-page/user-page.component';
import { EditUserComponent } from './users/user/edit-user/edit-user.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyPageComponent } from './companies/company/company-page/company-page.component';
import { CompanyEditComponent } from './companies/company/company-edit/company-edit.component';
import { FeedbackPageComponent } from './feedbacks/feedback-page/feedback-page.component';
import { LoginComponent } from './admin-login/admin-login.component';


// TODO remake routing after making the front end site using dashboard and main sites
const routes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserPageComponent },
      { path: 'users/:id/edit', component: EditUserComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/:id', component: CompanyPageComponent },
      { path: 'companies/:id/edit', component: CompanyEditComponent },
      {
        path: 'feedbacks', component: FeedbacksComponent, children: [
          { path: 'page', component: FeedbackPageComponent }
        ]
      },
      { path: '**', redirectTo: 'not-found' }
    ]
  },
  { path: '', component: UnderConstructionComponent, pathMatch: 'full' },
  { path: 'admin-login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
