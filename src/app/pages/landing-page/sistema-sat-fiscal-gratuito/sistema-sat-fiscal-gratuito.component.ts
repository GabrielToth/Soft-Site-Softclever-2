import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-sa-fiscal-gratuito',
    templateUrl: 'sistema-sat-fiscal-gratuito.component.html',
    styleUrls: ['sistema-sat-fiscal-gratuito.component.scss'],
})
export class SistemaSATFiscalGratuito {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-SAT-Fiscal-Gratuito - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-SAT-Fiscal-Gratuito - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
