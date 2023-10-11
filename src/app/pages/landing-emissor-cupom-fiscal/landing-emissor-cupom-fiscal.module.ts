import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingEmissorCupomFiscal } from './landing-emissor-cupom-fiscal.component';

const routes = [
    {
        path: '',
        component: LandingEmissorCupomFiscal,
    },
];

@NgModule({
    declarations: [LandingEmissorCupomFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingEmissorCupomFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorCupomFiscalModule {}
