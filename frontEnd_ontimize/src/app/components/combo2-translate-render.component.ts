import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OComboCustomRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'combo2-translate-render',
  templateUrl: './combo2-translate-render.component.html'
})

export class Combo2TranslateRenderComponent extends OComboCustomRenderer {

  @ViewChild('templateref', {static: true}) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector, private translateService: OTranslateService ) {
    super(injector);
  }

 getComboData(value: any) {
    
    let languageCombo2 = this.translateService.get(value.language);
    value.language = languageCombo2;

    return languageCombo2;
  }








}