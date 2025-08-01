import { Search as SearcIcon } from "lucide-react";
import type { SearchProps } from "../../types";

export const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Pesquisar por matéria ou tópico...",
}: SearchProps) => {
  return (
    <div className=" relative">
      <SearcIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 stroke-3 " />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 text-neutral-700 border-gray-200 focus:border-primary transition font-semibold focus:outline-none"
      />
    </div>
  );
};
