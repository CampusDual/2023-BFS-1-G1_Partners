import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home-partner',
  templateUrl: './home-partner.component.html',
  styleUrls: ['./home-partner.component.scss']
})
export class HomePartnerComponent implements OnInit {

  public isAdmin: boolean;
  private myRoleService: OntimizeService;


  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector
  ) {
    this.myRoleService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.configureUserRoleService();
    this.myRoleService.query({}, ["rolename"], "myRole").subscribe(
      response => {
        if (response.data && response.data.length) {
          let rol = response.data[0].rolename;
          if (rol == "admin") {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }else{
          this.isAdmin = false;
        }
      },
      error => console.error(error)
    );
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  configureUserRoleService() {
    const conf = this.myRoleService.getDefaultServiceConfiguration("userrole");
    this.myRoleService.configureService(conf);
  }

}
