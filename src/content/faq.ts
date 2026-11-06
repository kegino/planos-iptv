export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que está incluído nos planos de IPTV?",
    a: "Todos os nossos planos incluem acesso ilimitado a mais de 35.000 canais ao vivo (abertos, fechados, pay-per-view de esportes e filmes), mais de 70.000 filmes e séries on demand atualizados semanalmente, guia de programação EPG e suporte humanizado via WhatsApp.",
  },
  {
    q: "Os planos IPTV possuem contrato de fidelidade?",
    a: "Não. Em nenhum de nossos planos você fica preso a contratos de permanência ou taxas de cancelamento. Você escolhe o período desejado (mensal, trimestral, semestral ou anual) e só renova se estiver plenamente satisfeito com a qualidade.",
  },
  {
    q: "Posso solicitar um teste grátis antes de contratar um plano?",
    a: "Com certeza! Oferecemos um teste cortesia com liberação imediata no WhatsApp para você verificar na sua própria Smart TV a agilidade na troca de canais e a nitidez em 4K sem pagar nada.",
  },
  {
    q: "Como funciona a contratação de pontos adicionais?",
    a: "Cada assinatura padrão contempla 1 tela simultânea. Caso queira assistir em duas ou mais TVs ao mesmo tempo na mesma residência, disponibilizamos planos com desconto especial para telas adicionais.",
  },
  {
    q: "Qual é a velocidade de internet necessária para os planos?",
    a: "Para transmissões em alta definição (Full HD e 4K), recomendamos conexões de banda larga estáveis a partir de 25 Mbps a 35 Mbps, conectadas preferencialmente via cabo Ethernet ou rede Wi-Fi de 5 GHz.",
  },
  {
    q: "Como recebo meus dados após o pagamento?",
    a: "A liberação é automática e imediata. Logo após a confirmação via Pix no WhatsApp, você recebe o seu usuário, senha, URL Xtream Codes e link M3U com tutorial detalhado de instalação.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Qual plano IPTV oferece o melhor custo-benefício?",
    a: "O Plano Anual oferece a maior economia, saindo por apenas R$ 23,33 ao mês com acesso garantido por 365 dias. Para quem busca um equilíbrio entre curto prazo e desconto, o Plano Semestral é o mais popular.",
  },
  {
    q: "Posso alternar o uso entre a Smart TV e o meu celular?",
    a: "Sim. Você pode instalar o aplicativo em todos os seus aparelhos (TV, celular, notebook e tablet) e assistir alternadamente no aparelho em que estiver utilizando no momento.",
  },
  {
    q: "Os planos transmitem jogos do Brasileirão e Libertadores?",
    a: "Sim, todos os campeonatos nacionais e internacionais, Premiere, canais esportivos por assinatura e eventos pay-per-view estão 100% liberados em resolução Full HD e 4K 60 FPS sem delay.",
  },
  {
    q: "Quais aplicativos são compatíveis com os planos?",
    a: "Nossos planos são compatíveis com os principais players do mercado: IPTV Smarters Pro, XCIPTV, Smart One IPTV, IBO Player, TiviMate, Bob Player, SS IPTV e navegadores web.",
  },
];
