import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
    selector: "app-contato",
    templateUrl: "contato.component.html",
    styleUrls: ["contato.component.css"],
})
export class Contato {
    formClient = this.formBuilder.group({
        nome: '',
        empresa: '',
        email: '',
        telefone: ['', Validators.pattern('[- +()0-9]+')],
        mensagem: '',
        quem_enviou: 'www.softclever.com.br',
    })

    showOverlay = false

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit() {
        // Vincule o método formatTelefone ao evento input do campo de telefone
        this.formClient.controls['telefone'].valueChanges.subscribe((value) => {
            console.log('digitei no telefone')
            if (value) {
                console.log('Recebi valor ao digitar: ' + value)
                this.formatTelefone(value)
            }
        })
    }

    formatTelefone(value: string) {
        // Remova todos os caracteres não numéricos
        value = value.replace(/\D/g, '')

        // Formata o número no formato desejado
        if (value.length <= 7) {
            value = value.replace(/(\d{2})/, '($1) ')
        } else if (value.length <= 9) {
            value = value.replace(/(\d{2})(\d{5})(\d{1})/, '($1) $2-$3')
        } else if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        }

        // Atualize o valor do campo de telefone no formulário
        this.formClient.controls['telefone'].setValue(value, {
            emitEvent: false,
        })
    }

    onSubmit(n: any) {
        n.preventDefault()

        const headers = new HttpHeaders()
        headers.set('Content-Type', 'application/x-www-form-urlencoded')

        this.showOverlay = true

        this.http
            .post(
                'https://www.api.emissorsatfiscal.net.br/email?token=S0ftCL5vEr!Td4iN70rm@t!CA',
                this.formClient.value,
                { headers }
            )
            .pipe(first())
            .subscribe({
                next: (response) => {
                    console.log(response)
                    this.showOverlay = false
                    this.router.navigate(['/obrigado'])
                },
                error: (err) => {
                    console.error(err)
                    alert('Erro ao enviar, se persistir entre em contato!')
                    this.showOverlay = false
                },
            })
    }
}
