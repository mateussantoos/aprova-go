import type { InputHTMLAttributes, ReactNode } from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "terciary" | "danger" | "disabled";
  icon?: ReactNode;
  isGenerating?: boolean;
}

export interface ModalProps {
  children: ReactNode;
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  containerClassName?: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}
