export interface Beneficio {
  titulo: string;
  descricao: string;
}

export interface PilarMetodo {
  titulo: string;
  descricao: string;
}

export interface Depoimento {
  nome: string;
  idade: string;
  resultado: string;
  relato: string;
}

export interface LPConteudo {
  nomeProfissional: string;
  especialidade: string;
  subtituloHero: string;
  tituloHero: string;
  descricaoHero: string;
  destaquesHero: string[];
  ctaPrincipal: string;
  tituloDor: string;
  dores: string[];
  descricaoDor: string;
  ctaSecundaria: string;
  tituloBeneficios: string;
  beneficios: Beneficio[];
  tituloMetodo: string;
  pilares: PilarMetodo[];
  tituloDepoimentos: string;
  depoimentos: Depoimento[];
  tituloSobre: string;
  descricaoSobre: string;
  diferenciaisSobre: string[];
  ctaFinalTitulo: string;
  ctaFinalDescricao: string;
  ctaFinalBotao: string;
}
