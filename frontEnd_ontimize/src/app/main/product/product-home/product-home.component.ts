import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTableComponent, OntimizeService } from 'ontimize-web-ngx';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';

@Component({
  selector: 'product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  public isAdmin: boolean;
  private myRoleService: OntimizeService;
  public selectedProduct: any;

  @ViewChild('table', {static: false }) public tableProducts: OTableComponent;


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


  refreshTable(event){
    this.tableProducts.refresh();
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  configureUserRoleService() {
    const conf = this.myRoleService.getDefaultServiceConfiguration("userrole");
    this.myRoleService.configureService(conf);
  } 
    
  onAction1(id: number) {
    this.router.navigate(['/main/product-home/form-product-detail/'+id]);
  }

}
