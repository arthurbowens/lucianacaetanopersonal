import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LP_CONTEUDO } from './conteudo/lp-conteudo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly conteudo = LP_CONTEUDO;
  protected readonly anoAtual = new Date().getFullYear();
}
