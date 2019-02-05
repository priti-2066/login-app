import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] =
[
      {
            id: 1,
            name: 'ted',
            role: 's/w',
            address: 'madhapur',
            dob: ' dec ',
            pwdsetup: 123,
      },
      {
        id: 2,
            name: 'kim',
            role: 'ux',
            address: 'kondapur',
            dob: ' mar ',
            pwdsetup: 345,
      },
      {
        id: 1,
            name: 'mike',
            role: 'ui',
            address: 'kothaguda',
            dob: ' sep ',
            pwdsetup: 678,
      }];
      @Input() employee: EmployeeComponent;

ngOnInit() {
}
}

