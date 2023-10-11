import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-sistema-para-empresa',
    templateUrl: 'landing-sistema-para-empresa.component.html',
    styleUrls: ['landing-sistema-para-empresa.component.scss'],
})
export class LandingSistemaParaEmpresa {
    raw6og2: string = ' ';
    raw78yz: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Sistema-para-Empresa - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Sistema-para-Empresa - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
