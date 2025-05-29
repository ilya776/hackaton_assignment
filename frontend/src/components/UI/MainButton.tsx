import { type FC } from "react";

type Props = {
  onClick?: () => void;
  className?: string;
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
};

const MainButton: FC<Props> = ({ onClick, className, text, type = undefined }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "w-full text-xl cursor-pointer bg-gr-main/70 hover:bg-gr-main text-[#3d5c3d] font-semibold py-3 px-6 rounded-xl transition-colors text-nowrap " +
        className
      }
    >
      {text}
    </button>
  );
};

export default MainButton;
