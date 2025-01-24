import React from "react";

type Props = {
  children: string;
};

function FadeText({ children }: Props) {
  return (
    <div className="relative overflow-hidden group">
      <div className="transition translate-y-0 group-hover:-translate-y-full duration-500 ease-[cubic-bezier(.04,.69,.31,.98)]">
        {children}
      </div>
      <div className="absolute top-full group-hover:-translate-y-full transition duration-500 ease-[cubic-bezier(.04,.69,.31,.98)]">
        {children}
      </div>
    </div>
  );
}

export default FadeText;
