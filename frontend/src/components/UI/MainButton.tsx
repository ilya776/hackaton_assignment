import { type FC } from "react";

type Props = {
  onClick?: () => void;
  className?: string;
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
};

const MainButton: FC<Props> = ({ onClick, className, text, type = undefined, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={
        "w-full text-xl cursor-pointer bg-gr-main/70 hover:bg-gr-main text-gr-darkest font-semibold py-3 px-6 rounded-xl transition-colors text-nowrap " +
        className
      }
    >
      {text}
    </button>
  );
};

export default MainButton;
