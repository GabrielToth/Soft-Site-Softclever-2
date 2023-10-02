import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrigadoComponent } from './obrigado.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: "",
    component: ObrigadoComponent,
  },
];

@NgModule({
  declarations: [ObrigadoComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [ObrigadoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ObrigadoModule { }
