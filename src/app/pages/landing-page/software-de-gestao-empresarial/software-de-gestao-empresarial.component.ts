import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-de-gestao-empresarial',
    templateUrl: 'software-de-gestao-empresarial.component.html',
    styleUrls: ['software-de-gestao-empresarial.component.scss'],
})
export class SoftwareDeGestaoEmpresarial {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-de-Gestao-Empresarial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-de-Gestao-Empresarial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
