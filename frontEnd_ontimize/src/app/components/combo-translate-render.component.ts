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

  // Método para obtener los datos del combo
  getComboData(value: any) {
    // Obtiene la traducción del valor seleccionado en el combo basado en el servicio de traducción
    let languageCombo = this.translateService.get(value.country);
    value.country = languageCombo;

    return languageCombo;
  }
}
