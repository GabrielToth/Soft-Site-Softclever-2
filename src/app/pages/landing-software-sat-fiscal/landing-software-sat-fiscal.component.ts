import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-software-sa-fiscal',
    templateUrl: 'landing-software-sat-fiscal.component.html',
    styleUrls: ['landing-software-sat-fiscal.component.scss'],
})
export class LandingSoftwareSATFiscal {
    rawiq3k: string = ' ';
    rawsr22: string = ' ';
    raw01va: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Software-SAT-Fiscal - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Software-SAT-Fiscal - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
