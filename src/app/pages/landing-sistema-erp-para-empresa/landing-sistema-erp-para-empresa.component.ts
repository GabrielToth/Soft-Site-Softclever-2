import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-sistema-er-para-empresa',
    templateUrl: 'landing-sistema-erp-para-empresa.component.html',
    styleUrls: ['landing-sistema-erp-para-empresa.component.scss'],
})
export class LandingSistemaERPParaEmpresa {
    raw5c67: string = ' ';
    raw7epy: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Sistema-ERP-para-Empresa - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Sistema-ERP-para-Empresa - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
