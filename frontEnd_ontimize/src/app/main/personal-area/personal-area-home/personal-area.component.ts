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

  @ViewChild('table', {static: false }) public tableDocuments: OTableComponent;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector
  ) {
    this.myRoleService = this.injector.get(OntimizeService);
    this.personalDocuments = this.injector.get(OntimizeService);
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
    this.tableDocuments.refresh();
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  configureUserRoleService() {
    const conf = this.myRoleService.getDefaultServiceConfiguration("userrole");
    this.myRoleService.configureService(conf);
  } 
    
  onAction1(id: number) {
    this.router.navigate(['/main/personal-area/personal-area-detail/'+id]);

  }
  
  actionClick(event) {
    const confDocuments = this.personalDocuments.getDefaultServiceConfiguration('personalDocuments');
    this.personalDocuments.configureService(confDocuments);
    
    const fileIds = [this.tableDocuments.getSelectedItems()]; // Reemplaza con los IDs de los archivos que deseas descargar
    
    this.personalDocuments.query({ id: fileIds }, ['name', 'base64'], 'myPersonalFilesContent').subscribe(res => {
      if (res.data && res.data.length) {
        res.data.forEach(file => {
          let filename = file.name;
          let base64 = file.base64;
          const src = `data:text/csv;base64,${base64}`;
          const link = document.createElement("a");
          link.href = src;
          link.download = filename;
          link.click();
          link.remove();
        });
      }
    });
  }
  
    
  

  downloadZip(event){
    this.tableDocuments.getSelectedItems();
  }

}
