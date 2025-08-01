import { Card } from "../../components/ui/Card";
import { ChartComponent } from "../../components/ui/ChartComponent";
import {
  CalendarDays,
  ClipboardCheck,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { View } from "../../types/index";
import { useNavigate } from "react-router-dom";

const navCards: {
  id: View;
  label: string;
  icon: LucideIcon;
  link?: string;
}[] = [
  {
    id: "cronograma",
    label: "Cronograma",
    icon: CalendarDays,
    link: "/cronograma",
  },
  {
    id: "simulados",
    label: "Simulados",
    icon: ClipboardCheck,
    link: "/simulados",
  },
  { id: "progresso", label: "Progresso", icon: TrendingUp, link: "/progresso" },
  { id: "recursos", label: "Recursos", icon: BookOpen, link: "/recursos" },
];

export const Overview = () => {
  const navigate = useNavigate();
  return (
    <section id="visao-geral" className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-800">
          Visão Geral e Estratégia
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-semibold tracking-wide leading-relaxed">
          Bem-vindo(a) ao seu centro de comando. Aqui você encontra a filosofia
          por trás do seu plano de estudos e as ferramentas para visualizar a
          estratégia. O sucesso no ENEM começa com um plano inteligente, focado
          na Teoria de Resposta ao Item (TRI).
        </p>
      </div>

      {/* Grid com Cards de Navegação */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {navCards.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="cursor-pointer w-full text-left rounded-xl transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={() => {
                if (item.link) {
                  navigate(item.link);
                }
              }}
            >
              <Card className="flex h-56 flex-col items-center justify-center p-6 text-center text-gray-800">
                <Icon className="mb-4 h-20 w-20 stroke-1 text-green-600" />
                <h3 className="text-xl font-bold">{item.label}</h3>
              </Card>
            </button>
          );
        })}
      </div>

      {/* Card Principal com o Gráfico (não clicável) */}
      <Card className="p-4 md:p-6">
        <h3 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Matriz Estratégica: Incidência vs. Amigabilidade-TRI
        </h3>
        <ChartComponent />
        <p className="mt-4 text-center text-sm text-gray-500">
          Foque nos tópicos com alta incidência e alta amigabilidade primeiro.
        </p>
      </Card>
    </section>
  );
};
