import { Component, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class Menu {
    isMobileOpen: boolean = false;

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    setOpen(mobile: boolean): void {
        this.isMobileOpen = mobile;

        // Acessando o elemento <body>
        const body = this.el.nativeElement.ownerDocument.body;

        if (this.isMobileOpen) {
            // Adicionar a classe 'unscrollable' ao <body>
            this.renderer.addClass(body, 'unscrollable');
        } else {
            // Remover a classe 'unscrollable' do <body>
            this.renderer.removeClass(body, 'unscrollable');
        }
    }
}
