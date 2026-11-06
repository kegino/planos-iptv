import { Link } from "@tanstack/react-router";
import { Layers, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-500/20 bg-stone-950 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-black">
                <Layers className="size-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Planos <span className="text-amber-400">IPTV</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              O portal mais completo para comparar e contratar planos de streaming IPTV com qualidade 4K, servidores dedicados anti-buffer e suporte 7 dias por semana.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Planos & Acesso</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/planos" className="hover:text-amber-400 transition-colors">Tabela de Preços</Link></li>
              <li><Link to="/beneficios" className="hover:text-amber-400 transition-colors">Recursos Inclusos</Link></li>
              <li><Link to="/como-funciona" className="hover:text-amber-400 transition-colors">Como Assinar</Link></li>
              <li><Link to="/teste" className="hover:text-amber-400 transition-colors">Teste Cortesia</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Informações</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contato" className="hover:text-amber-400 transition-colors">Suporte WhatsApp</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Artigos & Dicas</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-amber-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-amber-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Planos IPTV. Todos os direitos reservados. Planos de streaming transparentes e sem fidelidade.</p>
        </div>
      </div>
    </footer>
  );
}
