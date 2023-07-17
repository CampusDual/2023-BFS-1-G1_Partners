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

  public isAdmin: boolean; // Variable que indica si el usuario es administrador o no
  private myRoleService: OntimizeService; // Servicio de Ontimize para el rol del usuario
  public selectedProduct: any; // Producto seleccionado

  @ViewChild('table', { static: false }) public tableProducts: OTableComponent; // Referencia a la tabla de productos

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector
  ) {
    this.myRoleService = this.injector.get(OntimizeService); // Inyección del servicio de rol de usuario
  }

  ngOnInit() {
    this.configureUserRoleService(); // Configuración del servicio de rol de usuario
    this.myRoleService.query({}, ["rolename"], "myRole").subscribe(
      response => {
        if (response.data && response.data.length) {
          let rol = response.data[0].rolename;
          if (rol == "admin") {
            this.isAdmin = true; // El usuario es administrador
          } else {
            this.isAdmin = false; // El usuario no es administrador
          }
        } else {
          this.isAdmin = false; // No se obtuvo información del rol, asumimos que el usuario no es administrador
        }
      },
      error => console.error(error)
    );
  }

  refreshTable(event) {
    this.tableProducts.refresh(); // Actualizar la tabla de productos
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute }); // Navegar a la página de inicio de sesión
  }

  configureUserRoleService() {
    const conf = this.myRoleService.getDefaultServiceConfiguration("userrole");
    this.myRoleService.configureService(conf); // Configurar el servicio de rol de usuario
  }

  onAction1(id: number) {
    this.router.navigate(['/main/product-home/form-product-detail/' + id]); // Navegar a la página de detalle del producto
  }

}
