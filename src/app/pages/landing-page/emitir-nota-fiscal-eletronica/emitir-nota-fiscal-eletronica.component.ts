import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emitir-nota-fiscal-eletronica',
    templateUrl: 'emitir-nota-fiscal-eletronica.component.html',
    styleUrls: ['emitir-nota-fiscal-eletronica.component.scss'],
})
export class EmitirNotaFiscalEletronica {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emitir-Nota-Fiscal-Eletronica - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emitir-Nota-Fiscal-Eletronica - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
