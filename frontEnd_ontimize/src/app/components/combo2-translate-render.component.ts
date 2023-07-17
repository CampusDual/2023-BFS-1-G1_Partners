import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OComboCustomRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'combo2-translate-render',
  templateUrl: './combo2-translate-render.component.html'
})
export class Combo2TranslateRenderComponent extends OComboCustomRenderer {
  // Se utiliza ViewChild para obtener una referencia al TemplateRef
  @ViewChild('templateref', { static: true }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector, private translateService: OTranslateService) {
    super(injector);
  }

  // Este método se invoca para obtener los datos del combo
  getComboData(value: any) {
    // Obtener la traducción correspondiente al valor del idioma
    let languageCombo2 = this.translateService.get(value.language);
    // Reemplazar el valor original del idioma con la traducción obtenida
    value.language = languageCombo2;

    // Devolver los datos del combo
    return languageCombo2;
  }
}
