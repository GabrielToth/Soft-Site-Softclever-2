import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSoftwareERPDeGestao } from './landing-software-erp-de-gestao.component';

const routes = [
    {
        path: '',
        component: LandingSoftwareERPDeGestao,
    },
];

@NgModule({
    declarations: [LandingSoftwareERPDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSoftwareERPDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareErpDeGestaoModule {}
