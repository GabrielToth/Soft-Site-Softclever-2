import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-sistema-nf-sefaz',
    templateUrl: 'landing-sistema-nfe-sefaz.component.html',
    styleUrls: ['landing-sistema-nfe-sefaz.component.scss'],
})
export class LandingSistemaNFESefaz {
    rawg0ih: string = ' ';
    rawr08l: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Sistema-NFE-Sefaz - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Sistema-NFE-Sefaz - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
