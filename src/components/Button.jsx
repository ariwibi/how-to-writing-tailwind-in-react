/* eslint-disable react/prop-types */
import { variant } from "../utils/variant";

const buttonStyle = variant(
  "shadow-xl  hover:shadow-none font-semibold rounded",
  {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
      danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
    },
    size: {
      small: "py-1 px-3",
      medium: "py-2 px-4",
    },
  }
);
export default function Button({ children, color, size }) {
  return (
    <button className={buttonStyle({ color, size, corner: "rounded" })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "primary",
  size: "medium",
};
