import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-er-para-varejo',
    templateUrl: 'sistema-erp-para-varejo.component.html',
    styleUrls: ['sistema-erp-para-varejo.component.scss'],
})
export class SistemaERPParaVarejo {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-ERP-para-Varejo - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-ERP-para-Varejo - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
