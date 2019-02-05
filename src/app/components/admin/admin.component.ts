import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employeeList = ['Ted', 'Kim', 'Mike'];
      @Output()
      selectedParam: EventEmitter<number> = new EventEmitter();
      username: any;
    password: any;
  name: any;
  role: any;
      constructor(private route: ActivatedRoute, private router: Router) { }

  employees: any[] =
  [
        {
              id: 1,
              name: 'ted',
              role: 's/w',
              address: 'hyd',
              dob: 'dec',
              pwdsetup: '345'
        },
        {
          id: 2,
              name: 'kim',
              role: 'ux',
              address: 'guntur',
              dob: 'apr',
              pwdsetup: '567'
        },
        {
          id: 1,
              name: 'mike',
              role: 'ui',
              address: 'vzg',
              dob: 'sep',
              pwdsetup: '890'
        }];

  ngOnInit() {
      merge(this.route.queryParams)
      .subscribe( params => {
          this.loadRoute(params);
      });
  }
  loadRoute(params) {
      if ('name' in params) {
        this.name = params.name;
      }
      if ('role' in params) {
        this.role = params.role;
      }
}

  editEmployee() {
    this.router.navigate(['/employee']);
  }
  employeeDetail(event: any) {
    this.selectedParam.emit(event.target.value);
    this.router.navigate(['/admin'], { queryParams: {name: this.name, role: this.role}});
  }
  }
