import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'cupom-fiscal-eletronico',
    templateUrl: 'cupom-fiscal-eletronico.component.html',
    styleUrls: ['cupom-fiscal-eletronico.component.scss'],
})
export class CupomFiscalEletronico {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Cupom-Fiscal-Eletronico - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Cupom-Fiscal-Eletronico - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
