/* eslint-disable react/prop-types */
import { cn } from "../utils/cns";

export default function Button({ children, color }) {
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
    danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
  };
  return (
    <button
      className={cn(
        "py-2 px-4",
        "shadow-xl  hover:shadow-none",
        "font-semibold",
        "rounded",
        colors[color]
      )}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "primary",
};
