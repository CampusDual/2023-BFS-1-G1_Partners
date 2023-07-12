import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OntimizeService, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  public isAdmin: boolean;
  private myRoleService: OntimizeService;
  private personalDocuments: OntimizeService;
  public selectedDocument: any;

  @ViewChild('table', { static: false }) public tableDocuments: OTableComponent;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector
  ) {
    this.myRoleService = this.injector.get(OntimizeService);
    this.personalDocuments = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    // Configuración inicial del servicio de documentos personales
    this.configurePersonalFilesService();
  }

  // Método para actualizar la tabla de documentos
  refreshTable(event) {
    this.tableDocuments.refresh();
  }
  // Navegar a la página de inicio de sesión
  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  // Configuración del servicio de roles de usuario
  configureUserRoleService() {
    const conf = this.myRoleService.getDefaultServiceConfiguration("userrole");
    this.myRoleService.configureService(conf);
  }
  // Configuración del servicio de documentos personales
  configurePersonalFilesService() {
    const confDocuments = this.personalDocuments.getDefaultServiceConfiguration('personalDocuments');
    this.personalDocuments.configureService(confDocuments);
  }
  // Acción 1: Navegar a la vista de detalle de un documento
  onAction1(id: number) {
    this.router.navigate(['/main/personal-area/personal-area-detail/' + id]);

  }
  // Método para manejar el evento de clic en la acción
  actionClick(event) {
    // Se realiza una consulta al servicio personalDocuments para obtener los datos del archivo correspondiente al evento de clic.
    this.personalDocuments.query({ id: event.id }, ['name', 'base64'], 'myPersonalFilesContent').subscribe(res => {
      if (res.data && res.data.length) {
        let filename = res.data[0].name;
        let base64 = res.data[0].base64;
        const src = `data:text/csv;base64,${base64}`;
        const link = document.createElement("a");
        link.href = src;
        link.download = filename;
        link.click();
        link.remove();
      }
    });

  }

  // Método para descargar un archivo ZIP con los documentos seleccionados
  downloadZip(event) {
    let files = this.tableDocuments.getSelectedItems();
    let documentsId = [];
    files.forEach(elemento => {
      documentsId.push(elemento.id);
    });
    // Se realiza una consulta al servicio personalDocuments para obtener los datos del archivo ZIP con los documentos seleccionados.
    this.personalDocuments.query({ ids: documentsId }, ['name', 'base64'], 'filesZip').subscribe(res => {
      if (res.data) {
        let filename = res.data.name;
        let base64 = res.data.base64;
        const src = `data:text/csv;base64,${base64}`;
        const link = document.createElement("a");
        link.href = src;
        link.download = filename;
        link.click();
        link.remove();
      }
    });
  }

}
