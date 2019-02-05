import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { SelectItemsComponent } from './components/select-items/select-items.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'select-items', component: SelectItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
