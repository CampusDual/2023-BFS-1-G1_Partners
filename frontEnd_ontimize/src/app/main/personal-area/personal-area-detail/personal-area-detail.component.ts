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
    const conf = this.personalDocumentService.getDefaultServiceConfiguration('products');
    this.personalDocumentService.configureService(conf);
  }

  actionClick(event){
    this.personalDocumentService.query({id:event.id}, ['name','base64'], 'fileContent').subscribe(res => {
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


}