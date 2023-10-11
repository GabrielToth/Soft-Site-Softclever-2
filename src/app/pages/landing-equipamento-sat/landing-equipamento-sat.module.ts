import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingEquipamentoSAT } from './landing-equipamento-sat.component';

const routes = [
    {
        path: '',
        component: LandingEquipamentoSAT,
    },
];

@NgModule({
    declarations: [LandingEquipamentoSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingEquipamentoSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEquipamentoSatModule {}
