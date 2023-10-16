import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EquipamentoSAT } from './equipamento-sat.component';

const routes = [
    {
        path: '',
        component: EquipamentoSAT,
    },
];

@NgModule({
    declarations: [EquipamentoSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EquipamentoSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EquipamentoSatModule {}
