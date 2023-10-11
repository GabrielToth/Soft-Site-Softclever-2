import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-software-de-gestao-empresarial',
    templateUrl: 'landing-software-de-gestao-empresarial.component.html',
    styleUrls: ['landing-software-de-gestao-empresarial.component.scss'],
})
export class LandingSoftwareDeGestaoEmpresarial {
    rawii8z: string = ' ';
    raw75ql: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Software-de-Gestao-Empresarial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Software-de-Gestao-Empresarial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
