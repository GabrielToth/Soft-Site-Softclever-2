import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-retaguarda-sat',
    templateUrl: 'sistema-retaguarda-sat.component.html',
    styleUrls: ['sistema-retaguarda-sat.component.scss'],
})
export class SistemaRetaguardaSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-Retaguarda-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-Retaguarda-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
