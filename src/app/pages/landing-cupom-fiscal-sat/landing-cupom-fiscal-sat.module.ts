import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingCupomFiscalSAT } from './landing-cupom-fiscal-sat.component';

const routes = [
    {
        path: '',
        component: LandingCupomFiscalSAT,
    },
];

@NgModule({
    declarations: [LandingCupomFiscalSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingCupomFiscalSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingCupomFiscalSatModule {}
