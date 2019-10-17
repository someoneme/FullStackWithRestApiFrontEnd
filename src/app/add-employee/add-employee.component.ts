import { Component, OnInit } from '@angular/core';
import { HttpclientService, Employee } from '../service/httpclient.service';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("","","","");

  constructor(
    private httpClientService: HttpclientService, private router: Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
          // this.router.navigate(EmployeeComponent);
        });

  };

}
