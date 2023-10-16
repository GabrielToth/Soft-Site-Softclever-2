import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-er-para-empresa',
    templateUrl: 'sistema-erp-para-empresa.component.html',
    styleUrls: ['sistema-erp-para-empresa.component.scss'],
})
export class SistemaERPParaEmpresa {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-ERP-para-Empresa - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-ERP-para-Empresa - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
