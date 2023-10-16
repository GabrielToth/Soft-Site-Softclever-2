import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-nota-fiscal-eletronica',
    templateUrl: 'software-nota-fiscal-eletronica.component.html',
    styleUrls: ['software-nota-fiscal-eletronica.component.scss'],
})
export class SoftwareNotaFiscalEletronica {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-Nota-Fiscal-Eletronica - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-Nota-Fiscal-Eletronica - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
