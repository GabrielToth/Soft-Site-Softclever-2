import { Component, OnInit } from '@angular/core';

declare const gtag: Function;

@Component({
    selector: 'app-obrigado',
    templateUrl: './obrigado.component.html',
    styleUrls: ['./obrigado.component.scss'],
})
export class ObrigadoComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        // Configurar o Google Analytics (substitua 'GA_MEASUREMENT_ID' pelo seu ID de acompanhamento)
        gtag('config', 'G-KDN1VFL478');

        // Disparar o evento de conversão
        gtag('event', 'conversion', {'send_to': 'AW-1024274254/Nz-MCL-2xOgYEM7etOgD'});
    }
}