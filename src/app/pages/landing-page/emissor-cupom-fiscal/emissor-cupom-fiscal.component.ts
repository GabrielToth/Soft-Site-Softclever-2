import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-cupom-fiscal',
    templateUrl: 'emissor-cupom-fiscal.component.html',
    styleUrls: ['emissor-cupom-fiscal.component.scss'],
})
export class EmissorCupomFiscal {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-Cupom-Fiscal - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-Cupom-Fiscal - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
