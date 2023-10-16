import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'cupom-fiscal-sat',
    templateUrl: 'cupom-fiscal-sat.component.html',
    styleUrls: ['cupom-fiscal-sat.component.scss'],
})
export class CupomFiscalSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Cupom-fiscal-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Cupom-fiscal-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
