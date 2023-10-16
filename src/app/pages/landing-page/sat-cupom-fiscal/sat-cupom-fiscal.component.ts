import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sa-cupom-fiscal',
    templateUrl: 'sat-cupom-fiscal.component.html',
    styleUrls: ['sat-cupom-fiscal.component.scss'],
})
export class SATCupomFiscal {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('SAT-Cupom-Fiscal - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'SAT-Cupom-Fiscal - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
