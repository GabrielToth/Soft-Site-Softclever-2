import { Component, Input } from '@angular/core'

@Component({
  selector: 'campo-forms',
  templateUrl: 'campo-forms.component.html',
  styleUrls: ['campo-forms.component.css'],
})
export class CampoFORMS {
  @Input()
  Placeholder: string = 'placeholder'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
