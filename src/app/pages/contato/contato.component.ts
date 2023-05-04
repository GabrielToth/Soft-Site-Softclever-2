import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Validators, FormBuilder } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-contato',
  templateUrl: 'contato.component.html',
  styleUrls: ['contato.component.css'],
})
export class Contato {
  formClient = this.formBuilder.group({
    nome: '',
    empresa: '',
    email: '',
    telefone: ['', Validators.pattern('[- +()0-9]+')],
    mensagem: '',
})

  constructor(private title: Title, private meta: Meta, private formBuilder: FormBuilder, private http: HttpClient) {
    this.title.setTitle('Contato - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Contato - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }

  onSubmit(n: any) {
    n.preventDefault()

    const headers = new HttpHeaders()
    headers.set('Content-Type', 'application/x-www-form-urlencoded')

    this.http
      .post(
        'https://www.api.emissorsatfiscal.net.br/send',
        this.formClient.value,
        { headers }
      )
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(response)
          alert('Email enviado!')
        },
        error: (err) => {
          console.error(err)
          alert('Erro ao enviar email.')
        },
      })
  }
}
