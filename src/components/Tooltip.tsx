import { FC, ReactNode } from "react";

type Props = {
  text: string;
  children: ReactNode;
};

export const Tooltip: FC<Props> = ({ text, children }) => {
  return (
    <span className="relative group cursor-help">
      {children}
      <div className="absolute bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 px-3 py-2 z-10 bottom-full pointer-events-none">
        {text}
        <svg
          className="absolute text-black h-2 left-0 ml-3 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </span>
  );
};

export default Tooltip;
