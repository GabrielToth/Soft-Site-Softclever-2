import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-de-gestao-empresarial',
    templateUrl: 'sistema-de-gestao-empresarial.component.html',
    styleUrls: ['sistema-de-gestao-empresarial.component.scss'],
})
export class SistemaDeGestaoEmpresarial {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-de-Gestao-Empresarial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-de-Gestao-Empresarial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
