import { Check, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaKeyword: string;
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    duration: "30 dias de acesso",
    price: "R$ 35",
    period: "/mês",
    description: "Excelente para quem quer experimentar a estabilidade sem compromisso de longo prazo.",
    popular: false,
    ctaKeyword: "Plano Mensal Planos IPTV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries sob demanda atualizados",
      "Futebol ao vivo sem travamento",
      "Guia de programação EPG integrado",
      "Suporte humanizado todos os dias",
    ],
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    duration: "90 dias de acesso",
    price: "R$ 90",
    period: "/trimestre",
    description: "3 meses de entretenimento ininterrupto com economia e tranquilidade.",
    popular: false,
    ctaKeyword: "Plano Trimestral Planos IPTV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries sob demanda atualizados",
      "Futebol ao vivo sem travamento",
      "Economia direta sobre a mensalidade",
      "Suporte prioritário via WhatsApp",
    ],
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    duration: "180 dias de acesso",
    price: "R$ 170",
    period: "/semestre",
    description: "Nosso plano mais popular! 6 meses com alta economia e suporte VIP prioritário.",
    popular: true,
    ctaKeyword: "Plano Semestral Planos IPTV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries sob demanda atualizados",
      "Futebol ao vivo sem travamento",
      "Servidores CDN VIP com máxima rota",
      "Suporte humanizado VIP prioritário",
    ],
  },
  {
    id: "anual",
    name: "Plano Anual",
    duration: "365 dias de acesso",
    price: "R$ 280",
    period: "/ano",
    description: "Maior economia do Brasil: 1 ano inteiro pagando apenas R$ 23,33 por mês.",
    popular: false,
    ctaKeyword: "Plano Anual Planos IPTV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries sob demanda atualizados",
      "Futebol ao vivo sem travamento",
      "Acesso VIP a todos os lançamentos",
      "Suporte dedicado 365 dias por ano",
    ],
  },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        plan.popular ? "border-amber-500/60 shadow-amber-950/40 ring-1 ring-amber-500/50" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3.5 py-1 text-xs font-bold text-stone-950 shadow-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          MAIS ESCOLHIDO
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-xs text-slate-300">{plan.duration}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
          <span className="text-xs text-slate-300">{plan.period}</span>
        </div>
        <p className="mt-3 text-xs text-slate-300 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="mt-6 space-y-2.5 text-xs text-slate-200 flex-1 border-t border-white/10 pt-5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-amber-400 mt-0.5" aria-hidden="true" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-2">
        <WhatsAppButton
          keyword={plan.ctaKeyword}
          label="Assinar Plano"
          variant={plan.popular ? "primary" : "whatsapp"}
          size="md"
          className="w-full"
        />
      </div>
    </div>
  );
}
