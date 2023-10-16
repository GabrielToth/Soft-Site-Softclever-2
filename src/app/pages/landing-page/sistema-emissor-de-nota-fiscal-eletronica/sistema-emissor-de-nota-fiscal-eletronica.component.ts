import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-emissor-de-nota-fiscal-eletronica',
    templateUrl: 'sistema-emissor-de-nota-fiscal-eletronica.component.html',
    styleUrls: ['sistema-emissor-de-nota-fiscal-eletronica.component.scss'],
})
export class SistemaEmissorDeNotaFiscalEletronica {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-Emissor-de-Nota-Fiscal-Eletronica - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-Emissor-de-Nota-Fiscal-Eletronica - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
