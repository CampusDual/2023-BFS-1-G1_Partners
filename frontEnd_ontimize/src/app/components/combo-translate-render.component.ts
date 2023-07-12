import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OComboCustomRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'combo-translate-render',
  templateUrl: './combo-translate-render.component.html'
})

export class ComboTranslateRenderComponent extends OComboCustomRenderer {

  @ViewChild('templateref', {static: true}) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector, private translateService: OTranslateService ) {
    super(injector);
  }

 getComboData(value: any) {
    
    let languageCombo = this.translateService.get(value.country);
    value.country = languageCombo;

    return languageCombo;
  }








}