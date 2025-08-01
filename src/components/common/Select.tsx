import { useState, useRef } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import type { SelectOption, SelectProps } from "../../types";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Select = ({
  options,
  value,
  onChange,
  placeholder = "Selecione uma opção...",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const handleSelectOption = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={selectRef} className="relative w-full">
      {/* O botão que abre/fecha o select e mostra o valor selecionado */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full flex items-center justify-between text-left px-4 py-3 bg-white rounded-2xl border-2 text-neutral-700 border-gray-200 focus:border-primary focus:outline-none transition"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="font-semibold">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronsUpDown className="h-5 w-5 text-neutral-400" />
      </button>

      {/* A lista de opções que aparece quando o select está aberto */}
      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelectOption(option)}
              className="flex items-center justify-between px-4 py-3 font-semibold text-neutral-700 cursor-pointer hover:bg-neutral-100 transition"
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
              {value === option.value && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
