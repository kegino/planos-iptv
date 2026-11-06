import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, ShieldCheck, Award, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.webp"
          alt="Planos IPTV Background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08] via-[#0e0b08]/85 to-[#0e0b08]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b08] via-transparent to-[#0e0b08]/90" />
      </div>

      <div className="container-page py-20 text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/60 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
          <Layers className="size-3.5 text-amber-400" />
          <span>Os Melhores Planos IPTV com Teste Grátis e Sem Fidelidade</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
          Encontre os Melhores <span className="gradient-text">Planos IPTV</span> em 4K
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Compare e escolha a assinatura perfeita para sua família: mais de 35.000 canais ao vivo, futebol sem delay, filmes do cinema e séries completas sem travar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            keyword="Teste Rápido Planos IPTV"
            label="Solicitar Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Ver Tabela de Planos IPTV"
            label="Ver Tabela de Planos"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">A partir de R$ 23</span>
            <p className="text-xs text-slate-300 mt-0.5">Maior economia do Brasil</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">Sem Fidelidade</span>
            <p className="text-xs text-slate-300 mt-0.5">Cancele quando quiser</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">+35.000 Canais</span>
            <p className="text-xs text-slate-300 mt-0.5">Grade completa em 4K</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">Ativação Expressa</span>
            <p className="text-xs text-slate-300 mt-0.5">Em menos de 5 minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
