import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-personal-area-detail',
  templateUrl: './personal-area-detail.component.html',
  styleUrls: ['./personal-area-detail.component.css']
})
export class PersonalAreaDetailComponent implements OnInit {

  protected personalDocumentService: OntimizeService;

  constructor(public injector: Injector) {
    this.personalDocumentService = this.injector.get(OntimizeService);

  }

  ngOnInit() {
    // Se obtiene la configuración predeterminada del servicio personalDocuments y se configura el servicio personalDocumentService con esta configuración.
    const conf = this.personalDocumentService.getDefaultServiceConfiguration('personalDocuments');
    this.personalDocumentService.configureService(conf);
  }

  // Método para manejar el evento de clic en la acción
  actionClick(event) {
    // Se realiza una consulta al servicio personalDocumentService para obtener los datos del archivo correspondiente al evento de clic.
    this.personalDocumentService.query({ id: event.id }, ['name', 'base64'], 'myPersonalFilesContent').subscribe(res => {
      if (res.data && res.data.length) {
        // Si se encuentran datos, se extrae el nombre del archivo y el contenido en base64.
        let filename = res.data[0].name;
        let base64 = res.data[0].base64;
        // Se crea un enlace temporal para descargar el archivo.
        const src = `data:text/csv;base64,${base64}`;
        const link = document.createElement("a");
        link.href = src;
        link.download = filename;
        link.click();
        link.remove();
      }
    });

  }

  // Método para manejar la ejecución de la acción desde el menú contextual
  onExecute(event: any) {
    // Se realiza una consulta al servicio personalDocumentService para obtener los datos del archivo correspondiente a la acción ejecutada.
    this.personalDocumentService.query({ id: event.id }, ['name', 'base64'], 'myPersonalFilesContent').subscribe(res => {
      if (res.data && res.data.length) {
        // Si se encuentran datos, se extrae el nombre del archivo y el contenido en base64.
        let filename = res.data[0].name;
        let base64 = res.data[0].base64;
        // Se crea un enlace temporal para descargar el archivo.
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