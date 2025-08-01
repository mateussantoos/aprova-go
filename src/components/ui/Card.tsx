import type { CardProps } from "../../types";

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`${className} rounded-xl  border-2 border-b-6 border-gray-200 transition-transform hover:bg-neutral-50 flex flex-col`}
    >
      {children}
    </div>
  );
};
