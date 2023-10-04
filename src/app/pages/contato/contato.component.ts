import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
    selector: "app-contato",
    templateUrl: "contato.component.html",
    styleUrls: ["contato.component.scss", "../../../assets/css/button.css"],
})
export class Contato {
    formClient: FormGroup;
    nomeError: string;
    empresaError: string;
    emailError: string;
    telefoneError: string | null = null; // Mensagem de erro personalizada para o telefone
    mensagemError: string;

    showOverlay = false;
    showFail = false;

    isSubmitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
    ) {
        this.formClient = this.formBuilder.group({
            nome: [null, Validators.required],
            empresa: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            telefone: [
                '',
                [
                    Validators.required,
                    Validators.pattern('[- +()0-9]+'), // Validação de número de telefone
                    Validators.minLength(14), // Mínimo de 14 caracteres para um telefone válido
                ],
            ],
            mensagem: [null, Validators.required],
            quem_enviou: "www.softclever.com.br",
        });
    }

    ngOnInit() {
        // Vincule o método formatTelefone ao evento input do campo de telefone
        this.formClient.controls["telefone"].valueChanges.subscribe((value) => {
            console.log("digitei no telefone");
            if (value) {
                console.log("Recebi valor ao digitar: " + value);
                this.formatTelefone(value);
            }
        });
    }

    formatTelefone(value: string) {
        // Remova todos os caracteres não numéricos
        value = value.replace(/\D/g, "");

        // Formata o número no formato desejado
        if (value.length <= 7) {
            value = value.replace(/(\d{2})/, "($1) ");
        } else if (value.length <= 9) {
            value = value.replace(/(\d{2})(\d{5})(\d{1})/, "($1) $2-$3");
        } else if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }

        // Atualize o valor do campo de telefone no formulário
        this.formClient.controls["telefone"].setValue(value, {
            emitEvent: false,
        });
    }

    onSubmit(n: Event) {
        n.preventDefault();

        if (this.formClient.valid) {
            const headers = new HttpHeaders();
            headers.set("Content-Type", "application/x-www-form-urlencoded");

            this.showOverlay = true;

            this.http
                .post(
                    "https://www.api.emissorsatfiscal.net.br/email?token=S0ftCL5vEr!Td4iN70rm@t!CA",
                    this.formClient.value,
                    { headers }
                )
                .pipe(first())
                .subscribe({
                    next: (response) => {
                        console.log(response);
                        this.showOverlay = false;
                        this.router.navigate(["/obrigado"]);
                    },
                    error: (err) => {
                        console.error(err);
                        this.showOverlay = false;
                        this.showFail = true;
                    },
                });
        } else {
            console.log("Não valido");
            // Coleta mensagens de erro para campos inválidos
            this.isSubmitted = true;

            // Verificação do telefone
            const telefoneControl = this.formClient.get('telefone');
            if (telefoneControl?.hasError('pattern')) {
                this.telefoneError = 'Preencha o telefone corretamente.';
            } else {
                this.telefoneError = null;
            }

            this.nomeError = this.formClient.get("nome").hasError("required")
                ? "Nome é obrigatório."
                : "";
            this.empresaError = this.formClient.get("empresa").hasError("required")
                ? "Empresa é obrigatória."
                : "";
            this.emailError = this.formClient.get("email").hasError("required")
                ? "Email é obrigatório."
                : "";
            this.formClient.get("email").hasError("email")
                ? "Email não é válido."
                : "";
            this.telefoneError = this.formClient.get("telefone").hasError("required")
                ? "Telefone é obrigatório."
                : "";
            this.mensagemError = this.formClient.get("mensagem").hasError("required")
                ? "Mensagem é obrigatória."
                : "";
        }
    }
}
