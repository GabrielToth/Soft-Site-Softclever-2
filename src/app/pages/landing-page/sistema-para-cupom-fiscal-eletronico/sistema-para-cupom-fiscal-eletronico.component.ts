import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-para-cupom-fiscal-eletronico',
    templateUrl: 'sistema-para-cupom-fiscal-eletronico.component.html',
    styleUrls: ['sistema-para-cupom-fiscal-eletronico.component.scss'],
})
export class SistemaParaCupomFiscalEletronico {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-para-Cupom-Fiscal-Eletronico - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-para-Cupom-Fiscal-Eletronico - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
