import { useLocation } from "react-router-dom";
import lapis from "../../assets/svg/lapis.svg";
import calendario from "../../assets/svg/calendario.svg";
import casa from "../../assets/svg/casa.svg";
import livro from "../../assets/svg/livro.svg";
import presente from "../../assets/svg/presente.svg";
import prova from "../../assets/svg/prova.svg";
import LogoTexto from "../../assets/svg/logo_texto.svg";
import { Button } from "../common/Button";

const navItems = [
  { href: "/visao-geral", label: "Visão Geral", icon: casa },
  { href: "/cronograma", label: "Cronograma", icon: calendario },
  { href: "/materias", label: "Matérias", icon: livro },
  { href: "/simulados", label: "Simulados", icon: prova },
  { href: "/redacao", label: "Redação", icon: lapis },
  { href: "/recursos", label: "Recursos", icon: presente },
];

export const NavBar = () => {
  const location = useLocation();
  const activeHref = location.pathname;

  return (
    <>
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen bg-white border-r-2 border-gray-200 md:w-20 lg:w-64 transition-all duration-300 ease-in-out">
        <div className="p-4 lg:p-6 lg:pt-10">
          <span className="flex flex-col justify-center items-center md:hidden lg:flex">
            <img src={LogoTexto} alt="Logo" className="w-30" />
          </span>
        </div>
        <nav className="flex flex-col flex-grow justify-between px-2 py-5 lg:px-4 space-y-2 ">
          <div className="flex-2 space-y-2 ">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    flex lg:justify-start md:justify-center items-center p-3 rounded-xl font-black uppercase transition-colors
                    ${
                      isActive
                        ? "bg-sky-100 text-primary border-2 border-primary "
                        : "text-neutral-500 hover:bg-gray-100 "
                    }
                  `}
                >
                  <img src={Icon} className="h-7 w-7" />
                  <span className="ml-6 md:hidden lg:inline lg:text-sm tracking-widest">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
          <Button children="Sair" variant="danger" />
        </nav>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeHref === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`
                flex flex-col items-center p-2 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-sky-100 text-primary border-2 border-primary"
                    : "text-gray-500"
                }
              `}
            >
              <img src={Icon} className="h-6 w-6" />
            </a>
          );
        })}
      </nav>
    </>
  );
};
