import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-de-gestao-para-industria',
    templateUrl: 'software-de-gestao-para-industria.component.html',
    styleUrls: ['software-de-gestao-para-industria.component.scss'],
})
export class SoftwareDeGestaoParaIndustria {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-de-Gestao-para-Industria - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-de-Gestao-para-Industria - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
