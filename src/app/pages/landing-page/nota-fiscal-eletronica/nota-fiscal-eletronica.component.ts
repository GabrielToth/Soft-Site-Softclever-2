import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'nota-fiscal-eletronica',
    templateUrl: 'nota-fiscal-eletronica.component.html',
    styleUrls: ['nota-fiscal-eletronica.component.scss'],
})
export class NotaFiscalEletronica {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Nota-Fiscal-Eletronica - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Nota-Fiscal-Eletronica - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
