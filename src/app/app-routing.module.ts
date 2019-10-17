import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [

	{ 
		path : 'employees', component: EmployeeComponent
	},
	{ 
		path : 'addEmployee', component: AddEmployeeComponent
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
