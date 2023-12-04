/* eslint-disable react/prop-types */
import { cn } from "../utils/cns";
function buttonStyle({ color, size }) {
  const base = "shadow-xl  hover:shadow-none font-semibold rounded";
  const variants = {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
      danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
    },
    size: {
      small: "py-1 px-3",
      medium: "py-2 px-4",
    },
  };

  return cn(base, variants.color[color], variants.size[size]);
}
export default function Button({ children, color, size }) {
  return <button className={buttonStyle({ color, size })}>{children}</button>;
}

Button.defaultProps = {
  color: "primary",
  size: "medium",
};
