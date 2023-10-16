import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'equipamento-sat',
    templateUrl: 'equipamento-sat.component.html',
    styleUrls: ['equipamento-sat.component.scss'],
})
export class EquipamentoSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Equipamento-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Equipamento-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
