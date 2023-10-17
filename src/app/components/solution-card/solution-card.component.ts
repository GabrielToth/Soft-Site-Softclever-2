import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-solution-card',
    templateUrl: './solution-card.component.html',
    styleUrls: ['./solution-card.component.scss'],
})
export class SolutionCardComponent {
    @Input()
    image?: string = '/assets/images/atacado-e-distribuicao-1500w.webp';
    @Input()
    text?: string =
        'NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.';
    @Input()
    heading?: string = 'Atacado e Distribuição';
    @Input()
    image_alt?: string = 'Atacado e Distribuição';
}
