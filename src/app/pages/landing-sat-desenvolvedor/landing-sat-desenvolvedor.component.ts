import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-sa-desenvolvedor',
    templateUrl: 'landing-sat-desenvolvedor.component.html',
    styleUrls: ['landing-sat-desenvolvedor.component.scss'],
})
export class LandingSATDesenvolvedor {
    rawtect: string = ' ';
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-SAT-Desenvolvedor - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-SAT-Desenvolvedor - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
