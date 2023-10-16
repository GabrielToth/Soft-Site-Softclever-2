import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-pdvsat',
    templateUrl: 'sistema-pdv-sat.component.html',
    styleUrls: ['sistema-pdv-sat.component.scss'],
})
export class SistemaPDVSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-PDV-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-PDV-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
